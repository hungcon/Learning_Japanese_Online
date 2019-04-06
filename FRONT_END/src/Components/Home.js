import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <header id="header" className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 header--logo">
                                    Learning JP
                                </div>
                                <div className="col-6 header--btn">
                                    <button type="button" className="btn btn--s">
                                        <NavLink  activeClassName="abc" to="/sign-up">Sign Up</NavLink>
                                        {/* <a href="signup.html">Sign Up</a> */}
                                    </button>
                                    <button type="button" className="btn btn--l">
                                        <NavLink  activeClassName="abc" to="/login">Login</NavLink>
                                        {/* <a href="signup.html">Login</a> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>{/* /header */}
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 banner--title">
                                    <div className="b--title">
                                        <h2 className="banner--big__t ">
                                            Speak a language in 10 minutes a day<span className="small">TM<span>
                                            </span></span></h2>
                                        <h5 className="banner--samll__t">
                                            Join our global community of 90 million learners
                                        </h5>
                                        <div className="banner--btn">
                                            <button type="button" className="btn ">
                                                <a href="signup.html">
                                                    Start learning now
                                        </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flag">
                        <div className="container">
                            <div className="row flag--title">
                                <h3>
                                    I want to learn...
                                </h3>
                            </div>
                            <div className="row">
                                <ul className="flag--container">
                                    <li className="flag--item">
                                        <img src="img/8.png" className="img-fluid" alt=" " />
                                        <br /> <span>
                                            Japanese </span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/1.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            French</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/2.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            English</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/3.png" className="img-fluid"  alt=" "/>
                                        <br /> <span>
                                            Spanish</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/4.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            German</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/5.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            Italian</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/6.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            Portuguese</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/7.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            Chinese</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/9.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            Russian</span>
                                    </li>
                                    <li className="flag--item">
                                        <img src="img/10.png" className="img-fluid"  alt=" " />
                                        <br /> <span>
                                            Viet Nam</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Giới thiệu  */}
                    <div className="infor">
                        <div className="container">
                            <div className="row --b__top">
                                How does 4aesn work?
                            </div>
                            <div className="row infor--b__bot">
                                <div className="col-lg-6">
                                    <div className="infor--item">
                                        <div className="--item__title __title__top">
                                            <a href className="--infor__link">
                                                <span>
                                                    <i className="fas fa-angle-right" />
                                                </span>
                                                Learn the smart way
                                            </a>
                                        </div>
                                        <div className="--item__content">
                                            Over <strong>1000 lessons</strong> created by expert linguists enhanced with <strong>machine learning technology </strong>like personalized study plans and speech recognition.
                                        </div>
                                    </div>
                                    <div className="infor--item">
                                        <div className="--item__title __title__bot">
                                            <a href className="--infor__link">
                                                <span>
                                                    <i className="fas fa-angle-right" />
                                                </span>
                                                Get feedback from native speakers
                                            </a>
                                        </div>
                                        <div className="--item__content">
                                            Connect with over 90 million learners and native speakers. Get  <strong>instant feedback</strong>  on written and spoken lessons from our global community.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="img/infor1.png" className="d-block w-1 img-fluid" alt="one" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="img/infor2.png" className="d-block w-1 img-fluid" alt="twp" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* rating */}
                    <div className="rating">
                        <div className="container">
                            <div className="row --b__top">
                                <div>
                                    Not sure about learning with 4aesn?
                                </div>
                            </div>
                            <div className="row --b__two">
                                <div>
                                    Great
                                    <img src="img/start.JPG" alt="start" />
                                    <img src="img/start.JPG" alt="start" />
                                    <img src="img/start.JPG" alt="start" />
                                    <img src="img/start.JPG" alt="start" />
                                    <img src="img/start.JPG" alt="start" />
                                    8.9 out of 10
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 rating--cmt clearfix">
                                    <div className="--cmt__avatar float-left">
                                        <img src="img/ava1.jpg" className="img-fluid"  alt=" " />
                                    </div>
                                    <div className="--cmt__content float-left">
                                        <strong>"4aesn has helped me to connect with my whole family. Thank you!"</strong>
                                        <br />
                                        <span>
                                            Phạm Hoàn - Đại học Bách Khoa Hà Nội
                                    </span>
                                    </div>
                                </div>
                                <div className="col-md-6 rating--cmt clearfix">
                                    <div className="--cmt__avatar float-left">
                                        <img src="img/ava2.jpg" className="img-fluid"  alt=" " />
                                    </div>
                                    <div className="--cmt__content float-left">
                                        <strong>I feel like I'm really learning. And you get corrected by other learners really fast too."</strong>
                                        <br />
                                        <span>
                                            Nhật Văn - Đại học Bách Khoa Hà Nội
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* app */}
                    <div className="app">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 app--content">
                                    <div className="--content__title">
                                        <h2>
                                            <strong>
                                                You decide how and when to learn
                                            </strong>
                                        </h2>
                                    </div>
                                    <div className="--content__quote">
                                        <p>
                                            Start on your desktop. Pick it up later on your phone. Even better, you can download lessons and take them with you.
                                        </p>
                                    </div>
                                    <div className="--content__img">
                                        <img src="img/ios.JPG"  alt=" " className="img-fluid" />
                                        <img src="img/android.JPG"  alt=" " className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-4 app-img">
                                    <img src="img/app-mock.png"  alt=" " className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* đối tác */}
                    <div className="partner">
                        <div className="container">
                            <div className="row --b__top">
                                <div>
                                    Thinking about language learning for your business?
                                </div>
                            </div>
                            <div className="row">
                                <div className="col parter--img">
                                    <img src="img/p1.png"  alt=" " className="img-fluid" />
                                </div>
                                <div className="col parter--img">
                                    <img src="img/p2.png"  alt=" " className="img-fluid" />
                                </div>
                                <div className="col parter--img">
                                    <img src="img/p3.png"  alt=" " className="img-fluid" />
                                </div>
                                <div className="col parter--img">
                                    <img src="img/p4.png"  alt=" " className="img-fluid" />
                                </div>
                                <div className="col parter--img">
                                    <img src="img/p5.png"  alt=" " className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <ul>
                                        <li><strong>Learn languages online</strong></li>
                                        <li>
                                            <a href>Learn English online</a>
                                        </li>
                                        <li><a href>Learn Spanish online</a></li>
                                        <li><a href>Learn French online</a></li>
                                        <li><a href>Learn German online</a></li>
                                        <li><a href>Learn Italian online</a></li>
                                        <li><a href>Learn Portuguese online</a></li>
                                        <li><a href>Learn Japanese online</a></li>
                                        <li><a href>Learn Russian online</a></li>
                                        <li><a href>Learn VietNam online</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li><strong>Discover 4aesn</strong></li>
                                        <li><a href>4aesn Premium membership</a></li>
                                        <li><a href>4aesn mobile apps for iOS and Android</a></li>
                                        <li><a href>Partnerships with busuu</a></li>
                                        <li><a href>Retail industry</a></li>
                                        <li><a href>Hospitality industry</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul>
                                        <li><strong>About us</strong></li>
                                        <li><a href>4 anh em siêu nhân</a></li>
                                        <li><a href>Biện Thành Chung</a></li>
                                        <li><a href>Phùng Văn Hưng</a></li>
                                        <li><a href>Trần Viết Huy</a></li>
                                        <li><a href>Phạm Hoàn</a></li>
                                        <li><a href>Nhật Văn</a></li>
                                        <li><a href>Khát vọng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
