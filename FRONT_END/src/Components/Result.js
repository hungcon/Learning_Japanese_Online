import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
class Result extends Component {
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
                                <h1 className="h3 mb-0 text-gray-800">Hiragana</h1>
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
                                            <p className="q-question mt-3">Your result is: 9/10</p>
                                            <p>Do you want to test again?</p>
                                            {/* Note: cái này sẽ hiện ra sau khi người dùng trả lời */}
                                            <div className="q-continue mb-3 mr-2">
                                                <a href="#4N" className="btn btn-danger  btn-lg float-left">
                                                    &lt; Try
                                                </a>
                                                <a href="#4N" className="btn btn-info  btn-lg float-right">
                                                    Continue &gt;
                                                </a>
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
export default Result;