import React, { Component } from 'react';
import OutputHistory from './OutputHistory';
import PagingHistory from './PagingHistory';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

class History extends Component {
    render() {
        return (

            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* chỗ này cần truyền tên và id người dùng để có thể để hiển thị ở trên cùng */}
                    <div id="content">
                        <Topbar />
                        <div>
                            <div className="container-fluid">
                                {/* tiêu đề của bài */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">History</h1>
                                    <a href="#4AE" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> download</a>
                                </div>
                                {/* Page Heading */}
                                {/* đây là 1 câu hỏi */}
                                <div className="row">
                                    <div className="col-2" />
                                    <div className="card shadow mb-4 col-8">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary">History learning</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                                    <OutputHistory />
                                                    <OutputHistory />
                                                    <PagingHistory />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2" />
                                </div>
                                {/* Content Row */}
                            </div>
                            {/* /.container-fluid */}
                            {/* End of Main Content */}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
export default History;