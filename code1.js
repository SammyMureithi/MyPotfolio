function countBy(x, n) {
    let z = [];
    for(let myNum=1;myNum<=n;myNum++){

        let newnum=myNum*x;
        z.push(newnum);
    }
  
  
    return z;
  }
  countBy(2,5);