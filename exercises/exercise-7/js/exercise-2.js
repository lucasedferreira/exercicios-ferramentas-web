var peaple2 = [
    {
        name: 'Joao silva',
        gender: 'M',
    },
    {
        name: 'Maria Silva',
        gender: 'F',
    },
    {
        name: 'José Silva',
        gender: 'M',
    },
    {
        name: 'Marina Silva',
        gender: 'F',
    },
    {
        name: 'Eduarda Silva',
        gender: 'F',
    }
];

exercise2 = function() {
    console.log('count', peaple2.length);

    male = peaple2.filter((person) => {
        return person.gender === 'M';
    });

    female = peaple2.filter((person) => {
        return person.gender === 'F';
    });

    console.log('men', male.length);
    console.log('women', female.length);

    avgMale = peaple2.length / male.length;
    avgFemale = peaple2.length / female.length;

    console.log('avgMale', avgMale);
    console.log('avgFemale', avgFemale);

    document.getElementById('menAvg').innerHTML = avgMale.toFixed(2);
    document.getElementById('womenAvg').innerHTML = avgFemale.toFixed(2);
}