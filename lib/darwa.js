(function(){
  
  var root = this;
  
  var darwa = function(x){
    var mutation = null;
    if (typeof x === 'number'){
      mutation = darwa.float(x);
    }
    if (typeof x === 'string'){
      if (x.substr(0,4) === 'rgb('){
        mutation = darwa.rgb(x);
      }
    }
    
    
    return mutation;  
  };
  
  darwa.float = function(x,delta){
    if (delta === undefined){delta = 0.5;}
    if (typeof x !== 'number'){return null;}
    return x - (x*delta) + (Math.random()*(2*x*delta));
  };
    
  darwa.rgb = function(x, delta){
    if (delta === undefined){delta = 0.9;}
    if ( x === undefined ){ x = "rgb(128,128,128)"; }
    if (typeof x!=="string"){return null;}
    if (!x.match(/^rgb/) ){return null;}
    
    var colors = x.substr(4).split(',');
    if (colors.length !==3 ){return null;}
    for (var i=0;i<colors.length;i++){
      colors[i] = Math.floor( darwa.float( parseInt(colors[i], 10), delta ) );
      colors[i] = Math.max(colors[i], 0);
      colors[i] = Math.min(colors[i], 255);
    }
    return "rgb(" + ( colors.join(",") ) + ")";
  
  };
  
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = darwa;
    }
    exports.darwa = darwa;
  } else {
    root.darwa= darwa;
  }
        
}).call(this);