
function query(collection, ...operations) {
    let new_collection = collection;



    for (let operation of operations){
        let selectCollection = new Set,
        filterCollection = new Map,
        out = [];

        if (operation[0] == 'select') 
        selectCollection.add(operation.slice(1));
        }
    
    console.log(select[0]);


    return new_collection;

}

function select(...props){
    return ["select",...props];
}

function filterIn(prop, values){
    return ["filter", prop, ...values];
}


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


query(friends, select('name', 'gender', 'email'),
filterIn('favoriteFruit', ['Яблоко', 'Картофель']));

/*
module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
*/

/*
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);
*/