function solve(input) {
    let obj={}
    let inputL=input.length
    for (let i=0;i<inputL;i+=2){
      let productName=input[i];
      let calories=+input[i+1];
      obj[productName]=calories;
    }
    console.log(obj)
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])