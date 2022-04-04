function solve(speedNumber,area){
switch (area){
    case "motorway" : 
    let maxspeed=130;
    if (speedNumber<=maxspeed)
    {
       console.log(`Driving ${speedNumber} km/h in a 130 zone`)
    }
    else 
    {
        let difference=speedNumber-maxspeed;
        if (difference<=20)
        {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - speeding`)
        }
        else if (difference>20 && difference<=40)
        {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - excessive speeding`)
        }
        else if(difference>40)
        {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - reckless driving`)
        }
        break;
    }




    case "interstate" : 
      let maxspeed1=90;
    if (speedNumber<=maxspeed1)
    {
       console.log(`Driving ${speedNumber} km/h in a 90 zone`)
    }
    else 
    {
        let difference1=speedNumber-maxspeed1;
        if (difference1<=20)
        {
            console.log(`The speed is ${difference1} km/h faster than the allowed speed of 90 - speeding`)
        }
        else if (difference1>20 && difference1<=40)
        {
            console.log(`The speed is ${difference1} km/h faster than the allowed speed of 90 - excessive speeding`)
        }
        else if(difference1>40)
        {
            console.log(`The speed is ${difference1} km/h faster than the allowed speed of 90 - reckless driving`)
        }
        break;
    }



    case "city" :
        let maxspeed2=50;
        if (speedNumber<=maxspeed2)
        {
           console.log(`Driving ${speedNumber} km/h in a 50 zone`)
        }
        else 
        {
            let difference2=speedNumber-maxspeed2;
            if (difference2<=20)
            {
                console.log(`The speed is ${difference2} km/h faster than the allowed speed of 50 - speeding`)
            }
            else if (difference2>20 && difference2<=40)
            {
                console.log(`The speed is ${difference2} km/h faster than the allowed speed of 50 - excessive speeding`)
            }
            else if(difference2>40)
            {
                console.log(`The speed is ${difference2} km/h faster than the allowed speed of 50 - reckless driving`)
            }
            break;
        }
   

    case "residential" :
        let maxspeed3=20;
        if (speedNumber<=maxspeed3)
        {
           console.log(`Driving ${speedNumber} km/h in a 20 zone`)
        }
        else 
        {
            let difference3=speedNumber-maxspeed3;
            if (difference3<=20)
            {
                console.log(`The speed is ${difference3} km/h faster than the allowed speed of 20 - speeding`)
            }
            else if (difference3>20 && difference3<=40)
            {
                console.log(`The speed is ${difference3} km/h faster than the allowed speed of 20 - excessive speeding`)
            }
            else if(difference3>40)
            {
                console.log(`The speed is ${difference3} km/h faster than the allowed speed of 20 - reckless driving`)
            }
            break;
        }

}
}
solve(40, "city")  