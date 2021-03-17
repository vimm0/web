// https://github.com/perimeterx/map-events
// https://www.perimeterx.com/tech-blog/2019/list-every-event-that-exists-in-the-browser/

function _isEvent(prop) {
    if (0 !== prop.indexOf('on')) {
        return false;
    }

    return true;
}

function _getEvents(obj) {
    var result = [];

    for (var prop in obj) {
        if (_isEvent(prop)) {
            prop = prop.substr(2); // remove "on" at the beginning
            result.push(prop);
        }
    }

    return result;
}

function getEvents() {
    const result = {};

    result['window'] = _getEvents(window, hasOwnProperty);

    const arr = Object.getOwnPropertyNames(window);

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        let resultArray = [];

        try {
            const obj = window[element];

            if (!obj || !obj['prototype']) {
                continue;
            }

            proto = obj['prototype'];

            resultArray = _getEvents(proto);

        } catch (err) {
            // console.error(`failed to get events of %o`, element);
        }

        result[element] = resultArray;
    }

    return result;
}
document.body.innerHTML = `<h1>${'open devtools console to see the result'}</h1>`;
console.log('every event supported by every object in the browser:')
console.log(getEvents());
