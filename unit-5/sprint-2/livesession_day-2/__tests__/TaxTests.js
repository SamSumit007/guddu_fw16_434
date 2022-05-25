const {expect,describe,test} =require("@jest/globals")

const TaxCalculator = require("../tax_calculator")

describe("Should give the tax of an amount", function(){
    test("amount Less than 250000",function(){
        expect(TaxCalculator(200000)).toBe(0);

        expect(TaxCalculator(249999)).toBe(0);
    });
    test("amount greater than 250000 but less than 500000",function(){
        expect(TaxCalculator(300000)).toBe(30000);

        expect(TaxCalculator(499999)).toBe(49999.9);

        expect(TaxCalculator(500000)).toBe(100000);
    });
    test("amount greater than 500000 but less than 1000000",function(){
        expect(TaxCalculator(999999)).toBe(199999.8);

        expect(TaxCalculator(500000)).toBe(100000);
    })
    test("amount greater than 1000000",function(){
        expect(TaxCalculator(1000000)).toBe(300000);
    })
})