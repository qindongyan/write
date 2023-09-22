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
