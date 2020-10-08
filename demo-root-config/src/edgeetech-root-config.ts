import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@edgeetech/demo-nav",
  app: () => System.import("@edgeetech/demo-nav"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@edgeetech/demo-app1",
  app: () => System.import("@edgeetech/demo-app1"),
  activeWhen: ["/app1"]
});

registerApplication({
  name: "@edgeetech/demo-app2",
  app: () => System.import("@edgeetech/demo-app2"),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});
