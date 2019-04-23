import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:'',
        }
    }

    RedirectList = function(event, param) {
        event.preventDefault();
        this.setState({
            page: param,
        });
    }
    
    render() {
        if(this.state.page !== '' ){
            var page = '/list/' + this.state.page;
            window.location.href = window.location.origin + page;
        }
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                <NavLink to={"/"} className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src="/img/8.png" className="img-fluid" alt="logo" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Learning Japan</div>
                </NavLink>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">

                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Learing by test
                    </div>

                </li><li className="nav-item">
                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"  href="123">
                        <i className="fas fa-fw fa-cog" />
                        <span>Alphabet</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Basic</h6>
           
                            <a href="123" onClick={(event) => this.RedirectList(event, 'Hiragana')} className="collapse-item clearfix">
                                <img src="/img/nav-hiraganar.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Hiragana</span>
                            </a>
                            <a href="123" onClick={(event) => this.RedirectList(event, 'Katakana')} className="collapse-item clearfix" >
                                <img src="/img/nav-kata.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Katakana</span>
                            </a>
                            <a href="123" onClick={(event) => this.RedirectList(event, 'Kanji')} className="collapse-item clearfix">
                                <img src="/img/nav-kanji.jpg" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Kanji</span>
                            </a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities"  href="123">
                        <i className="fas fa-fw fa-wrench" />
                        <span>Grammar</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">JLPT</h6>
                            <a href="123" onClick={(event) => this.RedirectList(event, 'JLPTN5')} className="collapse-item clearfix">
                                <img src="/img/nav-N5.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">JLPT N5</span>
                            </a>
                            <a href="123" onClick={(event) => this.RedirectList(event, 'JLPTN4')} className="collapse-item clearfix">
                                <img src="/img/N4.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">JLPT N4</span>
                            </a>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Advanced
                </div>

                <li className="nav-item">
                        <NavLink activeClassName="nav-link" to={"/write"} className="nav-link">
                        <i className="fas fa-pencil-alt" />
                        <span>Write</span>
                        </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="nav-link" to={"/video"} className="nav-link">
                        <i className="fab fa-youtube" />
                        <span>Video</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName="nav-link" to={"/result"} className="nav-link">

                        <i className="fas fa-fw fa-chart-area" />
                        <span>Result</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink  activeClassName="nav-link" to={"/history"} className="nav-link">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>History</span>
                    </NavLink>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
        );
    }
}

Navbar.propTypes = {};
const mapStateToProps = (state, ownProps) => {
    return {
        namePage: state.namePage,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateNamePage: (namePage) => {
            dispatch({ type: 'UPDATE_LOCATION_PAGE' , namePage : namePage})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
