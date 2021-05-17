function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user3 = {
    firstName: 'Yee',
    lastName: 'Huang'
};
console.log(greeter(user3));
