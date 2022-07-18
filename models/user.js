class User {
    constructor(id,firstName, lastName, email, password, birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
    }
}

module.exports = User;