/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 * Часы мы считаем правильными, если они находятся в диапазоне [0, 23].
 Минуты мы считаем правильными, если они находятся в диапазоне [0, 59].
 Если часы и минуты правильные, то возвращаем 'true', иначе — 'false'.
 */
module.exports = function (hours, minutes) {
    if (Number(hours) <= 23 &&  (Number(hours)) >= 0){
        if (Number(minutes) <= 59 &&  (Number(minutes)) >= 0){
            return true;
        }
        else return false;
    }
        else return false;
};
