

let userAdmin = [];

const users = new Map();

users.set("Yan","userAdmin");
users.set("Gael", "userAdmin");
users.set("Elen","user");

function getAdmins(map){
    for ([key, value] of map) {
       if (value === "userAdmin"){
            userAdmin.push(key);
       }
    }
    return userAdmin;
}

console.log(getAdmins(users));




