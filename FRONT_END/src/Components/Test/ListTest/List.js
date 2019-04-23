import React from 'react';
import Topbar from '../../Template/Topbar';
import Lesson from '../ListTest/Lesson';
import Navbar from '../../Template/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import Footer from '../../Template/Footer';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            rule:'',
            data:'',
            process: '',
        };
    }

    componentWillMount() {
        var levelParam = {level : this.props.match.params.level};
        axios.put(`http://127.0.0.1:8000/api/user/`+ this.state.user.id +`/lesson`, levelParam )
        .then(res => {
          if(res.data.error != null){
              this.props.AlertOn(res.data.error,'danger');
          }else{
            this.setState(
                {
                    data: res.data.lessons.data,
                    rule: res.data.lessons.rule,
                    process: res.data.lessons.process,
                }
            );
          }
        }).catch(function (error) {
          alert(error + '. Something was wrong');
        })
    }

    loadLessons = function() {
        var data = this.state.data;
        var lessons = Object.values(data).map((value,key) => (
            <Lesson key={key} title={value.name} lesson={value.id} mark={value.mark} />
        ));
        return lessons;
    }

    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                            <div className="container-fluid">
                            {/* Huy note: chỗ này m đổ tên trường ra cho tao: là cái rule ý */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4 row">
                                    <div className="col-md-3">

                                    </div>
                                    <div className="col-md-6">
                                        <h1 className="h3 mb-0 text-gray-800">{this.state.rule} - {this.state.process*100}%</h1>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>

                            {/* list các bài học */}
                                {this.loadLessons()}
                        </div>
                        <Footer />
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

ComponentName.propTypes = {};

export default connect(mapStateToProps,mapDispatchToProps)(ComponentName);
