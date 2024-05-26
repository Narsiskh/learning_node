// The assert module provides a set of assertion functions for verifying invariants. In assert() function, if the value is not truth, then a AssertionError is thrown with a message property set equal to the value of the message parameter.
// Syntax -> assert(value[, message])

// Requiring the module
const assert = require("assert")

// Function call
try {
    assert(0)
} catch (error) {
    console.log("Error", error)
} // Error

try {
    assert(1)
    console.log("No Error Occurred")
} catch (error) {
    console.log("Error", error)
}
//No Error Occurred

