let list = [
    {
        Name: 'sardar kawish zahid',
        age: 17,
        registrationnumber: 12345,
        course: 'python',
        fvrtprogramminglanguages: ["python",]
    },
    {
        math: 47,
        bio: 63,
        english: 57,
        urdu: 78,
        chemistry: 40,

    }

];

console.log(list[0].Name);
console.log(list[0].age);
console.log(list[0].registrationnumber);
console.log(list[0].course);
console.log(list[0].fvrtprogramminglanguages);
console.log(list[1].math);
console.log(list[1].bio);
console.log(list[1].english);
console.log(list[1].urdu);
console.log(list[1].chemistry);

let firstfvrtplanguage = list[0].fvrtprogramminglanguages[0];
let lastfvrtplanguage = list[0].fvrtprogramminglanguages[list[0].fvrtprogramminglanguages.length - 1]
console.log(firstfvrtplanguage);
console.log(lastfvrtplanguage);

console.log(list[1].math);
console.log(list[1].bio);