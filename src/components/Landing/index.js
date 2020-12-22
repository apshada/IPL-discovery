import React, { Component } from "react"
// import logo from '../../components/Logo/logo.svg';
import Header from "../Landing/Header";
import Footer from "../Landing/Footer";
import Content from "../Landing/content";
class Landing extends Component {
    render() {
        return (
        
            <div class="main-container">
                {/* <Header /> */}
                <Content />
                <Footer />
            </div>

        )
    }
}

export default Landing;