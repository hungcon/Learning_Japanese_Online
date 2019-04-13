import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
  }

  const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
  }

  const minLength = (value) => {
    if (value.trim().length < 8) {
        return <small className="form-text text-danger">Password must be at least 8 characters long</small>;
    }
  }

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isCreateAccount: false,
        };
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        var account = {
            email: this.state.email,
            password: this.state.password,
        };

        axios.post(`http://127.0.0.1:8000/api/login`, account )
          .then(res => {
            if(res.data.error != null){
                this.props.AlertOn(res.data.error,'danger');
            }else{
                this.props.AlertOn(res.data.message,'success');
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
          }).catch(function (error) {
            console.log(error);
            alert(error);
          })
    }

    handleRedirectCreateAccount = event => {
        event.preventDefault();
        this.setState({isCreateAccount : true});
    }

    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();
    }

    render() {
        if(localStorage.getItem('user') !== null){ return <Redirect to='/list'  />;}
        if(this.state.isCreateAccount === true){ return <Redirect to='/register'  />;}
        return (
            <div className="login--content body--login">
                <div className="container">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome 6000$!</h1>
                                                </div>
                                                <Form className="user" onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                                    <div className="form-group">
                                                        <Input type="email" validations={[required, email]} onChange={this.handleChangeEmail} className="form-control form-control-user" name="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <Input type="password" validations={[required, minLength]} onChange={this.handleChangePassword} className="form-control form-control-user" name="password" id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <Input type="checkbox" className="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <CheckButton onClick={this.handleSubmit} ref={c => { this.checkBtn = c }}  className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </CheckButton>
                                                </Form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <NavLink className="small" activeClassName="abc" to="/register">Create an Account</NavLink>
                                                </div>
                                            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);
