import './App.css';
import OfdView from "ofd-view-react"
import 'ofd-view-react/dist/viewer.css'
import {
    openOFDViewer,
    openOFD
} from 'ofd.js'

function configCallback(config) {
    openOFDViewer(config)
    // 打开url方式
    openOFD('https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd')
}

function App() {
  return (
    <div className="App">
      <OfdView onConfigCallback={configCallback}></OfdView>
    </div>
  );
}

export default App;
