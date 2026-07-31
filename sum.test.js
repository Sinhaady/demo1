import sum from "./sum.js";


//For multiple test together 
// Describe

describe("test for sum function",()=>{
    test("add 2+2 to be 4",()=>{
        expect(sum(2,2)).toBe(4);
    });
    test("add 5+5 to be 10",()=>{
        expect(sum(5,5)).toBe(10);
    });
});




// // unit testing
// test("add 2+2 to be 4",()=>{    
//     expect(sum(2,2)).toBe(4);    --> single set of test
// });