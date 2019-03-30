import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
// import Level from './Level';
import Footer from './Footer';
import Test from './Test';
// import History from './History';
// import Result from './Result';

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
                        {/* <Level/>
                        <Level/> */}
                        {/* <Result/> */}
                        {/* <History/> */}
                        <Test/>
                        <Footer/>
                    </div>
                </div>
            </div>
            
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
