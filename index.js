// ==============================================
const interns = [
  {
    name: "okorie chigozie",
    id: "INT001",
    scores: [75, 90, 78, 92, 48],
  },
  {
    name: "Emma Johnson",
    id: "INT002",
    scores: [20, 52, 79, 25, 10],
  },
  {
    name: "Ayomide Balogun",
    id: "INT003",
    scores: [92, 95, 89, 94, 91],
  },
  {
    name: "Diana Prince",
    id: "INT004",
    scores: [48, 86, 30, 85, 87],
  },
  {
    name: "Eunice Smith",
    id: "INT005",
    scores: [70, 40, 2, 78, 20],
  },
];

// ============================================
// calcuting my interns average scores
// ============================================

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);

  const average = total / scores.length;

  // Return average rounded to 2 decimal places
  return average.toFixed(2);
}

console.log("=".repeat(60));
console.log("📚 INTERN GRADEBOOK - AVERAGE SCORES");
console.log("=".repeat(60));
console.log("");

interns.forEach((intern, index) => {
  const average = calculateAverage(intern.scores);

  console.log(`👤 Intern ${index + 1}: ${intern.name}`);
  console.log(`   ID: ${intern.id}`);
  console.log(`   Task Scores: [${intern.scores.join(", ")}]`);
  console.log(`   📊 Average Score: ${average}%`);
  console.log(`   Grade for ${intern.name}: ${getGrade(average)}`);
  console.log("-Congratulations for participating".repeat(1));
});
//  grading function
// ============================================

function getGrade(average) {
  if (average >= 70) return "A (Excellent) ⭐";
  if (average >= 60) return "B (Very Good) 👍";
  if (average >= 50) return "C (Good) ✓";
  if (average >= 40) return "D (Pass) ";
  return "F (Fail) 🥸";
}
