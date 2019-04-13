import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
import Level from './Level';
class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* chỗ này cần truyền tên và id người dùng để có thể để hiển thị ở trên cùng */}
                    <div id="content">
                        <Topbar />
                        <div className="row">
                            {/* <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{height: '760px'}} /> */}
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Please choose level</h1>
                                    </div>
                                    <form className="user">
                                        <Level type="begin" classBtn="btn btn-danger btn-icon-split" />
                                        <Level type="advance" classBtn="btn btn-success btn-icon-split" />
                                    </form>
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

ComponentName.propTypes = {};

export default ComponentName;
