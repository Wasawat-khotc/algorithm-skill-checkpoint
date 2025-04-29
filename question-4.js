function sortProductsByPrice(products) {
  // Your code here
  for(let i=0;i<products.length-1;i++){
    for(let j=0;j<products.length-1-i;j++){
      if(products[i].price > products[i+1].price){
        let temp = products[i]
        products[i] = products[i+1]
        products[i+1] = temp 
      }
    }
  }return products
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
