import React, { Component } from 'react';
import OutputHistory from './OutputHistory';
import PagingHistory from './PagingHistory';

class History extends Component {
    render() {
        return (
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
                                        <OutputHistory/>
                                        <OutputHistory/>
                                        <PagingHistory/>
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
        );
    }
}
export default History;