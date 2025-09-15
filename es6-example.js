const theme = {
	primary: "#10b981",
	primaryDark: "#059669",
	primaryLight: "#34d399",
	accent: "#f43f5e",
	cardBg: "#1e2638",
	text: "#e2e8f0",
	textMuted: "#cbd5e0",
	border: "#2d3748",
	heading: "#fbbf24",
};

// Sample data for array demonstrations
const studentData = [
	{ name: "Onizaku Eikichi", age: 22, grade: 92, subject: "JavaScript" },
	{ name: "Ashita Joe", age: 19, grade: 78, subject: "HTML/CSS" },
	{ name: "Musashi Tangiro", age: 21, grade: 95, subject: "Typescript" },
	{ name: "Hajime Ippo", age: 20, grade: 88, subject: "React" },
	{ name: "Tomimo Megaji", age: 18, grade: 76, subject: "HTML/CSS" },
	{ name: "Pluto Tanshiro", age: 24, grade: 91, subject: "Node.js" },
];

const clearConsole = () => {
	console.clear();
};

// SCOPE DEMONSTRATION
const demonstrateScope = () => {
	console.info("<-- SCOPE DEMONSTRATION -->");

	// CONST demonstration
	const PI = 3.14159;
	console.log(`const PI = ${PI}; // Cannot be reassigned`);

	try {
		// PI = 3.141; // would throw error
		console.log("const prevents reassignment - good for constants");
	} catch (e) {
		console.error(`❌ Error: ${e.message}`);
	}

	// LET demonstration
	let counter = 0;
	console.log(`let counter = ${counter}; // Block scoped, can be reassigned`);

	for (let i = 1; i <= 3; i++) {
		counter += i;
		console.log(`  Loop iteration ${i}: counter = ${counter}`);
	}
	console.log(`Final counter: ${counter}`);
	console.log("✅ Scope demonstration complete!");
};

// ARROW FUNCTIONS DEMONSTRATION
const demonstrateArrowFunctions = () => {
	console.info("<-- ARROW FUNCTIONS DEMONSTRATION -->");

	// Traditional vs Arrow
	function traditionalFunction(x) {
		return x * 2;
	}
	const arrowFunction = (x) => x * 2;
	const shortArrow = (x) => x * 2;

	const testNumber = 5;
	console.log(`Traditional function: ${traditionalFunction(testNumber)}`);
	console.log(`Arrow function: ${arrowFunction(testNumber)}`);
	console.log(`Short arrow: ${shortArrow(testNumber)}`);

	// Arrow with arrays
	const numbers = [1, 2, 3, 4, 5];
	console.log(`Original numbers: [${numbers.join(", ")}]`);

	const doubled = numbers.map((n) => n * 2);
	console.log(`Doubled: [${doubled.join(", ")}]`);

	const evenNumbers = numbers.filter((n) => n % 2 === 0);
	console.log(`Even numbers: [${evenNumbers.join(", ")}]`);

	console.log("✅ Arrow functions are concise and clean!");
};

// ARRAY METHODS DEMONSTRATION
const demonstrateArrayMethods = () => {
	console.info("<-- ARRAY METHODS DEMONSTRATION -->");

	const scores = [92, 78, 95, 88, 76, 91];
	console.log(`Sample scores: [${scores.join(", ")}]`);

	// MAP
	const gradesWithBonus = scores.map((score) => score + 5);
	console.log(`MAP - Scores with bonus: [${gradesWithBonus.join(", ")}]`);

	// FILTER
	const highScores = scores.filter((score) => score >= 90);
	console.log(`FILTER - High scores: [${highScores.join(", ")}]`);

	const passingScores = scores.filter((score) => score >= 75);
	console.log(`FILTER - Passing scores: [${passingScores.join(", ")}]`);

	// REDUCE
	const totalScore = scores.reduce((sum, score) => sum + score, 0);
	const averageScore = totalScore / scores.length;
	console.log(`REDUCE - Total: ${totalScore}`);
	console.log(`REDUCE - Average: ${averageScore.toFixed(2)}`);

	const highestScore = scores.reduce(
		(max, score) => (score > max ? score : max),
		0,
	);
	console.log(`REDUCE - Highest: ${highestScore}`);

	// FOREACH
	console.log("FOREACH - Grade analysis:");
	scores.forEach((score, index) => {
		const grade =
			score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
		console.log(`Student ${index + 1}: ${score} points = Grade ${grade}`);
	});

	console.log("✅ Array methods demonstration complete!");
};

// OBJECTS & ES6 FEATURES DEMONSTRATION
const demonstrateObjects = () => {
	console.info("<-- OBJECTS & ES6 FEATURES DEMONSTRATION -->");

	const name = "John Doe";
	const age = 25;
	const grade = 95;

	const student = { name, age, grade };
	console.log(`Object: ${JSON.stringify(student)}`);

	const { name: studentName, age: studentAge } = student;
	console.log(`Destructuring: ${studentName}, ${studentAge}`);

	const updatedStudent = { ...student, subject: "JavaScript", graduated: true };
	console.log(`Spread: ${JSON.stringify(updatedStudent)}`);

	const colors = ["red", "green", "blue"];
	const [firstColor, secondColor, thirdColor] = colors;
	console.log(
		`Destructured colors: ${firstColor}, ${secondColor}, ${thirdColor}`,
	);

	const message = `Student ${studentName} is ${studentAge} years old and scored ${grade}%`;
	console.log(`Template literal: "${message}"`);

	const calculator = {
		numbers: [1, 2, 3, 4, 5],
		sum: function () {
			return this.numbers.reduce((a, b) => a + b, 0);
		},
		average: function () {
			return this.sum() / this.numbers.length;
		},
	};

	console.log(`Calculator sum: ${calculator.sum()}`);
	console.log(`Calculator average: ${calculator.average()}`);

	console.log("✅ Objects & ES6 features demonstration complete!");
};

// ARRAY IMPLEMENTATION ON HTML WEBPAGE
const displayArrayOutput = (title, content) => {
	const output = document.getElementById("arrayOutput");
	output.innerHTML = `
		<h4 style="color: ${theme.primary}; margin-bottom: 1rem;">${title}</h4>
		<div style="background: ${theme.cardBg}; padding: 1rem; border-radius: 8px; color: ${theme.text};">
			${content}
		</div>
	`;
};

const displayStudentData = () => {
	console.info("<-- Displaying student data array on webpage... -->");

	let content = '<table style="width: 100%; border-collapse: collapse;">';
	content += `<tr style="background: ${theme.primary}; color: white;">
		<th style="padding: 8px; border: 1px solid ${theme.border};">Name</th>
		<th style="padding: 8px; border: 1px solid ${theme.border};">Age</th>
		<th style="padding: 8px; border: 1px solid ${theme.border};">Grade</th>
		<th style="padding: 8px; border: 1px solid ${theme.border};">Subject</th>
	</tr>`;

	studentData.forEach((student) => {
		content += `<tr>
			<td style="padding: 8px; border: 1px solid ${theme.border}; color: ${theme.text};">${student.name}</td>
			<td style="padding: 8px; border: 1px solid ${theme.border}; color: ${theme.text};">${student.age}</td>
			<td style="padding: 8px; border: 1px solid ${theme.border}; color: ${theme.text};">${student.grade}</td>
			<td style="padding: 8px; border: 1px solid ${theme.border}; color: ${theme.text};">${student.subject}</td>
		</tr>`;
	});
	content += "</table>";

	displayArrayOutput("Student Data Array", content);
	console.log(`Displayed ${studentData.length} student records`);
};

const filterHighScores = () => {
	console.info("<-- Filtering students with high scores (>85) -->");

	const highScorers = studentData.filter((student) => student.grade > 85);

	let content = `<p><strong>Students with grades above 85:</strong></p><ul>`;
	highScorers.forEach((student) => {
		content += `<li style="color:${theme.text};">${student.name}: ${student.grade}% in ${student.subject}</li>`;
	});
	content += `</ul><p style="margin-top: 1rem; color:${theme.textMuted};"><strong>Found ${highScorers.length} high-performing students</strong></p>`;

	displayArrayOutput("High Scorers (Filter Method)", content);
	console.log(`Found ${highScorers.length} students with grades > 85`);
};

const calculateAverages = () => {
	console.info("<-- Calculating averages using REDUCE method -->");

	const totalGrades = studentData.reduce(
		(sum, student) => sum + student.grade,
		0,
	);
	const overallAverage = totalGrades / studentData.length;

	const subjects = [...new Set(studentData.map((student) => student.subject))];

	let content = "<div>";
	content += `<p style="color:${theme.text};"><strong>Overall Class Average:</strong> ${overallAverage.toFixed()}%</p>`;
	content += `<p style='color:${theme.text};'><strong>Average by Subject:</strong></p><ul>`;

	subjects.forEach((subject) => {
		const subjectStudents = studentData.filter(
			(student) => student.subject === subject,
		);
		const subjectTotal = subjectStudents.reduce(
			(sum, student) => sum + student.grade,
			0,
		);
		const subjectAverage = subjectTotal / subjectStudents.length;
		content += `<li style="color:${theme.textMuted};">${subject}: ${subjectAverage.toFixed()}% (${subjectStudents.length} students)</li>`;
	});
	content += "</ul></div>";

	displayArrayOutput("Grade Averages (Reduce Method)", content);
	console.log(`Overall average: ${overallAverage.toFixed()}%`);
};

const transformDataForDisplay = () => {
	console.info("<-- Transforming data using MAP method... -->");

	const transformedData = studentData.map((student) => ({
		...student,
		displayName: student.name.toUpperCase(),
		letterGrade:
			student.grade >= 90
				? "A"
				: student.grade >= 80
					? "B"
					: student.grade >= 70
						? "C"
						: "D",
		status: student.grade >= 75 ? "✅ PASS" : "❌ FAIL",
		ageGroup:
			student.age < 20 ? "Young" : student.age <= 21 ? "Average" : "Mature",
	}));

	let content =
		'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">';
	transformedData.forEach((student) => {
		content += `
			<div style="background: ${theme.cardBg}; padding: 1rem; border-radius: 8px; border-left: 4px solid ${theme.accent}; color:${theme.text};">
				<h5 style="color: ${theme.heading}; margin-bottom: 0.5rem;">${student.displayName}</h5>
				<p><strong>Grade:</strong> ${student.grade}% (${student.letterGrade}) ${student.status}</p>
				<p><strong>Age:</strong> ${student.age} (${student.ageGroup})</p>
				<p><strong>Subject:</strong> ${student.subject}</p>
			</div>
		`;
	});
	content += "</div>";

	displayArrayOutput("Transformed Data Display (Map Method)", content);
	console.log(`Transformed ${transformedData.length} student records`);
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
	console.info("ES6 Learning Practice page loaded successfully!");
	console.info("This page demonstrates ES6 features and array implementation");
	console.info("Click the buttons above to see demonstrations");
});
