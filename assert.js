const assert = require("assert")

let x = 4
let y = 5

// try {
//     // checking condition
//     assert(x === y)
// }
// catch {
//     // Error output
//     console.log(
//         `${x} is not equal to ${y} `
//     ) // 4 is not equal to 5
// }

assert(x > y);
// node:assert:400
//     throw err;
//     ^
//
// AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
//
//   assert(x > y)
//
//     at Object.<anonymous> (/home/narsis/Project/learning_node/assert.js:17:1)
//     at Module._compile (node:internal/modules/cjs/loader:1218:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
//     at Module.load (node:internal/modules/cjs/loader:1081:32)
//     at Module._load (node:internal/modules/cjs/loader:922:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47 {
//   generatedMessage: true,
//   code: 'ERR_ASSERTION',
//   actual: false,
//   expected: true,
//   operator: '=='
// }