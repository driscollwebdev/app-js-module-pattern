window.app = window.app || (function(app) {
  var localApp = {
    appRoot: '',
    modules: {},
    dependencies: {},
    dependsUpon: function(name, path) {
      if (!this.dependencies.hasOwnProperty(name)) {
        this.dependencies[name] = path;

        if (document) {
          var script = document.createElement('script');
          var source = (path.indexOf('http') == 0 || path.indexOf('//') == 0) ? path : appRoot + '/' + path;
          script.src = source;
          document.body.appendChild(script);
        }
      }
    },
    extend: function(name, definition) {
      this.modules[name] = definition.call(this);
      if (!this.hasOwnProperty(name)) {
        this[name] = this.modules[name];
      }
    }
  };
  
  app = localApp;
  
  return app;
})({});
