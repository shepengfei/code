// 是一种能力 也是一种约束

(()=>{

    interface IPerson{
        firstName : String,
        lastName : String
    }
    function showFullName(person : IPerson){
        return person.firstName + '_' + person.lastName
    }

    const person = {
        firstName : '东111111方',
        lastName : '不败'
    }

    console.log(showFullName(person))
})()