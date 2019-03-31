import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInformation extends Component {
    
    handleDismiss = () => {
        this.props.AlertOf();
    }

    render() {
        if(this.props.notification.status === false) return null;
        return (
            <AlertContainer>
                <Alert type={this.props.notification.class} headline="MESSAGE" onDismiss={()=> this.handleDismiss()} timeout={3000} >
                This is a message that explains what happened in a little more detail : {this.props.notification.message}
            </Alert>
            </AlertContainer>
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
        AlertOf: () => {
            dispatch({type:'HIDE_MESSAGE'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInformation);
