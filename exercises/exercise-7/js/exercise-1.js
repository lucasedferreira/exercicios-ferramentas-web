var peaple1 = [
    {
        name: 'Joao silva',
        age: 17,
    },
    {
        name: 'Maria Silva',
        age: 35,
    },
    {
        name: 'José Silva',
        age: 15,
    },
    {
        name: 'Marina Silva',
        age: 40,
    }
];

exercise1 = function() {
    listOld = document.getElementById('listaMaiores');
    listYoung = document.getElementById('listaMenores');
    contentYounger = contentOlder = "";

    peaple1.forEach(person => {
        if(person.age < 18)
            contentYounger += "<li class='list-group-item'>"+person.name+" - "+person.age+"</li>";
        else
            contentOlder += "<li class='list-group-item'>"+person.name+" - "+person.age+"</li>";
    });

    listOld.innerHTML = contentOlder;
    listYoung.innerHTML = contentYounger;
}