window.jQuery.ajax = function({method,url,body,success,fail}){
    let request = new XMLHttpRequest();
    request.open(method,url);
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status < 300){
                success.apply(undefined, request.responseText)
            } else if (request.statue >= 400){
                fail.apply(undefined,request)
            }
        }
    }
    request.send(body);
}

(function(global) {
    var id = 0;
    var container = document.getElementsByTagName('head')[0];
    function jsonp(options) {
        if (!options || !options.url) {
            return;
        }
        var scriptNode = document.createElement('script');
        var  data = options.data || {};
        var url = options.url;
        var callback = options.callback;
        var fnName = 'jsonp' + id++;
        data['callback'] = fnName;

        var params = [];
        for (var key in data) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        url = url.indexOf('?') > 0 ? (url + '&') : (url + '?');
        url += params.join('&');
        scriptNode.src = url;
        global[fnName] = function(ret) {
            callback && callback(ret);
            container.removeChild(scriptNode);
            delete global([fnName]);
        };
        scriptNode.onerror = function() {
            callback && callback({ error: 'error' });
            container.removeChild(scriptNode);
            global[fnName] && delete global[fnName];
        };

        scriptNode.type = 'text/javascript';
        container.appendChild(scriptNode);
    }
    global.jsonp = jsonp;
})(this);
