let tableArray = [];
let numberOfMultiplication = 60;

for (let i= 0; i <= numberOfMultiplication; i++) {
   let tempArray = [];
   for (let j = 0; j <= numberOfMultiplication; j++) {
      if(i * j > 36) {
         break;
      }

      tempArray.push(i * j);
      
   }
   if (tempArray.length < 2) {
      break;
   }

   tableArray.push(tempArray);
}

 console.table(tableArray);