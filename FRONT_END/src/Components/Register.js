import React from 'react';
import {connect} from 'react-redux';
class Register extends React.Component {
    displayContent = () => {
        if(this.props.isRegistered){
            return <div className="bg-gradient-primary body--choose">
            <div className="container">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{height: '760px'}} />
                    <div className="col-lg-7">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Please choose level</h1>
                        </div>
                        <form className="user">
                          {/* mới bắt đầu */}
                          <div className="card shadow mb-4">
                            {/* Card Header - Accordion */}
                            <a href="#beginer" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="beginer">
                              <h6 className="m-0 font-weight-bold text-primary">Beginer</h6>
                            </a>
                            {/* Card Content - Collapse */}
                            <div className="collapse show" id="beginer" style={{}}>
                              <div className="card-body">
                                You should learn two alphabet: <strong>Hiragana(あ い う え お )</strong> and <strong>Katakana (ア イ ウ エ オ )</strong>
                              </div>
                            </div>
                            <a href="#" className="btn btn-success btn-icon-split">
                              <span className="icon text-white-50">
                                <i className="fas fa-check" />
                              </span>
                              <span className="text">I am beginer of Japanese</span>
                            </a>
                          </div>
                          {/* Muốn học N5 */}
                          <div className="card shadow mb-4">
                            {/* Card Header - Accordion */}
                            <a href="#N5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N5">
                              <h6 className="m-0 font-weight-bold text-primary">JLPT N5</h6>
                            </a>
                            {/* Card Content - Collapse */}
                            <div className="collapse show" id="N5" style={{}}>
                              <div className="card-body">
                                You should study the first 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                              </div>
                            </div>
                            <a href="#" className="btn btn-primary btn-icon-split">
                              <span className="icon text-white-50">
                                <i className="fas fa-flag" />
                              </span>
                              <span className="text">I want to learn JLPT N5</span>
                            </a>
                          </div>
                          {/* muốn học N4 */}
                          <div className="card shadow mb-4">
                            {/* Card Header - Accordion */}
                            <a href="#N4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N4">
                              <h6 className="m-0 font-weight-bold text-primary">JLPT N4</h6>
                            </a>
                            {/* Card Content - Collapse */}
                            <div className="collapse show" id="N4" style={{}}>
                              <div className="card-body">
                                You should study the last 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                              </div>
                            </div>
                            <a href="#" className="btn btn-danger btn-icon-split">
                              <span className="icon text-white-50">
                                <i className="fas fa-arrow-right" />
                              </span>
                              <span className="text">I want to learn JLPT N4</span>
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        }else {
            return <div className="bg-gradient-primary body--regist">
                        <div className="container">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                                    <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary btn-user btn-block" onClick = {() => this.props.handleFormChooseLevel()}>
                                            Register Account
                                        </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                        <a className="small" href="login.html">Already have an account? Login!</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>;
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

  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
          handleFormChooseLevel: () => {
              
              dispatch({type: 'DISPLAY_FORM_CHOOSE_LEVEL'})
          }
      }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Register)
