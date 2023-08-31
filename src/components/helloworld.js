import React, { Component } from 'react';
import OfdViewer from 'ofd-view-react';
const mem = require('parser_x.js')

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        }
    }

    render() {
        return (
            <div className="App">
                <OfdViewer file={'https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd'}
                           downloadUrl='https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd'
                           canDownload={true} canPrint={true} canOpen={true}
                           mem={mem}
                />
            </div>
        );
    }
}
