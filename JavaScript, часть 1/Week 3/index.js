/**
 * @param {String} date
 * @returns {Object}
 */

/*
var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
*/

module.exports = function(date) {
    return {
        value : date,

        add : function(num,type){
            if (typeof(num) != "number" || num < 0 || typeof(type) != "string") throw new TypeError("Invalid input");
            else this.execute(num,type);
            return this;
        },

        subtract : function(num,type){
            if (typeof(num) != "number" || num < 0 || typeof(type) != "string") throw new TypeError("Invalid input");
            else this.execute(-num,type);
            return this;
        },

        execute : function (num,type){
            let ConvertedDate = new Date(this.value);
            switch (type){
                case "years":
                    ConvertedDate.setFullYear(ConvertedDate.getFullYear() + num);
                    break;
                case "months":
                    ConvertedDate.setMonth(ConvertedDate.getMonth() + num);
                    break;
                case "days":
                    ConvertedDate.setDate(ConvertedDate.getDate() + num);
                    break;
                case "hours":
                    ConvertedDate.setHours(ConvertedDate.getHours() + num);
                    break;
                case "minutes":
                    ConvertedDate.setMinutes(ConvertedDate.getMinutes() + num);
                    break;
                default: throw new TypeError("Invalid input");
            }
            return this.value = ConvertedDate.toLocaleDateString('ru-RU',{
                year: "numeric",
                month : "2-digit",
                day: "2-digit",
                hour : "2-digit",
                minute : "2-digit" });
        }
    }
};