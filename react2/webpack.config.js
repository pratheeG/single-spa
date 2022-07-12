const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Prem",
    projectName: "React2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals : ["rxjs", "@Prem/Utility"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
