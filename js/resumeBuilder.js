//http://discussions.udacity.com/t/encapsulation-technique/6918/3
//JSONlint.com.

//Biography Object
var bio = { 
	"name" : "Andrew T. Phillips",
	"role" : "Solution Engineer",
 	"contacts": {
 			"mobile": "972-822-6610",
 			"email": "phillips4energy@gmail.com",
 			"github": "https://github.com/aphillips2014",
 			"twitter": "@atphillips",
 			"location": "Dallas, TX"		
 	 },
 	 "welcomeMessage": "Welcome to " + this.name + " resume page.",
 	 "skills": ["team player", "HTML", "Perl", "Nagios XI Monitoring", "Nagios Plugins", "Coder"],
 	 "biopic": "images/fry.jpg",
 	 display: function(){
 	 	if(bio.skills.length > 0){
 	 		$('#header').append(HTMLskillsStart);
 	 		//Loop through each skill and add my skills to HTMLskillsStart section in header
 	 		for (var mySkill = 0; mySkill < this.skills.length; mySkill++){
 	 			var formattedSkill = HTMLskills.replace("%data%",this.skills[mySkill]);
 	 			$('#skills').append(formattedSkill);
 	 		}
 	 	}
 	 }
};

 /* Education object */
var education = {   
 	"schools": [    /* Schools Array with 1 school object  */
 		{
 			"name": "Texas A&M-Commerce",
 			"location": "Commerce, TX",
 			"degree": "BS",
 			"majors": ["Chemistry"],
 			"dates": 1996,
 			"url": "http://www.tamuc.edu"
 		}
 	],
	"onlinecourses": [   /* Online Schools Array with 1 object  */
		{
			"title" : "Front-End Web Developer",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/nd001"
		}
	],
	display: function(){}
};

//Work object
var work = { 
 	"jobs": [  /* jobs Array object with 2 objects  */
 		{
 			"employer": "Raytheon",
 			"title": "Associate Software Engineer",
 			"location": "Greenville, TX",
 			"dates": "1996-2000",
 			"description": "Design and develop defense systems for domestic and foreign governments. "
 		},
 		{
 			"employer": "AT&T",
 			"title": "Solution Engineer",
 			"location": "Richardson, TX",
 			"dates": "2000-Present",
 			"description": "Provide solutions for our monitoring environment."
 		}
 	],
 	display: function(){
 		var emp_title;
 		//Loop through the jobs array object in the works object using for..in 
 		for(job in work.jobs){
 			//Append to workeExperience section the jobs
 			$('#workExperience').append(HTMLworkStart);
 			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 			var formattedEmployerTitle = formattedEmployer + formattedTitle;
 			//Make the concatenated string of both Employer and Title the last element in that class .work-entry
 			$('.work-entry:last').append(formattedEmployerTitle);
 		}
 	
 	}
};

var projects = { 
 	"project": [
 		{
 			"title": "Rivet Joint",
 			"dates": "1996-1998",
 			"description": "Developed operator work station for Rivet Joint aircraft",
 			"images": ["images/rivet1.jpg", "images/rivet2.jpg"]		
 		},
 		{
 			"title": "OLAM",
 			"dates": "2001-2003",
 			"description": "Developed web and backend code for online billing and minutes usage",
 			"images": ["images/att.jpg"]		
 		}
 	],
 	display: function(){}
};

//Code used from discussions group "Jima Post " http://discussions.udacity.com/t/encapsulation-technique/6918/5
displayContent = function() {

	projects.display();
	work.display();
	bio.display();
	education.display();

	//$("#main").append(internationalizeButton);
	//$("#mapDiv").append(googleMap);

};	

displayContent();