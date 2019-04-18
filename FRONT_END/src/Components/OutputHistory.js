import React, { Component } from 'react';
import axios from 'axios';
class OutputHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            resultHistory :[],
        };
    }

    // Lấy ra dữ liệu kết quả bài test từ phía serve 
    componentWillMount =()=>{
        console.log('Render cwm !!!!'); 
        var user = localStorage.getItem('user');
        var idUser = {
            id : JSON.parse(user).id
        }
        axios.put(`http://127.0.0.1:8000/api/history`, idUser )
        .then(res => {
            if(res.data.error != null){
            }else{
                console.log(JSON.parse(JSON.stringify(res.data.history)));
                this.setState({
                    resultHistory :JSON.parse(JSON.stringify(res.data.history))
                });
            }
        }).catch(function (error) {
          console.log(error);
          alert(error);
        });
    }

    // XỬ LÍ CSS CHO TRANG PHÂN TRANG 
    // Type : biến phân biết bạn nhấn next , back để chuyển trang ( giá trị 1 ) hay click trực tiếp vào trang  ( giá trị 0 )
    // currentPage : vị trí trang đang đứng 
    handleCssPage =(e,type,currentPage)=>{

        // Xử lí css cho nút vị trí trang 
        var btnPage = document.getElementsByClassName('paginate_button page-item page');
        for (let i = 0; i < btnPage.length; i++) {
            btnPage[i].classList.remove('active');
        }
        if(type === 0){
            e.target.parentElement.classList.add('active');
        }else{
            btnPage[currentPage-1].classList.add('active');
        }

        // Ẩn nút previous 
        var btnPrevious = document.getElementsByClassName('paginate_button page-item previous');
        if(currentPage> 1){
            btnPrevious[0].classList.remove('disabled');
        }else{
            btnPrevious[0].classList.add('disabled');
        }


        // Ẩn nút next
        var countHistorys = this.state.resultHistory.length;
        var btnNext = document.getElementsByClassName('paginate_button page-item next');
        if((currentPage*2 === countHistorys) || ((currentPage*2-1) === countHistorys)){
            btnNext[0].classList.add('disabled');
        }else{
            btnNext[0].classList.remove('disabled');
        }
    }

    // Xử lí khi back lại 
    handlePrevious =(e)=>{
        e.preventDefault();
        this.handleCssPage(e,1,this.state.activePage-1);
        if(this.state.activePage >1){
            this.setState({
                activePage: this.state.activePage -1
            })
        }
    }

    // Xử lí khi next chuyển  trang 
    handleNext =(e)=>{
        e.preventDefault();
        this.handleCssPage(e,1,this.state.activePage+1);
        var historys = this.state.resultHistory;
        if(this.state.activePage < historys.length){
            this.setState({
                activePage: this.state.activePage + 1
            })
        }
    }

    displayNextPaging =()=>{
        var countHistorys = this.state.resultHistory.length;
        if(countHistorys <=2){
            return  <li className="paginate_button page-item next disabled" id="dataTable_next"><a href="#4AE" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link"  onClick={(e) => this.handleNext(e)}>Next</a></li>
        }else{
            return  <li className="paginate_button page-item next" id="dataTable_next"><a href="#4AE" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link"  onClick={(e) => this.handleNext(e)}>Next</a></li>
        }
    }

    // Hàm xử lí khi nhấn vào các vị trí các trang 
    handlePageChange(e,pageNumber) {
        e.preventDefault();
        var currentPage= e.target.getAttribute('data-dt-idx');
        this.handleCssPage(e,0,currentPage);
        this.getResultHistory(pageNumber);
        this.setState({activePage: pageNumber});
    }
    
    // Hàm hiện thị html cho phân trang 
    displayPaging =()=>{
        var historys = this.state.resultHistory;
        var countHistorys = historys.length;
        return historys.map((value, key) => {
            if(key<(countHistorys/2)){
                if(key===0){
                    return (
                        <li className="paginate_button page-item page active"><a href="#4AE" aria-controls="dataTable" data-dt-idx={key+1} tabIndex={key} className="page-link" onClick={(e)=>{this.handlePageChange(e,key+1)}}>{key+1}</a></li>
                    );
                }else{
                    return (
                        <li className="paginate_button page-item page "><a href="#4AE" aria-controls="dataTable" data-dt-idx={key+1} tabIndex={key} className="page-link" onClick={(e)=>{this.handlePageChange(e,key+1)}}>{key+1}</a></li>
                    );
                }
            }
            return '';
        });
    }

    // Hàm hiện thị nội dung của kết quả lịch sử lấy về từ serve 
    getResultHistory = (pageNumber) => {
        var historys = this.state.resultHistory;
        var locationStart = pageNumber * 2 - 2;
        return historys.map((value, key) => {
            if ((key >= locationStart)&&(key<= (locationStart + 1))){
                return (
                    <tr role="row" className="odd">
                        <td className="sorting_1">{key+1}</td>
                        <td>{value.nameRule}</td>
                        <td>{value.nameLesson}</td>
                        <td>{value.date}</td>
                        <td>{value.mark}</td>
                    </tr>
                )
            }
            return '';
        });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                            <thead>
                                <tr role="row">
                                    <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '10%' }}>STT</th>
                                    <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '20%' }}>Level
                                    </th>
                                    <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '30%' }}>Name of lesson
                                    </th>                  
                                    <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '45%' }}>Date finish</th>
                                    <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '15%' }}>Point</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.getResultHistory(this.state.activePage)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to
                     10 </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                            <ul className="pagination">
                                <li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#4AE" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link" onClick={(e) => this.handlePrevious(e)}>Previous</a>
                                </li>
                                {/** Hiện thị số lượng page */}
                                {this.displayPaging()}
                                {/** Hiện thị nút next */}
                                {this.displayNextPaging()}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OutputHistory;