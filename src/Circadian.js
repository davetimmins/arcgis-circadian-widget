
define([  
  "dojo/dom-class",

  "esri/widgets/Widget"
],
function (
  domClass,  
  Widget
) {

  return Widget.createSubclass([],
  {
    declaredClass: "custom.widgets.Circadian",

    postCreate: function () {
      this.inherited(arguments);

      this._tint = this._tint.bind(this);

      // TODO : maybe allow this to be a property as may want to tint at container level
      this._node = document.getElementsByClassName("esri-view-surface")[0];

      if (!this._node) {
        console.warn('No view surface found, unable to apply tinting.');
      }
    },

    _node: null,

    _timer: null,

    _previousClass: null,

    startup: function () {

      if (!this._node) {
        return;
      }

      domClass.add(this._node, "circadian-tint");
            
      this._tint();

      // check the tint every minute
      // TODO : could be smarter here and just check on the hour by calculating minutes left and using setTimeout
      _timer = setInterval(this._tint, 1000 * 60);
    },

    destroy: function () {

      clearTimeout(this._timer);
      this._timer = null;
    },

    _tint: function () {

      var hours = new Date().getHours();
      var css = "tint-" + hours;
      
      if (this._previousClass && css !== this._previousClass) {

        domClass.remove(this._node, this._previousClass);
      }

      domClass.add(this._node, "tint-" + hours);
      this._previousClass = "tint-" + hours;
    }
  });
});