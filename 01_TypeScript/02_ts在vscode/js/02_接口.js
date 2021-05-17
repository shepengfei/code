// 是一种能力 也是一种约束
(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '东111111方',
        lastName: '不败'
    };
    console.log(showFullName(person));
})();
