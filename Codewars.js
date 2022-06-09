function filter_list(l) {
const newArray=[];
    for(let x of l){
        if(typeof x==='number' && x >=0){
            newArray.push(x);
        }

    }
    return newArray;
    // Return a new array with the strings filtered out
  }

  filter_list([1,2,'a','b']) 