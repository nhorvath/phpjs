function krsort(array, sort_flags) {
    // http://kevin.vanzonneveld.net
    // +   original by: GeekFG (http://geekfg.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %          note: The examples are correct, this is a new way
    // *     example 1: data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};
    // *     example 1: krsort(data);
    // *     results 1: data == {3: 'Kevin', 2: 'van', 1: 'Zonneveld'}
    // *     returns 1: true

    var tmp_arr={}, keys=[], sorter, i, key, that=this;

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = function (a, b) {
                return that.strnatcmp(b, a);
            };
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
            sorter = function (a, b) {
                return(b.localeCompare(a));
            };
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = function (a, b) {
                return(b - a);
            };
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = function (a, b) {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    // Make a list of key names
    for (key in array) {
        keys.push(key);
    }

    keys.sort(sorter);

    // Rebuild array with sorted key names
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        tmp_arr[key] = array[key];
        delete array[key];
    }
    for (i in tmp_arr) {
        array[i] = tmp_arr[i];
    }

    return true;
}