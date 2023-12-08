/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, cv) => {
    // Check if there is an existing object with the same category
    let existingCategory = acc.find((item) => item.category === cv.category);
    console.log(existingCategory?.category);
    if (existingCategory?.category) {
      // If the category exists, add the price to it
      existingCategory.totalSpent += cv.price;
    } else {
      // If the category doesn't exist, push a new object
      acc.push({ category: cv.category, totalSpent: cv.price });
    }
    return acc;
  }, []);
}

module.exports = calculateTotalSpentByCategory;
