import React, { Component } from 'react';
import Navbar from '../Template/Navbar';
import Topbar from '../Template/Topbar';
import Footer from '../Template/Footer';
import VideoData from '../../TestData/Video.json';
class DetailVideo extends Component {
    render() {
        console.log(this.props.match.params.number);
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div>
                            <div className="container-fluid">
                                <div className="row">
                                    {
                                        Object.values(VideoData).map((value, key) => {
                                            console.log(key+1);
                                            console.log(typeof(this.props.match.params.number));
                                            if ((key+1) ===  parseInt(this.props.match.params.number)) {
                                                return (
                                                    <div>
                                                        <div className="container-fluid">
                                                            <div className="d-sm-flex align-items-center justify-content-between mb-4 ">
                                                                <h1 className="h3 mb-0 text-gray-800">{value.nameVideo}</h1>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-3" />
                                                                <div className="col-6">
                                                                    <video style={{ width: '100%', height: 'auto' }} controls>
                                                                        <source src={value.audio} type="video/mp4" />
                                                                    </video>
                                                                </div>
                                                                <div className="col-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return '';
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

export default DetailVideo;