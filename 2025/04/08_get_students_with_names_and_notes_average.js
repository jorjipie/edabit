// https://edabit.com/challenge/aZiwEFEdFvWoBvDWS

const getStudentsWithNamesAndAvgNote = students => 
    students.map(student => ({
        name: student.name, 
        avgNote: student.notes.length == 0 
            ? 0 
            : student.notes.reduce((sum, note) => sum + note) / student.notes.length 
    }));


const Test = require('../../test.js');
const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
    key => actual[key] === expected[key]
  )
  const areEqual = (actual, expected, compare) => expected.every(
    (item, index) => compare(actual[index], item)
  )
  const sets = [
    [['Jacek', [5, 4, 3]], ['Ewa', [3, 3, 3]], ['Zygmunt', [1, 2, 3]]],
    [['Jacek', []], ['Ewa', []], ['Zygmunt', [1, 2, 3]]],
    []
  ].map(
    set => ({ 
      actual: getStudentsWithNamesAndAvgNote(
        set.map(([name, notes]) => ({ name, notes }))
      ), 
      expected: set.map(
        ([name, notes]) => ({ 
        name, 
        avgNote: notes.reduce(
         (total, next) => total + next, 
         0
        ) / (notes.length || 1) 
      }))
    })   
  ).forEach(
    ({ actual, expected }) => {
      Test.expectNoError('Result should be an array', () => {
        Test.assertEquals(
          areEqual(
            actual, 
            expected, 
            objectsAreEqual
          ), 
          true, 
          `Actual: ${JSON.stringify(actual)}, Expected: ${JSON.stringify(expected)}`)
      })
    }
  )