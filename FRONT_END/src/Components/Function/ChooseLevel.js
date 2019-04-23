import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom';

class ChooseLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
        };
    }

    render() {
        if(this.state.user.level === 0){
            return (
                <div className="bg-gradient-primary body--choose">
                    <div className="container">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{height: '760px'}} />
                            <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Please choose level</h1>
                                </div>
                                <form className="user">
                                {/* mới bắt đầu */}
                                <div className="card shadow mb-4">
                                    {/* Card Header - Accordion */}
                                    <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="beginer"  href="123">
                                    <h6 className="m-0 font-weight-bold text-primary">Beginer</h6>
                                    </a>
                                    {/* Card Content - Collapse */}
                                    <div className="collapse show" id="beginer" style={{}}>
                                    <div className="card-body">
                                        You should learn two alphabet: <strong>Hiragana(あ い う え お )</strong> and <strong>Katakana (ア イ ウ エ オ )</strong>
                                    </div>
                                    </div>
                                    <NavLink to="/list/beginer" className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check" />
                                    </span>
                                    <span className="text">I am beginer of Japanese</span>
                                    </NavLink>
                                </div>
                                {/* Muốn học N5 */}
                                <div className="card shadow mb-4">
                                    {/* Card Header - Accordion */}
                                    <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N5"  href="123">
                                    <h6 className="m-0 font-weight-bold text-primary">JLPT N5</h6>
                                    </a>
                                    {/* Card Content - Collapse */}
                                    <div className="collapse show" id="N5" style={{}}>
                                    <div className="card-body">
                                        You should study the first 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                                    </div>
                                    </div>
                                    <NavLink to="/list/JLPTN5" className="btn btn-primary btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-flag" />
                                    </span>
                                    <span className="text">I want to learn JLPT N5</span>
                                    </NavLink>
                                </div>
                                {/* muốn học N4 */}
                                <div className="card shadow mb-4">
                                    {/* Card Header - Accordion */}
                                    <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N4"  href="123">
                                    <h6 className="m-0 font-weight-bold text-primary">JLPT N4</h6>
                                    </a>
                                    {/* Card Content - Collapse */}
                                    <div className="collapse show" id="N4" style={{}}>
                                    <div className="card-body">
                                        You should study the last 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                                    </div>
                                    </div>
                                    <NavLink to="/list/JLPTN4" className="btn btn-danger btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-arrow-right" />
                                    </span>
                                    <span className="text">I want to learn JLPT N4</span>
                                    </NavLink>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>          
            );   
        }else if(this.state.user.level === 1){
            return <Redirect to='/list/beginer'  />;
        }else if(this.state.user.level === 2){
            return <Redirect to='/list/beginer'  />;
        }else if(this.state.user.level === 3){
            return <Redirect to='/list/JLPTN5'  />;
        }else if(this.state.user.level === 4){
            return <Redirect to='/list/JLPTN4'  />;
        }
    }
}

export default ChooseLevel;