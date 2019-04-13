import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
import Level from './Level';
import Lesson from './Lesson';
class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container-fluid">
            {/* Huy note: chỗ này m đổ tên trường ra cho tao: là cái rule ý */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4 row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <h1 class="h3 mb-0 text-gray-800">Beginner A1 - 3%</h1>
                    </div>
                    <div class="col-md-3"></div>
                </div>

            {/* list các bài học */}
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
