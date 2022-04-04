function solve(fruit,grams,money)
{  let pricePerKilo=money;
  let kilograms=(grams/1000);
  let finalCost=(kilograms*pricePerKilo)
  console.log(`I need $${(finalCost).toFixed(2)} to buy ${(kilograms).toFixed(2)} kilograms ${fruit}.`)
}
solve("orange", 2500, 1.80)