/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  const result = [];

  // Create a dictionary to store total spent for each category
  const categoryTotal = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is not in the dictionary, initialize it with the current transaction's price
    if (!categoryTotal[category]) {
      categoryTotal[category] = price;
    } else {
      // If the category is already in the dictionary, add the current transaction's price to the total
      categoryTotal[category] += price;
    }
  });

  // Convert the dictionary to the desired output format
  for (const category in categoryTotal) {
    result.push({ category, totalSpent: categoryTotal[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

