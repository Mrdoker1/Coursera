/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

 
 //Выполняет запрос к коллекции. Принимает коллекцию и операции. Возвращает коллекцию после применения всех операций. В качестве операций может быть использован 'filterIn', 'select'.
 //lib.query(collection, operation1, operation2, ...);

function query(collection) {
    let new_collection = collection;

}



/**
 * @params {String[]}
 */

//Позволяет выбрать определённые поля объектов коллекции. Принимает список полей.
//lib.select('fieldName1', 'fieldName2', ...);
function select() {

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

//Позволяет отфильтровать коллекцию. Принимает название поля и допустимые значения. После выполнения фильтрации должны остаться объекты, у которых поле имеет одно из допустимых значений.
//lib.filterIn('fieldName', ['acceptedValue1', 'acceptedValue2', ...]);
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};


var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

/*
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);
*/