import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';
import VideoData from '../TestData/Video.json';
import {NavLink} from 'react-router-dom';
class ListVideo extends Component {
    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div>
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4 ">
                                    <h1 className="h3 mb-0 text-gray-800">Video học ngữ pháp</h1>
                                </div>
                                <div className="row">
                                    {
                                        Object.values(VideoData).map((value, key) => {
                                            return (
                                                <div className="col-lg-4 col-md-2 col-sm-6">
                                                    <div className="card shadow mb-4">
                                                        <NavLink to={"/video/lesson/"+value.id}>
                                                            <div className="card-header py-3">
                                                                <h6 className="m-0 font-weight-bold text-primary">{value.nameVideo}</h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <img src={value.imageVideo} alt="bai1" className="img-fluid" />
                                                            </div>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default ListVideo;