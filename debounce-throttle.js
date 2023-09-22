function debounce(func, wait, immediate) {
    var timeout;
    var first = true;
    var debounced = function() {
        var context = this;
        var args = arguments;
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate && first) {
            func.apply(context, args);
            first = false;
        } else {
            setTimeout(() => {
                func.apply(context, args);
            }, wait);
        }
    };
    return debounced;
}

function throttle(func, wait, options = { leading: true, trailing: true }) {
    var { leading, trailing } = options;
    var timeout;
    var previous = 0;
    var args = arguments;
    var context = this;
    return function() {
        var now =  new Date().getTime();
        if (!previous && leading === false) {
            previous = new Date().getTime();
        }
        var remind = wait - (now - previous);
        if (remind <= 0 || remind > 0) {
            if (timeout) {
                clearTimeout(timeout);
            }
            func.apply(context, args);
            previous = now;
        } else if (!timeout && trailing !== false) {
            timeout = setTimeout(() => {
                func.apply(context, args);
                previous =  leading === false ? 0 : Date.now();
            }, remind);
        }
    };
}
