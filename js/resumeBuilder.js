/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Leena");
/*var email = "leena@udacity.com";

var newEmail = email.replace("udacity","google");

console.log(newEmail);

var awesomeThoughts = "I am awesome";
var funThoughts = awesomeThoughts.replace("awesome","fun");

$("#main").append(funThoughts);*/

var bio ={
  "name" : "Leena Ghanekar",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "4128774312",
    "email": "lubgade@yahoo.com",
    "location": "New Jersey",
    "github": "lubgade"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage" : "welcome",
  "skills" : ["web-developer","teacher","jewelry-designer"]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedContactMobile);
var formattedContactEmail = HTMLemail.replace("%data%",bio.contacts.email);
$('#topContacts').append(formattedContactEmail);
var formattedContactLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$('#topContacts').append(formattedContactLocation);
var formattedContactGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$('#topContacts').append(formattedContactGithub);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$('#header').append(formattedBioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$('#header').append(formattedWelcomeMsg);


var work = {
  "jobs": [
    {
      "employer": "self-employed",
      "title" : "jewelry-designer",
      "location" : "Bridgewater",
      "dates" : "2014-2016",
      "description": "something"
    },
    {
      "employer": "Sau Venutai Polytechnic, Pune",
      "title": "Teacher",
      "location": "Pune",
      "dates": "1997-2000",
      "description": "something"
    }
  ]
};

var education = {
  "schools": [
    {
      "name" : "Cummins College Of Engg",
      "location" : "Pune",
      "degreeDates": "1993-1997",
      "url": "www.example.com",
      "majors": ["CS"]
    },
    {
      "name": "K Narkhede Vidyalaya",
      "location": "Bhusawal",
      "degreeDates": "1991-1993",
      "url": "www.example.com",
      "majors": ["Biology","Math"]
    }
    ],
  "onlineCourses": [
    {
      "title": "Full Stack Nanodegree",
      "school": "Udacity",
      "dates": "2017-2018",
      "url": "www.udacity.com"
    }
  ]
};

var projects = {
  "projects":[
    {
      "title": "Movie Trailer Website",
      "dates": "2017",
      "description": "According to Jacques Favreau, the lead front-end",
      "images": ["images/image.gif","images/image.gif"]
    },
    {
      "title": "Multi-User Blog",
      "dates": "2017",
      "description": "A multi user blog",
      "images": ["images/image.gif","images/image.gif"]
    },
    {
      "title": "Tournament results",
      "dates": "2017",
      "description": "A multi user blog",
      "images": ["images/image.gif","images/image.gif"]
    }
  ]
};

  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    for(i in bio.skills){
      var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
      $('#skills').prepend(formattedSkills);
    }
  }
function displayWork(){
for(j in work.jobs){
  $('#workExperience').append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
  var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[j].location);
  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[j].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);
  var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation +
                               formattedDates + formattedDescription;
  $('.work-entry:last').append(formattedEmployerTitle);
}
}

displayWork();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name){
  var s = name.split(" ");
  s[0] = s[0].slice(0,1).toUpperCase() + s[0].slice(1).toLowerCase();
  s[1] = s[1].toUpperCase();
  return s[0] + " " + s[1];
}

$('#main').append(internationalizeButton);

projects.display = function(){
  for(p in projects.projects){
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[p].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
    var formatted = formattedTitle + formattedDates + formattedDescription;
    $('.project-entry:last').append(formatted);
    if(projects.projects[p].images.length > 0){
      for(image in projects.projects[p].images){
        var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[p].images[image]);
        $('.project-entry:last').append(formattedImages);
      }
    }
  }
}
projects.display();

$('#mapDiv').append(googleMap);
