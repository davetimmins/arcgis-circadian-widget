# arcgis-circadian-widget
:sunrise: An ArcGIS JS V4 widget that changes the map tint based on the time of day.

[![npm](https://img.shields.io/npm/v/arcgis-circadian-widget.svg?maxAge=2592000)](https://www.npmjs.com/package/arcgis-circadian-widget)

Include the style, create the widget

```js
require([
  "custom-widgets/Circadian"
], function(Circadian) {

  // create your map and view

  var c = new Circadian();
  c.startup();
```

Get it from here or via npm `npm install arcgis-circadian-widget --save`

#### Running locally

Download / clone this repository then run `npm install` > `npm start`

![example](https://github.com/davetimmins/arcgis-circadian-widget/circadian.gif)


