function firstNonConsecutive (arr) {
    let myArrraySize=arr.length;
    let myCount=0;

    for(let i=0;i<myArrraySize;i++){
        if(arr[i]==arr[i+1]-1){
            myCount+=1
            
            //console.log(arr[i+1])
        }
        else{
            return null
        }
       

    }
    console.log("myCount "+myCount)
}
firstNonConsecutive([3,4,5,6,7,7,8])