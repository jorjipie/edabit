const assertEquals = (test, control, note) => {
    if (test === control) { 
        console.log(`✅  Test Passed: Value == ${control}`); 
    }
    else {
        let message = `❌ FAILED: Expected: ${control}, instead got: ${test}.`;
        if (note != null) { message += " " + note; }
        console.log(message);
    }
};
const assertSimilar = (test, control, note) => {
    let passed = false;

    if (typeof test === "object" 
        && typeof control === "object" 
        && test !== null 
        && control !== null) {
        passed = deepEqual(test, control);
    } else {
        passed = test === control;
    }

    if (passed) {
        console.log(`✅ Test Passed: Value ==`, control);
    } else {
        console.error(`❌ Test Failed: Expected`, control, `but got`, test, note ? `(${note})` : "");
    }
}
const deepEqual = (a, b) => {
    if (a === b) return true;

    if (typeof a !== "object"
        || typeof b !== "object"
        || a === null 
        || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

const expectNoError = (message, fn) => {
    console.log(message);
    console.log(fn);
}
module.exports = {
    assertEquals, 
    assertSimilar,
    expectNoError
};