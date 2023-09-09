# ofdview

## react使用

### npm 安装

```
npm i ofd-view-react parser_x.js -S
```


```
import OfdView from "ofd-view-react";
const mem = require('parser_x');

 <OfdViewer file={this.state.file}
             mem={mem}
                />
或者
 <OfdViewer fileBase64={this.state.file}
             mem={mem}
                />
```

![示例](https://cdn.jsdelivr.net/npm/ofd-view@0.1.17/img.png)
