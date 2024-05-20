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


| 参数                           | 说明                           | 是否必填 |
|------------------------------|------------------------------|------|
| file 或者fileBase64            | OFD文件。支持File、ArrayBuffer及url | 是    |
| mem                          | 核心库，按demo方式                  | 是    |
| canOpen                      | 是否允许通过按钮打开ofd文件              | 否    |
| canDownload                  | 是否允许通过按钮下载ofd文件              | 否    |
| canPrint                     | 是否允许通过按钮打印ofd文件              | 否    |
| stamps                     | 印章外观列表，看demo                 | 否    |
| itemDropped                     | 获取印章外观所在位置的坐标信息              | 否    |
| itemRemove                     | 点击印章外观的x按钮时触发函数              | 否    |

![示例](https://cdn.jsdelivr.net/npm/ofd-view@0.1.17/img.png)
