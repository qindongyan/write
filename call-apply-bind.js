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
