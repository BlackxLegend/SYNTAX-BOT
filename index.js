/** 
 * @author SYNTAX TEAM
 * ! The source code is written by JARiF, please don't change the author's name everywhere. Thank you for using 
 * 
 * English:
 * ! Please do not change the below code, it is very important for the project.
 * It is my motivation to maintain and develop the project for free.
 * ! If you change it, you will be banned
 * Thank you for using
 * 
 * Bangla:
*! অনুগ্রহ করে নীচের কোডটি পরিবর্তন করবেন না, এটি প্রকল্পের জন্য খুবই গুরুত্বপূর্ণ।
 * বিনামূল্যে প্রকল্পটি বজায় রাখা এবং বিকাশ করা আমার অনুপ্রেরণা।
 *! আপনি যদি এটি পরিবর্তন করেন তবে আপনাকে নিষিদ্ধ করা হবে
 * ব্যবহার করার জন্য আপনাকে ধন্যবাদ
 */

const { spawn } = require("child_process");
const log = require("./logger/log.js");

function startProject() {
	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("Restarting Project...");
			startProject();
		}
	});
}

startProject();
