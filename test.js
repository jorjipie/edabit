const assertEquals = (test, control, note) => {
    if (test === control) { 
        console.log(`✔️  Test Passed: Value == ${control}`); 
    }
    else {
        let message = `❌ FAILED: Expected: ${control}, instead got: ${test}.`;
        if (note != null) { message += " " + note; }
        console.log(message);
    }
};
const assertSimilar = (test, control, note) => {
    if (test != null && test.toString() == control.toString()) { 
        console.log(`✔️  Test Passed: Value == ${control}`); 
    }
    else {
        let message = `❌ FAILED: Expected: ${control}, instead got: ${test}.`;
        if (note != null) { message += " " + note; }
        console.log(message);
    }
};
module.exports = {
    assertEquals, 
    assertSimilar
};