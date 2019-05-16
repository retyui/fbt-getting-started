const defaultConfig = {
  presets: process.env.NODE_ENV === undefined ? [] : ["babel-preset-react-app"],
  plugins: [
    "babel-plugin-fbt-runtime",
    [
      "babel-plugin-fbt",
      {
        fbtEnumPath: require("./.enum_manifest.json")
      }
    ]
  ]
};

module.exports = api => {
  api.cache(true);

  return defaultConfig;
};
