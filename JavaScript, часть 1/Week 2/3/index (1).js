// Телефонная книга

/*
В этом задании необходимо реализовать функцию, через которую можно управлять телефонной книгой.

Для управления телефонной книгой нужно реализовать три команды:

ADD — добавляет контакт
REMOVE_PHONE — удаляет номер
SHOW — возвращает содержимое телефонной книги

Гарантируется, что функция будет вызываться корректно, только со списком перечисленных команд. Корректность входных данных проверять не нужно.
Имя команды пишется большими буквами, параметры разделяются одним пробелом.
Гарантируется уникальность добавляемых телефонов.


Команда ADD
Добавляет контакт в телефонную книгу со списком телефонов. Телефоны перечисляются через запятую. Если такой контакт существует, то команда пополняет список телефонов контакта.

ADD Name phone1,phone2

Команда REMOVE_PHONE
Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. Если такого телефона в телефонной книге не существует, то возвращается false.

REMOVE_PHONE phone1

Команда SHOW
Возвращает массив контактов с их телефонами. Массив содержит строчки вида: "Имя: Телефон1, Телефон2". Массив должен быть отсортирован по имени контакта. Телефоны идут в порядке добавления их в телефонную книгу. Контакт с пустым списком телефонов не должен возвращаться.

ADD Contact2 phone4,phone3

ADD Contact1 phone1

ADD Contact1 phone2

SHOW


// Результат:

[

  "Contact1: phone1, phone2",

  "Contact2: phone4, phone3"

]

Подсказка
В этой задаче удобно разбить операции над телефонной книгой на отдельные функции. Их следует вызывать для конкретной операции. При использовании такой декомпозиции важно не забыть вернуть результат выполнения функции. Иначе основная функция будет возвращать undefined.

module.exports = function (command) {
    // ...
    // var commandName = ... ;
    // ...
    
    // Обработка команды ADD
    if (commandName === 'ADD') {
            // ...
            
            // Не забыть вернуть результат выполнения функции addContact
            return addContact();
        }

            // ...Обработка других команд... 
    }

*/

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {
};


var Contact = {
    Name: "",
    Phone: [],
    CreateNewContact: function(Name, Phone){
        this.Name = Name;
        this.Phone = Phone;
    },
};

var PhoneBook = {
    contactSet: [],
    ADD: function(Сontact) {
        console.log(typeof this.contactSet);
        this.contactSet.push(Сontact);
    },
    REMOVE: function(contactSet,contact){
    },
    SHOW: function(contactSet){
    }
};

/** 
var PhoneBook1 = {

    Contact = {
        Name: "",
        Phone: [],
        CreateNewContact: function(Name, Phone){
            this.Name = Name;
            this.Phone = Phone;
        },
    },

    contactSet: [],

    ADD: function(Сontact) {
        console.log(typeof this.contactSet);
        this.contactSet.push(Сontact);
    },
    REMOVE: function(contactSet,contact){
    },
    SHOW: function(contactSet){
    }
};
*/

var PhoneBook = [];

var Contact = {
    Name: "",
    Phone: [],

    CreateNewContact: function(Name, Phone){
        this.Name = Name;
        this.Phone = Phone;
    },
};
let CreateNewContact = function(Name, Phone){
    this.Name = Name;
    this.Phone = Phone;
};



//ADD Ivan 555-10-01,555-10-03

let name = "Ivan";
let phone = ['555-10-01', '555-10-01'];

var a = new Contact.CreateNewContact(name, phone);

PhoneBook.push(a);

for (let i of PhoneBook) {
    console.log(PhoneBook[i]);
}

//var a = new Contact(name, phone);
//let PB = new PhoneBook.ADD(a);
//console.log(PhoneBook);


let ContactAnother = function(name, phones){
    this.name = name || "unnamed";
    this.phones = new Set(phones);

    this.show = function(){
        console.log("Abonent: "+this.name,"Phones:",...this.phones);
    };

    this.addPhones = function(...phones){
        for(let phone of phones){
            if(!this.phones.has(phone)) this.phones.add(phone);
        }
    };
    this.deletePhone = function(phone){
        return this.phones.delete(phone);
    }
};

let PhoneBookAnother = function(){
   this.decoder = function(message){
        let [command, name] = message.split(" "),
            contacts = message.slice(message.lastIndexOf(" ")+1).split(",");
        //console.log("Command:",command,"----------");
        //console.log("Name:",name);
        //console.log("Phones:",...contacts);
        if(this.hasOwnProperty(command)) this[command](name,contacts);
   };
   
   this.ADD = function(name,contacts){
    console.log("FUNCTION ADD",name,...contacts);
   };

   this.REMOVE_PHONE = function(name,contacts){
    console.log("FUNCTION REMOVE_PHONE",...contacts);
   };

   this.SHOW = function(name,contacts){
    console.log("FUNCTION SHOW");
   };

};

let ph = new PhoneBookAnother;
ph.decoder("ADD Nick 555-00-000,112322424");
ph.decoder("REMOVE_PHONE 555-00-000,112322424");
ph.decoder("SHOW");