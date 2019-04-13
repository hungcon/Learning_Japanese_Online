import React from 'react';
class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card shadow mb-4">
                {/* Card Header - Accordion */}
                <a href="#N5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="N5">
                <h6 className="m-0 font-weight-bold text-primary"  style={{textTransform: 'uppercase'}}>{this.props.type}</h6>
                </a>
                {/* Card Content - Collapse */}
                <div className="collapse show" id="N5" style={{}}>
                <div className="card-body">
                    You should study the first 25 lessons of : <strong>Mina(みなの日木語)</strong> 
                </div>
                </div>
                <a href={"/list/"+this.props.type} className={this.props.classBtn}>
                    <span className="icon text-white-50">
                        <i className="fas fa-flag" />
                    </span>
                    <span className="text">I want to learn {this.props.type}</span>
                </a>
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
