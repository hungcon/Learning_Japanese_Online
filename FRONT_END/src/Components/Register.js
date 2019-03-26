import React from 'react';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: true
        };
    }
    // step1 nghĩa là nó đã đăng ký thành công tài khoản và chuyển sang chọn level
    render() {
        return (
            <div className="bg-gradient-primary body--regist">

            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
