import React from 'react';
import {connect} from 'react-redux';
import ChooseLevel from './ChooseLevel';
import Register from './Register';
class RegAndChoose extends React.Component {
    displayContent = () => {
        if(this.props.isRegistered){
            return <ChooseLevel />
        }else {
            return <Register />
        }
    }
    // step1 nghĩa là nó đã đăng ký thành công tài khoản và chuyển sang chọn level
    render() {
        return (
            <div>
                 {this.displayContent()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isRegistered: state.isRegistered
  }
}
export default connect(mapStateToProps)(RegAndChoose)
