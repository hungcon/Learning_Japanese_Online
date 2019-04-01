import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state= {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeat: '',
        }
    }
    handleChangeFirstName = event => {
        this.setState({ firstname: event.target.value });
    }

    handleChangeLastName = event => {
        this.setState({ lastname: event.target.value });
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
    this.setState({ password: event.target.value });
    }

    handleChangeRepeat = event => {
        this.setState({ repeat: event.target.value });
    }

    handleSubmitCreateUser = event => {
        event.preventDefault();
        console.log(this.state);
        var user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            repeat: this.state.repeat
        };

        console.log(user);
        axios.post(`http://127.0.0.1:8000/api/user/create`, user )
        .then(res => {
          if(res.data.error != null){
              this.props.AlertOn(res.data.error,'danger');
          }else{
              this.props.AlertOn(res.data.message,'success');
              localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        }).catch(function (error) {
          console.log(error);
        })
    }

    render() {
        if(localStorage.getItem('user') !== null){ return <Redirect to='/list'  />;}
        return (
            <div className="bg-gradient-primary body--regist">
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
                                    <input type="text" onChange={this.handleChangeFirstName} className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-6">
                                    <input type="text" onChange={this.handleChangeLastName} className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" onChange={this.handleChangeEmail} className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" onChange={this.handleChangePassword} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                    </div>
                                    <div className="col-sm-6">
                                    <input type="password" onChange={this.handleChangeRepeat} className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                    </div>
                                </div>
                                <a href="#4N" className="btn btn-primary btn-user btn-block" onClick = {this.handleSubmitCreateUser}>
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
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      notification: state.notification
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AlertOn: (data,classDispath) => {
            dispatch({type:'SHOW_MESSAGE', message: data, class: classDispath})
        }
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Register)