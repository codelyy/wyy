import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import store from './store'
import router from "@/router";
import { Provider } from 'react-redux'
import YYheader from "@/components/app-header";
import YYfooter from "@/components/app-footer";
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YYheader />
        {renderRoutes(router)}
        <YYfooter />
      </HashRouter>
    </Provider>
  );
});
