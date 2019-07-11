const path = require("path");
const isFbtRuntime = process.env.NODE_ENV === undefined;

const defaultConfig = {
  presets: isFbtRuntime ? [] : ["babel-preset-react-app"],
  plugins: [
    "babel-plugin-fbt-runtime",
    [
      "babel-plugin-fbt",
      {
        fbtEnumPath: path.join(__dirname, ".enum_manifest.json")
      }
    ]
  ]
};

module.exports = api => {
  api.cache(true);

  return defaultConfig;
};
