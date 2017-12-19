const myHeaders = new Headers({ "Content-Type": "application/json" });
const URL = require('../../package.json').serverURL;

class UserStore {
    constructor() {
        this._users = "";
    }

    //error handling mangler...
    getAllUsers = cb => {
        if (this._users === "") {
            console.log("Fetching users");
            fetch(URL, { method: "GET", headers: myHeaders })
                .then(res => res.json())
                .then(data => {
                    this._users = data;
                    if (cb) {
                        cb(this._users);
                    }
                });
        } else {
            console.log("using stored users");
            cb(this._users);
        }
    }

    getUserWithIndex(param, cb) {
        if (this._users === "") {
            console.log("Fetching users in index thingie");
            fetch(URL, { method: "GET", headers: myHeaders })
                .then(res => res.json())
                .then(data => {
                    this._users = data;
                    let user = this._users[param];
                    if (typeof user === 'undefined') {
                        cb({});
                    } else {
                        cb(user);
                    }
                });
        } else {
            console.log("using stored users");
            let user = this._users[param];
            if (typeof user === 'undefined') {
                cb({});
            } else {
                cb(user);
            }
        }
    }
}

export default new UserStore();