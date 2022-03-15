import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@ms/navbmenuar",
  app: () => System.import("@ms/menu"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@ms/react",
  app: () => System.import("@ms/react"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
