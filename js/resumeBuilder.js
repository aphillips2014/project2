//http://discussions.udacity.com/t/encapsulation-technique/6918/3
//JSONlint.com.

//Biography Object
var bio = { 
	"name" : "Andrew Phillips",
	"role" : "Solution Engineer",
 	"contacts": {
 			"mobile": "972.822.6610",
 			"email": "phillips4energy@gmail.com",
 			"github": "aphillips2014",
 			"twitter": "@atphillips",
 			"location": "Dallas"		
 	 },
 	 "welcomeMessage": "Welcome to my resume page.",
 	 "skills": ["Team Player", "HTML", "Perl", "Nagios XI Monitoring", "Nagios Plugins", "Coder", "CSS", "jQuery"],
 	 "biopic": "images/fry.jpg",
 	 display: function(){

 	 	var myName = HTMLheaderName.replace("%data%",bio.name);
        var myRole = HTMLheaderRole.replace("%data%", bio.role);

        var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var myGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var myPic =  HTMLbioPic.replace("%data%", bio.biopic);
        $('#header').prepend(myRole);
        $('#header').prepend(myName);

        //Header Contacts
        $('#topContacts').append(myMobile);
        $('#topContacts').append(myEmail);
        $('#topContacts').append(myGitHub);
        $('#topContacts').append(myTwitter);
        $('#topContacts').append(myLocation);
        $('#header').append(myPic);
        $('#header').append(this.welcomeMessage);
        //Footer Contacts
        $('#footerContacts').append(myMobile);
        $('#footerContacts').append(myEmail);
        $('#footerContacts').append(myGitHub);
        $('#footerContacts').append(myTwitter);
        $('#footerContacts').append(myLocation);
        
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
 			"degree": "Bachelors of Science",
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
	display: function(){

		//Loop through the schools array object in the education object using for..in 
 		for(educ in education.schools){
 			//Append to workeExperience section the jobs
 			$('#education').append(HTMLschoolStart);

 			//Add the formatted education details
 			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[educ].name).replace("#",education.schools[educ].url);
 			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[educ].location);
 			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[educ].degree);
 			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[educ].majors);
 			var formattedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[educ].dates);
            var formattedEducationInfo = formattedSchoolName + formattedSchoolDegree + formattedSchoolDate + formattedSchoolMajor;
	
	        $('.education-entry:last').append(formattedEducationInfo); 			
 			
 		}

 		$('.education-entry:last').append(HTMLonlineClasses);
 		//Loop through the onlinecourses array object in the education object using for..in 
 		for(educ in education.onlinecourses){
 			//Add the formatted education details
 			var onlineSchoolName = HTMLonlineSchool.replace("%data%",education.onlinecourses[educ].school);
 			var onlineSchoolTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[educ].title);
 			$('.education-entry:last').append(onlineSchoolTitle+onlineSchoolName);
 			var onlineSchoolDate = HTMLonlineDates.replace("%data%",education.onlinecourses[educ].date);
 			$('.education-entry:last').append(onlineSchoolDate);
 			var onlineSchoolUrl = HTMLonlineURL.replace("%data%",education.onlinecourses[educ].url).replace("#",education.onlinecourses[educ].url);
 			$('.education-entry:last').append(onlineSchoolUrl);
 		}
	}
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
 		//Loop through the jobs array object in the works object using for..in 
 		for(job in work.jobs){
 			//Append to workeExperience section the jobs
 			$('#workExperience').append(HTMLworkStart);

 			//Add the formatted job details
 			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 			var formattedloc = HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedloc + formattedDates + formattedDescription;

 			
 			//Make the concatenated string of both Employer and Title the last element in that class .work-entry
 			$('.work-entry:last').append(formattedEmployerInfo);
 		}
 	
 	}
};

var projects = { 
 	"project": [
 		{
 			"title": "Rivet Joint",
 			"dates": "1996-2000",
 			"description": "Developed operator work station for Rivet Joint aircraft. Worked on U2-spy plane operator workstation. <br />Worked on Datalink application for Peace Pioneer project for foreign country",
 			"images": ["images/rtn_logo.gif"]		
 		},
 		{
 			"title": "OLAM-AT&T",
 			"dates": "2001-2003",
 			"description": "Developed web and backend code for online billing and minutes usage",
 			"images": ["images/att.jpg"]		
 		}
 	],
 	display: function(){
       //Loop through the project array object in the works object using for..in 
 		for(project in projects.project){
 			//Append to workExperience section the jobs
 			$('#projects').append(HTMLprojectStart);

 			//Add the formatted project details
 			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
 			var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
 			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
            var formattedProjectInfo = formattedProjectTitle + formattedDates + formattedDescription;
 			
 			//Make the concatenated string of projects as last element in that class .project-entry
 			$('.project-entry:last').append(formattedProjectInfo);
 		}
 		//Handle project images separately for display side by side and make them the last element in Projects section
 		for(project in projects.project){
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].images);
            $('.project-entry:last').append(formattedImage);
 		}

 	}
};

//Code used from discussions group "Jima Post " http://discussions.udacity.com/t/encapsulation-technique/6918/5
displayContent = function() {

	projects.display();
	work.display();
	bio.display();
	education.display();

	$("#main").append(internationalizeButton);
	$("#main").append(uninternationalizeButton);
	$("#mapDiv").append(googleMap);

};	

displayContent();