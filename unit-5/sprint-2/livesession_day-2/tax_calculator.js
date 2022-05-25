function TaxCalculator(income) {
  let savingAmount = null;

  if (income < 250000) {
    const taxAmmount = 0;
    savingAmount = income - taxAmmount;
    return taxAmmount;
  }
  if (income >= 250000 && income < 500000) {
    const taxAmmount = (income * 10) / 100;
    savingAmount = income - taxAmmount;
    return taxAmmount;
  }
  if (income >= 500000 && income < 1000000) {
    const taxAmmount = (income * 20) / 100;
    savingAmount = income - taxAmmount;
    return taxAmmount;
  }
  if (income >= 1000000) {
    const taxAmmount = (income * 30) / 100;
    savingAmount = income - taxAmmount;
    return taxAmmount;
  }
}

module.exports = TaxCalculator;

console.log(TaxCalculator(999999+1));

/*
File `tax_calculator.js` 
- Should be able to calculate the tax based on the income and savings

**Rules for tax calculations**
- Below 2,50,000 no tax
- Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
- Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
- Amount earned above 10,00,000 - 30% of the amount earned in this slab

The rules for the rebate based on the savings is mentioned below
- 50% of the savings amount can be deducted from the total income if the total income is below 5,00,000
- 30% of the savings amount can be deducted from the total income if the total income is below 10,00,000
- 10% of the savings amount can be deducted from the total income if the total income is above 10,00,000 the maximum cap of the deduction is 50,000
*/
