function solve (area,vol,input) {
    let cubes=JSON.parse(input);
    let finalArr=[];
      for (let cube of cubes)
      {
          let finalArea=area.apply(cube)
          let finalVol=vol.apply(cube)
           finalArr.push({area: finalArea,
        volume: finalVol})
      } 
   return finalArr;
}


const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;
solve (area,vol,data)
function vol() {
       return Math.abs(this.x * this.y * this.z);
    };
function area() {
        return Math.abs(this.x * this.y);
    };
    