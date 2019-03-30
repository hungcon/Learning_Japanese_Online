import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Your Website 2019</span>
                    </div>
                </div>
            </footer>

        );
    }
}

Footer.propTypes = {};

export default Footer;
