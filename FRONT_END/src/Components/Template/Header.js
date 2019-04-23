import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    handleLogout = event => {
        event.preventDefault();
        localStorage.clear();
        this.setState({isLogout: true});
        this.props.AlertOn("Logged out successfully","success");
    }

    render() {
        if(localStorage.getItem('user') === null){
            return (
                <header id="header" className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 header--logo">
                                Learning JP
                            </div>
                            <div className="col-6 header--btn">
                                <button type="button" className="btn btn--s">
                                    <NavLink  activeClassName="abc" to="/register">Sign Up</NavLink>
                                    {/* <a href="signup.html">Sign Up</a> */}
                                </button>
                                <button type="button" className="btn btn--l">
                                    <NavLink  activeClassName="abc" to="/login">Login</NavLink>
                                    {/* <a href="signup.html">Login</a> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            );   
        }else{
            return (
                <header id="header" className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 header--logo">
                                Learning JP
                            </div>
                            <div className="col-6 header--btn">
                                {/* <button type="button" className="btn btn--l"> */}
                                    {/* <NavLink  activeClassName="abc" to="/register">Sign Up</NavLink> */}
                                    <span className="text-info" style={{padding: 10}}>{'Welcome: ' + JSON.parse(localStorage.getItem('user')).name }</span>
                                {/* </button> */}
                                <button type="button" className="btn btn--l">
                                    <a onClick={this.handleLogout} href="logout.html" >Logout</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            );    
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);