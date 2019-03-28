import React from 'react';


class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src="img/8.png" className="img-fluid" alt="logo" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Learning Japan</div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Learing by test
                    </div>

                </li><li className="nav-item">
                    <a className="nav-link collapsed" href="google.com" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Alphabet</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Basic</h6>
                            <a className="collapse-item clearfix" href="buttons.html">
                                <img src="img/nav-hiraganar.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Hiragana</span>
                            </a>
                            <a className="collapse-item clearfix" href="cards.html">
                                <img src="img/nav-kata.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Katakana</span>
                            </a>
                            <a className="collapse-item clearfix" href="cards.html">
                                <img src="img/nav-kanji.jpg" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">Kanji</span>
                            </a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="google.com" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench" />
                        <span>Grammar</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">JLPT</h6>
                            <a className="collapse-item clearfix" href="cards.html">
                                <img src="img/nav-N5.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
                                <span className="float-left d-inline-block">JLPT N5</span>
                            </a>
                            <a className="collapse-item clearfix" href="cards.html">
                                <img src="img/N4.png" className="img-fluid nav-icon float-left mr-2" alt="hira" />
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
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-pencil-alt" />
                        <span>Write</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fab fa-youtube" />
                        <span>Video</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Result</span>
                    </a>
                </li>


                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>


        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
