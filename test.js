const assertEquals = (test, control, note) => {
    if (test === control) { console.log(true); }
    else {
        let message = `Failed. Expected ${control}. Got ${test}.`;
        if (note != null) { message += " " + note; }
        console.log(message);
    }
};
const assertSimilar = (test, control, note) => {
    if (test.toString() == control.toString()) { console.log(true); }
    else {
        let message = `Failed. Expected ${control}. Got ${test}.`;
        if (note != null) { message += " " + note; }
        console.log(message);
    }
};
module.exports = {
    assertEquals, 
    assertSimilar
};