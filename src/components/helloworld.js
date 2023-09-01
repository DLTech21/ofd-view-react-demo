import React, { Component } from 'react';
import OfdViewer from 'ofd-view-react';
import axios from 'axios'
const mem = require('parser_x.js')

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            isP: false
        }
        axios({
            method: 'get',
            url: 'https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd',
            data: {},
            responseType: 'arraybuffer'
        }).then(res => {
            console.log(res)
            this.state = {
                file: 'https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd'
            }
        })
    }

    render() {
        return (
            <div className="App">
                <OfdViewer file={this.state.file}
                           downloadUrl='https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd'
                           canDownload={true} canPrint={true} canOpen={true}
                           mem={mem}
                />
            </div>
        );
    }
}
