const arrayUtils = {

    getBasekeyValues: function (base_key, arr) {
        if (typeof arr != 'object') return false;
        return arr.map(el => {
            return el[base_key];
        });
    },

    merge: function (base_key, ar1, ar2) {
        // ar1 base_key value list
        const keys1 = arrayUtils.getBasekeyValues(base_key, ar1);
        // ar2 base_key value list
        const keys2 = arrayUtils.getBasekeyValues(base_key, ar2);
        // merge key list;
        const keys3 = keys1.concat(keys2);
        const allKeys = keys3.filter((item, pos) => {
            return keys3.indexOf(item) == pos
        });

        let ar3 = [];
        allKeys.forEach(key => {
            let el1 = ar1.filter(el => {
                return (el.a == key);
            });
            let el2 = ar2.filter(el => {
                return (el.a == key);
            });
            const el3 = {};
            Object.assign(el3, el1[0], el2[0]);
            ar3.push(el3);
        });
        return ar3;
    }

}

module.exports = arrayUtils;