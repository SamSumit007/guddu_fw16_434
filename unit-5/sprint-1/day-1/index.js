var userData = [
    { name: "masaischool", age: 26, salary: 120000, id: 101 },
    { name: "nrupul", age: 45, salary: 15000000, id: 421 },
    { name: "yogesh", age: 50, salary: 16000000, id: 201 },
    { name: "ankush", age: 33, salary: 10000000, id: 501 },
    { name: "chandra", age: 35, salary: 9000000, id: 211 },
];
// const data = userData.sort((a,b)=>a.salary-b.salary)
// console.log(data);
function insertionSort(userData, what) {
    var i, key, j;
    for (i = 1; i < userData.length; i++) {
        key = userData[i];
        j = i - 1;
        while (j >= 0 && userData[j].id > key.id) {
            userData[j + 1] = userData[j];
            j = j - 1;
        }
        userData[j + 1] = key;
    }
    return userData;
}
var new_data = insertionSort(userData, "id");
console.log(new_data);
var sub;
(function (sub) {
    sub["chemestry"] = "chemestry";
    sub["physics"] = "physics";
    sub["math"] = "math";
})(sub || (sub = {}));
var studetsData = [
    { id: 101, name: "nrupul", subject: sub.math, age: 25, no_of_students: 200 },
    { id: 111, name: "yogesh", subject: sub.physics, age: 45, no_of_students: 250 },
    { id: 501, name: "Abhishek", subject: sub.chemestry, age: 24, no_of_students: 100 },
    { id: 201, name: "Shahbaj", subject: sub.math, age: 23, no_of_students: 150 },
    { id: 212, name: "Prabhanjan", subject: sub.physics, age: 35, no_of_students: 350 }
];
var new_studetsData = insertionSort(studetsData, "id");
console.log(new_studetsData);
