// requirements
// TDD - create tests for a module that will:
// obscure credit card number except last 4 digits
// Test make sure the function obscures credit card numbers 
// that are between the length of 12 and 16 digits

// Homework:
// input: 123456789012
// output: xxxxxxxx9012 or ********9012

const card = require("./card")

// Positibe Testing
describe("Testing for obscured card number", () => {
    test("As a user I want only the last 4 of a credit card to show when another user inputs their credit card number", () => {
        expect(card('123456789012')).toEqual("xxxxxxxx9012")
        expect(card('123456789012')).toHaveLength(12)
        expect(card('123456789012')).toBeTruthy()
    })
})
// Negative Testing
describe("Testing for errors", () => {
    test("As a user I want everything works as intended", () => {
        expect(card('12345678901')).toEqual("Invalid Credit Card")
        expect(card('12345678901234567')).toEqual("Invalid Credit Card")
        expect(card('123456789')).not.toHaveLength(12)
        
    })
})