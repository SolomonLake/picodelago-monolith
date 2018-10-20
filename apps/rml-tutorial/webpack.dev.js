const webpack = require("webpack");

module.exports = () => {
  return require("./webpack.config")(
    {},
    {
      RELEASE_STAGE: "development"
    }
  );
};
