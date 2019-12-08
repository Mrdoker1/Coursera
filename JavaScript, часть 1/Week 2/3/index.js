/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */


let ContactAnother = function(name, phones){
    this.name = name || "unnamed";
    this.phones = new Set(phones);

    this.show = function(){
        return `${this.name}: ${Array.from(this.phones).join(", ")}`;
    };

    this.addPhones = function(...phones){
        for(let phone of phones){
            if(!this.phones.has(phone)) 
               // console.log(phone);
                this.phones.add(phone);
        }
    };

    this.deletePhone = function(phone){
        return this.phones.delete(phone);
    }
};

let PhoneBookAnother = function(){
    this.contacts = new Set;

    this.decoder = function(message){
            let [command, name] = message.split(" "),
                contacts = message.slice(message.lastIndexOf(" ")+1).split(",");
            if(this.hasOwnProperty(command)) return this[command](name,contacts);
            return false;
    };
    
    this.ADD = function(name,contacts){
        let findContact = this.getContactByName(name),
            phoneExist = false;

        for(let phone of contacts){
            phoneExist = this.getContactByPhone(phone);
            if(phoneExist) break;
        }

        if(!phoneExist){
            if(findContact){
                findContact.addPhones(...contacts);
            }else{
                this.contacts.add(new ContactAnother(name, contacts));
            }
        }
    };

    this.getContactByPhone = function(phone){
        for(let contact of this.contacts)
            if(contact.phones.has(phone))return contact;
        return false;
    };

    this.getContactByName = function(name){
        for(let contact of this.contacts)
            if(contact.name == name)return contact;
        return false;
    };

    this.REMOVE_PHONE = function(name,contacts){
        let deleted = false;
        for(let phone of contacts){
            let contact = this.getContactByPhone(phone);
            if(contact){
                contact.deletePhone(phone);
                if( !contact.phones.size ) this.contacts.delete(contact); 
                deleted = true;
            }
        }
        return deleted;
    };

    this.SHOW = function(name,contacts){
        let output = [];
        for(let contact of this.contacts){
            let outputInfo = contact.show();
            output.push(outputInfo);
        }
        return output.sort();
    };

};

var pb = new PhoneBookAnother;
//console.log("Ivan: 555-10-01, 555-10-03, 555-10-02");

module.exports = function(message){
    return pb.decoder(message);
};


