import React, { Component } from 'react';

class QuestionABCD extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {/* tiêu đề của bài */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Hiragana</h1>
                        <a href="#4AE" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> download</a>
                    </div>
                    {/* Page Heading */}
                    {/* đây là 1 câu hỏi */}
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6 mb-4">
                            {/* Illustrations */}
                            <div className="card shadow">
                                <div className="card-header">
                                    <h6 className="m-0 font-weight-bold text-primary q-number">Question 1 (1/10)</h6>
                                    {/* Note: đây là chỗ bấm xong thì hiển thị kết quả sẽ là 1 trong 2 -- if */}
                                    <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                        <i className="fas fa-check">
                                        </i>
                                    </div>
                                    {/* Trường hợp sai */}
                                    {/* <div class="result-btn btn btn-danger btn-circle btn-md">
              <i class="fas fa-times"></i>
            </div> */}
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '20rem' }} src="img/Japanese_hira_A.png" alt="" />
                                    </div>
                                    <p className="q-question">Nội dung câu hỏi sẽ được điền vào đây nhé
                                    これからおせわになります</p>
                                    <p>Select one: </p>
                                    {/* Note: Mỗi 1 div q-abcd-answer tương đương với 1 button. Gán sự kiện onclick vào luôn nhé */}
                                    <div className="q-abcd-answer clearfix">
                                        <div className="q-abcd-btn float-left">
                                            <img src="img/q-answer-a.png" alt="A" className="img-fluid q-op-image q-option" />
                                        </div>
                                        <div className="q-abcd-content float-left">
                                            あ
                                    </div>
                                    </div>
                                    <hr />
                                    <div className="q-abcd-answer clearfix">
                                        <div className="q-abcd-btn float-left">
                                            <img src="img/q-answer-b.png" alt="B" className="img-fluid q-op-image q-option" />
                                        </div>
                                        <div className="q-abcd-content float-left">
                                            い
                                    </div>
                                    </div>
                                    <hr />
                                    <div className="q-abcd-answer clearfix">
                                        <div className="q-abcd-btn float-left">
                                            <img src="img/q-answer-c.png" alt="C" className="img-fluid  q-op-image q-option" />
                                        </div>
                                        <div className="q-abcd-content float-left">
                                            う
                                    </div>
                                    </div>
                                    <hr />
                                    <div className="q-abcd-answer clearfix">
                                        <div className="q-abcd-btn float-left">
                                            <img src="img/q-answer-d.png" alt="D" className="img-fluid q-op-image q-option" />
                                        </div>
                                        <div className="q-abcd-content float-left">
                                            え
                                    </div>
                                    </div>
                                </div>
                                {/* Note: cái này sẽ hiện ra sau khi người dùng trả lời */}
                                <div className="q-continue mb-3 mr-2">
                                    <a href="#4AE" className="btn btn-info w-25 btn-lg float-right">
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
        );
    }
}

export default QuestionABCD;