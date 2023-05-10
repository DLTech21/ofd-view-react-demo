import React, { Component } from 'react';
import PdfView from "pdf-view-react"
import 'pdf-view-react/dist/viewer.css'
const mem = require('mpdf.js')

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            wasmUrl: ''
        }
    }


    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                file: ''
            })
        }, 500)

    }

    render() {
        return (
            <div className="App">
                <PdfView file={this.state.file} mem={mem} wasmUrl={this.state.wasmUrl}></PdfView>
            </div>
        );
    }
}
