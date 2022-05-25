const { describe, expect, test } = require("@jest/globals");

const {sumOfAll,ConvertToTime} = require("../sum_arguments");

describe("Should give the sum of all n arguments",function(){
    test("Shoud add all the n number of areguments",function(){
        expect(sumOfAll(0,2,5,7)).toBe(14);

        expect(sumOfAll(-1,6,7,0)).toBe(12);

        expect(sumOfAll(0,6,10)).toBe(16);

        expect(sumOfAll(-1,-5,100)).toBe(94);
    })
})

describe("Should give the time in Hours, minuts and second formate",function(){
    
    test("Converts miliseconds to hours minuts and seconds",function(){

        expect(ConvertToTime(12000000)).toBe("3 Hours 20 Minuts 0 seconds");

    });
    
    test("Converts miliseconds to minuts and seconds",function(){

        expect(ConvertToTime(200000)).toBe("3 Minuts 20 seconds");

        expect(ConvertToTime(60000)).toBe("1 Minuts 0 seconds");

        expect(ConvertToTime(180000)).toBe("3 Minuts 0 seconds");
    });

    test("Converts miliseconds to seconds only",function(){

        expect(ConvertToTime(5200)).toBe("5 seconds");

        expect(ConvertToTime(6000)).toBe("6 seconds");

        expect(ConvertToTime(12000)).toBe("12 seconds");
    });


})