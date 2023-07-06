const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// 1. Use forEach to console log each name to the console
names.forEach(name => console.log(name));

// 2. Use forEach to console log each name with a matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 3. Using map, loop over all province names and turn the string to all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 4. Create a new array with map that has the amount of characters in each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 5. Use sort to sort all provinces alphabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word "Cape" in them
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// 7. Use map and some to create a boolean array indicating whether a name contains the letter 'S'
const nameContainsS = names.map(name => name.includes('S'));
console.log(nameContainsS);

// 8. Use reduce to turn the arrays into an object indicating the province of each individual
const provinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(provinceObject);

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(
  // 1. Use forEach to console.log each product name to the console
  products.forEach(product => console.log(product.product)),

  // 2. Use filter to filter out products that have a name longer than 5 characters
  products.filter(product => product.product.length <= 5),

  // 3. Using both filter and map, convert all prices that are strings to numbers, and remove products without prices. Then use reduce to calculate the combined price of all remaining products.
  products.filter(product => typeof product.price === 'number' || !isNaN(Number(product.price))).map(product => {
      if (typeof product.price === 'string') {
        product.price = Number(product.price);
      }
      return product;
    }).reduce((total, product) => total + product.price, 0),

  // 4. Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
  products.reduce((concatenatedString, product, index) => {
    if (index === products.length - 1) {
      return concatenatedString + product.product;
    } else {
      return concatenatedString + product.product + ', ';
    }
  }, ''),

  // 5. Use reduce to calculate both the highest and lowest-priced items. Return the names as the following string: Highest: coffee. Lowest: banana.
  products.reduce(
    (result, product) => {
      if (product.price > result.highest.price) {
        result.highest = product;
      }
      if (product.price < result.lowest.price) {
        result.lowest = product;
      }
      return result;
    },
    { highest: { product: '', price: Number.NEGATIVE_INFINITY }, lowest: { product: '', price: Number.POSITIVE_INFINITY } }
  ),
  
  // 6. Using only Object.entries and reduce, recreate the object with changed key names (product to name, price to cost)
  Object.entries(products).reduce((newObject, [key, value]) => {
    const { product, price, ...rest } = value;
    newObject[key] = { name: product, cost: price, ...rest };
    return newObject;
  }, {})
)

