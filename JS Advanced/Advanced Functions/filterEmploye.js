function solve (input,criteria){
    let arr=[]
  let parsedData=JSON.parse(input)
  let [pop,value]=criteria.split("-");
 let tempt=parsedData.filter(x=>x[pop]==value)
    tempt.forEach(el=>{
     arr.push(el)
 })
 console.log(arr)
}










 solve (`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')