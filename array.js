var students={s1 : "Shravani",
s2:"Bhavani",
s3:"Swathi",
s4:"Deepthi",
s5:"Suresh"
};

var arr=[1,2,7,3,5,6,78,6,5,54,65,56,56];

/*
console.log(arr);
arr.push(200);
console.log(arr.pop()+" is Popped");
console.log(arr.pop()+" is Popped");
console.log(arr.shift()+" is removed from start");
console.log()
console.log(" 100 is added at start");
console.log(students);

for(number in arr){
    if(arr[number]==6){
        continue;
    }
    console.log(arr[number]);
}
for(student in students){
    console.log(students[student]);
}

console.log(Math.min(1,3,4,5,6,2,324));
console.log(Math.max(1,3,4,5,6,2,324));
*/
function sayhello(){
    console.log("Hello");
}
function showmessage(message){
    console.log("message:"+message);
}
sayhello();
showmessage("Hello How are you");
setTimeout(sayhello,10000);
clearInterval(sayhello);