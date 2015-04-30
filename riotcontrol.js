var RiotControl = {
  _stores: [],
  addStore: function(store) {
    this._stores.push(store);
  }
};

['on','one','off','trigger'].forEach(function(api){
  RiotControl[api] = function() {
    var args = [].slice.call(arguments);
    this._stores.forEach(function(el){
        if (typeof el === 'object')
            el[api].apply(null, args);
        else
            console.warn(el.name +' is not an object instance.')
    });
  };
});

if (typeof(module) !== 'undefined') module.exports = RiotControl;
