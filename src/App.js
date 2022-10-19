import './App.css';
import OfdView from "ofd-view-react"
import 'ofd-view-react/dist/viewer.css'

function App() {
  return (
    <div className="App">
      <OfdView url="https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd"></OfdView>
    </div>
  );
}

export default App;
