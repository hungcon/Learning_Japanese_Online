import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
import {connect} from 'react-redux'
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mark: '',
            rule: '',
        };
    }

    componentWillMount(){
        var params;
        if(this.props.match.params.type === "ABCD"){
            params = {
                user_id: JSON.parse(localStorage.getItem('user')).id,
                type: this.props.match.params.type,
                data: this.props.userAnswer,
            }
        }else{
            params = {
                user_id: JSON.parse(localStorage.getItem('user')).id,
                type: this.props.match.params.type,
                data: this.props.arrChoosed,
            }
        }

        axios.post(`http://127.0.0.1:8000/api/lesson/`+ this.props.match.params.lesson_id +`/submit`, params)
        .then(res => {
            if(res.data.error != null){
                this.props.AlertOn(res.data.error,'danger');
            }else{
                this.setState({
                    mark: res.data.mark,
                    rule: res.data.rule,
                });
            }
        }).catch(function (error) {
            alert(error + '. Something was wrong');
        })  
    }

    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* chỗ này cần truyền tên và id người dùng để có thể để hiển thị ở trên cùng */}
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {/* tiêu đề của bài */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">{this.state.rule}</h1>
                                <a href="#4N" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> download</a>
                            </div>
                            {/* Page Heading */}
                            {/* đây là 1 câu hỏi */}
                            <div className="row">
                                <div className="col-lg-3" />
                                <div className="col-lg-6 mb-4">
                                    {/* Illustrations */}
                                    <div className="card shadow">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary q-number">Result</h6>
                                            {/* Note: đây là chỗ bấm xong thì hiển thị kết quả sẽ là 1 trong 2 -- if */}
                                            <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                                <i className="fas fa-check">
                                                </i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '30em' }} src="https://static.careers360.mobi/media/article_images/2019/1/31/MAT-Result.jpg" alt="" />
                                            </div>
                                            <p className="q-question mt-3">Your result is: {this.state.mark}/10</p>
                                            <p>Do you want to test again?</p>
                                            {/* Note: cái này sẽ hiện ra sau khi người dùng trả lời */}
                                            <div className="q-continue mb-3 mr-2">
                                                <NavLink to={'/test/' + this.props.match.params.lesson_id}  className="btn btn-danger  btn-lg float-left">
                                                    &lt; Try
                                                </NavLink>
                                                <NavLink to={'/list/' + this.state.rule} className="btn btn-info  btn-lg float-right">
                                                    Continue &gt;
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" />
                                </div>
                                {/* Content Row */}
                            </div>
                            {/* /.container-fluid */}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userAnswer: state.userAnswer,
        arrChoosed: state.chooseString,
        notification: state.notification,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AlertOn: (data,classDispath) => {
            dispatch({type:'SHOW_MESSAGE', message: data, class: classDispath})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);