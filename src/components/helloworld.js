import React, { Component } from 'react';
import OfdView from "ofd-view-react"
import 'ofd-view-react/dist/viewer.css'
const mem = require('ofd.js')

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        }
    }


    componentDidMount() {
        this.setState({
            file: 'https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd'
        })
    }

    render() {
        return (
            <div className="App">
                <OfdView file={this.state.file} mem={mem}></OfdView>
            </div>
        );
    }
}
