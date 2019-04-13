import React, { Component } from 'react';
// import Navbar from './Navbar';

class ChooseLevel extends Component {
    render() {
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
                                <a href="#beginer" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="beginer">
                                <h6 className="m-0 font-weight-bold text-primary">Beginer</h6>
                                </a>
                                {/* Card Content - Collapse */}
                                <div className="collapse show" id="beginer" style={{}}>
                                <div className="card-body">
                                    You should learn two alphabet: <strong>Hiragana(あ い う え お )</strong> and <strong>Katakana (ア イ ウ エ オ )</strong>
                                </div>
                                </div>
                                <a href="https://vnexpress.net/du-lich" className="btn btn-success btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-check" />
                                </span>
                                <span className="text">I am beginer of Japanese</span>
                                </a>
                            </div>
                            {/* Muốn học N5 */}
                            <div className="card shadow mb-4">
                                {/* Card Header - Accordion */}
                                <a href="#N5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N5">
                                <h6 className="m-0 font-weight-bold text-primary">JLPT N5</h6>
                                </a>
                                {/* Card Content - Collapse */}
                                <div className="collapse show" id="N5" style={{}}>
                                <div className="card-body">
                                    You should study the first 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                                </div>
                                </div>
                                <a href="https://vnexpress.net/du-lich" className="btn btn-primary btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag" />
                                </span>
                                <span className="text">I want to learn JLPT N5</span>
                                </a>
                            </div>
                            {/* muốn học N4 */}
                            <div className="card shadow mb-4">
                                {/* Card Header - Accordion */}
                                <a href="#N4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N4">
                                <h6 className="m-0 font-weight-bold text-primary">JLPT N4</h6>
                                </a>
                                {/* Card Content - Collapse */}
                                <div className="collapse show" id="N4" style={{}}>
                                <div className="card-body">
                                    You should study the last 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                                </div>
                                </div>
                                <a href="https://vnexpress.net/du-lich" className="btn btn-danger btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-arrow-right" />
                                </span>
                                <span className="text">I want to learn JLPT N4</span>
                                </a>
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
    }
}

export default ChooseLevel;