function highAndLow(numbers){
   let mynewNumber=numbers.replaceAll(' ','');
   let myTrim=numbers.split(" ");

   let mySize=mynewNumber.length;

   let myArray=[];

   for(index=0;index<mySize;index++){

    myArray.push(mynewNumber[index]);
   }
   let newIntArray=[]
   for(let myInt of myArray){
       myNewInt=parseInt(myInt);
       newIntArray.push(myNewInt);

   }
   let maximum=Math.max(...newIntArray);
   let minimum=Math.min(...newIntArray)
   console.log(maximum);
   console.log(minimum);
   
   let myMaxString=maximum.toString();
   let myMinString=minimum.toString();
   console.log(myMaxString);
   console.log(myMinString);
   console.log(myMaxString+' '+ myMinString)

   console.log(myTrim);

  }

  highAndLow("-19 2 3 4 5");