//let object = {
//    name: "",
//    status: false
//}
//let stat = false;
let myWork = [];

for (let i = 1; i <= 10; i++) {
    //const element = Array[i];
    //console.log(i);
    //stat = !stat
    myWork.push(
        {
            name: "Lesson" + i,
            status: i % 2 === 0 ? true: false
        }
    );

    //myWork.push({name"", status: i % 2 === 0 ? true: false});
}

for (let i = 0; i < 2; i++) {
    console.log("--------------First Loop start ---------------");
    console.log("First loop iteration = " + i);
    for (let j = 0; j < 5; j++) {
        console.log("----------Second Loop start---------");
        console.log("Second loop iteration 'i' = " + i);
        console.log("Second loop iteration 'j' = " + j);
        console.log("----------Second Loop end ---------");
    }
    console.log("------------First Loop end---------------");
}

//console.log(myWork);