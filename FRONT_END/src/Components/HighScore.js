import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
class HighScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            highScore: [],
        };
    }

    // Lấy ra dữ liệu kết quả bài test có điểm cao nhất  từ phía serve 
    componentWillMount = () => {
        var user = localStorage.getItem('user');
        var idUser = {
            id: JSON.parse(user).id
        }
        axios.put(`http://127.0.0.1:8000/api/result`, idUser)
            .then(res => {
                if (res.data.error != null) {
                } else {
                    console.log(JSON.parse(JSON.stringify(res.data.historyHighScore)));
                    this.setState({
                        highScore: JSON.parse(JSON.stringify(res.data.historyHighScore))
                    });
                }
            }).catch(function (error) {
                console.log(error);
                alert(error);
            });
    }

    getHistoryHighScore = () => {
        var historyHighScore = this.state.highScore;
        return (
            <tr role="row" className="odd">
                <td className="sorting_1">{1}</td>
                <td>{historyHighScore.nameRule}</td>
                <td>{historyHighScore.nameLesson}</td>
                <td>{historyHighScore.date}</td>
                <td>{historyHighScore.mark}</td>
            </tr>
        )
    }
    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div>
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">HIGHT SCORE</h1>
                                </div>
                                <div className="row">
                                    <div className="col-2" />
                                    <div className="card shadow mb-4 col-8">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary">History learning</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                                                <thead>
                                                                    <tr role="row">
                                                                        <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '10%' }}>STT</th>
                                                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '15%' }}>Level
                                                                        </th>
                                                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '30%' }}>Name of lesson
                                                                        </th>
                                                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '45%' }}>Date finish</th>
                                                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '15%' }}>Point</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        this.getHistoryHighScore()
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2" />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default HighScore;