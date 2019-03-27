import React from 'react';
import Lession from './Lession';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container-fluid">
                {/* tiêu đề: VD hiragana, katakana ... lấy từ bảng rule  */}
                <div className="d-sm-flex align-items-left justify-content-between mb-4 row" >
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <h1 className="h3 mb-0 text-gray-800 text-left">Tiêu đề của Level</h1>
                    </div>
                    <div className="col-md-3" />
                </div >

                {/* xử lý js để lấy list các lesson trong 1 level: lấy ra id bài học, tên bài học và process*/}
                <Lession  />
                <Lession  />
                <Lession  />
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
