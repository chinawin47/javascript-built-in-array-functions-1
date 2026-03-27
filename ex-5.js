const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const totalScore = students.reduce(function sumScore(sum, student) {
    return sum + student.score;
  }, 0);
  return totalScore / students.length;
}

const student = getAverageStudentScore(students);
console.log(student);
// Output: 87.5
