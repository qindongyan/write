Function.prototype.myCall = function(context,...args){
  if (typeof this !== 'function'){
    return new TypeError('error');
    context = context || window;
    const key = Symbol()
    context[key] = this;
    context[key](...args);
    delete context[key];
    return result;
  }
}
Function.prototype.myApply = function(context,args){
  if (typeof this !== 'functon'){
    return new TypeError('error');
  }
  context = context || window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key]
  return result;
}

Function.prototype.myBind = function(context,...args){
  if (typeof this !== 'functon'){
    return new TypeError('error');
  };
  const self = this;
  return function(...innerArgs){
    const.apply(context, args.concat[innerArgs])
  }
}

function myNew(constructor,...args){
    const obj = {};
    obj.__proto__ = constructor.prototype;
    const result = constructor.apply(obj,args);
    if (result && (typeof result === "object" || typeof result ==='function')){
        return result;
    }
    return obj;
}
