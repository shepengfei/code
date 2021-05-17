function greeter (person: string) {
    return 'Hello, ' + person
  }
  
  //Argument of type 'number[]' is not assignable to parameter of type 'string'.
  let user1 = [1,2,3]
  
  console.log(greeter(user1))