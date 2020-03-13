const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#8c7343",
      "@body-background": "#e9ece5",
      "@component-background": "#e9ece5",
      "@heading-color": "#21252d",
      "@text-color": "#21252d",
      "@text-color-inverse": "#f0f3ec",
      "@layout-body-background": "#f0f3ec",
      "@layout-header-background": "#21252d",
      "@layout-trigger-background": "#21252d",
      "@border-radius-base": "10px",
      "@border-radius-sm": "5px",
      "@background-color-light": "#e9ece5",
      "@table-body-sort-bg": "#21252d"
    }
  })
);
