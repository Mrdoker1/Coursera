/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 *
 * На вход функция принимает 3 параметра: часы, минуты, интервал в минутах, на который нужно изменить время.
 Гарантируется, что любой из 3 параметров целое положительное число.
 Параметр часы принимает значение в диапазоне [0, 23].
 Параметр минуты принимает значение в диапазоне [0, 59].
 Прибавляемый интервал может быть больше 60 минут.
 Переход в следующие сутки должен корректно обрабатываться.
 Функция должна возвращать корректно отформатированное время: 1:2 –> 01:02

 Для выполнения этого задания могут понадобиться методы глобального объекта Math. Напримеaр, метод floor.
 При реализации рекомендуем внимательно проверить все краевые случаи: именно там допускается большинство ошибок.
*/
function isOdd(num) { return num % 2;}

module.exports =  function (hours, minutes, interval) {
    if (Number(hours) <= 23 &&  (Number(hours)) >= 0){
        if (Number(minutes) <= 59 &&  (Number(minutes)) >= 0){
            minutes = minutes + interval;
            if (Math.floor(minutes/60) >= 1) {   //если больше часа
                if (hours == 23) {
                    hours = -1;
                }
                hours = hours + Math.floor(minutes/60); //добавляем часы
                if ( hours > 23) {
                    var days = Math.floor(hours/24);
                    hours = hours - 24*days; //63-48 = 15
                    if (isOdd(days) == 0){
                        if (hours > 13 && days == 1) {
                            hours = hours + 12; //27
                            hours = 24*days - hours;
                        }
                    }
                    else {

                    }
                }
                minutes = minutes - Math.floor(minutes/60) * 60  //считаем минуты

                if (hours > 10 && minutes > 10) {
                    return String(hours) + ':' + String(minutes);
                }
                else if (hours < 10 && minutes < 10) {
                    return '0' + String(hours) + ':' + '0' + String(minutes);
                }
                else if (hours < 10 && minutes > 10) {
                    return '0' + String(hours) + ':' + String(minutes);
                }
                else if (hours > 10 && minutes < 10) {
                    return String(hours) + ':' + '0' + String(minutes);
                }
            }
            else //если меньше часа
                if (hours > 10 && minutes > 10) {
                    return String(hours) + ':' + String(minutes);
                }
                else if (hours < 10 && minutes < 10) {
                    return '0' + String(hours) + ':' + '0' + String(minutes);
                }
                else if (hours < 10 && minutes > 10) {
                    return '0' + String(hours) + ':' + String(minutes);
                }
                else if (hours > 10 && minutes < 10) {
                    return String(hours) + ':' + '0' + String(minutes);
                }
        }
        else return false;
    }
    else return false;
};


