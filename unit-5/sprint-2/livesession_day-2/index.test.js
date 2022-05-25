// import sum from "./index";

const {sum,multiply} = require("./index")
const {test,expect,describe} = require("@jest/globals")

// test("Should Work on all positive Number", function(){
//     //assertion
//     //left: Actual;
//     //right: expectation;
//     expect(sum(0,0)).toBe(0)

//     expect(sum(0,10)).toBe(10);

//     expect(sum(100,0)).toBe(100);

//     expect(sum(0,9)).toBe(9);
// });


describe("sum function for number",function(){
    test("Should Work on all positive Number", function(){
        //assertion
        //left: Actual;
        //right: expectation;
        expect(sum(0,0)).toBe(0);
    
        expect(sum(0,10)).toBe(10);
    
        expect(sum(100,0)).toBe(100);
    
        expect(sum(0,9)).toBe(9);
    });
    test("Should Work on all negative Number", function(){
        //assertion
        //left: Actual;
        //right: expectation;
        expect(sum(-1,0)).toBe(-1);
    
        expect(sum(-10,10)).toBe(0);
    
        expect(sum(100,-99)).toBe(1);
    
        expect(sum(-10,-9)).toBe(-19);
    });
});