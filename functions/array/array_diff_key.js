function array_diff_key() {
    // http://kevin.vanzonneveld.net
    // +   original by: Ates Goral (http://magnetiq.com)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    // *     returns 1: {"green":2, "blue":3, "white":4}
    // *     example 2: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    // *     returns 2: {"green":2, "blue":3, "white":4}

    var arr1 = arguments[0], retArr = {};
    var k1 = '', i = 1, k = '', arr = {};
 
    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < arguments.length; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
}