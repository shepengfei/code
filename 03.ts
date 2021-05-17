interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user3 = {
    firstName: 'Yee',
    lastName: 'Huang'
  }
  
  console.log(greeter(user3))