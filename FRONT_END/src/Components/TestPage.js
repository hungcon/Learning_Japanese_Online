import React, { Component } from 'react';
import Question from './Question';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

class TestPage extends Component {

    displayQuestion =()=>{
        var typeTest = this.props.match.params.typeQuestion;
        if (typeTest === "abcd") {
            return <Question type="ABCD" ></Question>
        } else {
            return <Question type="Fill"></Question>
        }
    }
    render() {
        return (
            <div>
                 <div id="wrapper">
                    <Navbar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* chỗ này cần truyền tên và id người dùng để có thể để hiển thị ở trên cùng */}
                        <div id="content">
                            <Topbar />
                            {
                                this.displayQuestion()
                            }
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;