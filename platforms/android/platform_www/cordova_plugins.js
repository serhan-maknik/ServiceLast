cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-service.BackgroundService",
      "file": "plugins/cordova-plugin-service/www/index.js",
      "pluginId": "cordova-plugin-service",
      "clobbers": [
        "BackgroundService"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-service": "1.0.0"
  };
});