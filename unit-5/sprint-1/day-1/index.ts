type user = {
  id:number;
  name: string;
  age: number;
  salary?: number;
};

const userData: user[] = [
{ name: "masaischool", age: 26, salary: 120000, id:101},
{  name: "nrupul",  age: 45,  salary: 15000000,  id:421},
{  name: "yogesh",  age: 50,  salary: 16000000,  id:201},
{  name: "ankush",  age: 33,  salary: 10000000,  id:501},
{  name: "chandra",  age: 35,  salary: 9000000,  id:211},

];


// const data = userData.sort((a,b)=>a.salary-b.salary)
// console.log(data);

function insertionSort(userData:user[], what) 
{ 
    let i:number, key, j:number; 
    for (i = 1; i < userData.length; i++)
    { 
        key = userData[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && userData[j].id > key.id)
        { 
            userData[j + 1] = userData[j]; 
            j = j - 1; 
        } 
        userData[j + 1] = key; 
    } 
    return userData;
} 

let new_data = insertionSort(userData,"id")
console.log(new_data);



