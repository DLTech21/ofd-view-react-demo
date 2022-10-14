import './App.css';
import OfdView from "ofd-view-react"
import 'ofd-view-react/dist/viewer.css'
import {
    openOFDViewer
} from 'ofd.js'

function configCallback(config) {
    console.log(config)
    openOFDViewer(config)
}

function App() {
  return (
    <div className="App">
      <OfdView onConfigCallback={configCallback}></OfdView>
    </div>
  );
}

export default App;
