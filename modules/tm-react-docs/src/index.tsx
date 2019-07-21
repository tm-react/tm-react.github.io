import ReactDOM from "react-dom";
import React from "react";
import AppConfig from "./app/config/app-config";
import URLMapping from "./app/config/url-mapping";
import TRPageManager from "tm-react/src/artifacts/manager/tr-page-manager";


const appConfig = new AppConfig();
const urlMapping = new URLMapping();
ReactDOM.render(<TRPageManager appConfig={appConfig} urlMapping={urlMapping}/>, document.getElementById('root'));
