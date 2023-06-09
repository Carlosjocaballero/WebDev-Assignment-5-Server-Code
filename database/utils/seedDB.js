/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "joesmith@gmail.com",
		imageUrl: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115652014/original/787f46b7b7b346d95fa0ad3d8f08711bb972a679/random-kid-will-say-anything.jpg",
		gpa: 3.5,
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "maryjohnson@gmail.com",
		imageUrl: "https://3.bp.blogspot.com/-6xKKl6QNS8k/T_1v5772O_I/AAAAAAAAKLM/IOPQgGKFHLA/s1600/DSC_0012.jpg",
		gpa: 2.3,
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;