/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (input) {
    return {
        value : input,
        check : function(number, type){
            if(typeof(number) != "number" || number < 0 || typeof(type) != "string") throw new TypeError;
        },
        execute : function(number, type){
            let date_ = new Date(this.value);

            switch(type){
                case "years":
                    date_.setFullYear(date_.getFullYear() + number); 
                    break;
                case "months":
                    date_.setMonth(date_.getMonth() + number);
                    break;
                case "days":
                    date_.setDate(date_.getDate() + number);
                    break;
                case "hours":
                    date_.setHours(date_.getHours() + number);
                    break;
                case "minutes":
                    date_.setMinutes(date_.getMinutes() + number);
                    break;
                default: throw new TypeError;
            }
            
            this.value = date_.toLocaleDateString('ru-RU',{
                year: "numeric",
                month : "2-digit",
                day: "2-digit",
                hour : "2-digit",
                minute : "2-digit" });
            return this;
        },
        add : function(number, type){
            this.check(number,type);
            return this.execute(number,type);
        },
        subtract : function(number, type){
            this.check(number,type);
            return this.execute(-number,type);
        }
    }
}