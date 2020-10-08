import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});


export function bootstrap(props) {
  console.log(props.authToken); // do something with the common authToken in app1
  return lifecycles.bootstrap(props);
}

export function mount(props) {
  console.log(props.authToken); // do something with the common authToken in app1
  return lifecycles.mount(props);
}

export function unmount(props) {
  console.log(props.authToken); // do something with the common authToken in app1
  return lifecycles.unmount(props);
}

// export const { bootstrap, mount, unmount } = lifecycles;
