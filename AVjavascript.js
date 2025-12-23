// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// PROJECT DATA
var projects = [
  {
    title: "Project 1: UCSD Holidays Website",
    description: "A basic multi-section webpage that lists all of UCSD's holidays.",
    link: "https://gdouzet-collab.github.io/Portfolio-HolidaysWebsite/",
    image: "images/project 1 preview.png"
  },
  {
    title: "Project 2: HTML Terms & Definitions Website",
    description: "A basic multi-section webpage that lists HTML terms and defines them.",
    link: "https://gdouzet-collab.github.io/Portfolio-HTMLDefinitionsWebsite/",
    image: "images/project 2 preview.png"
  },
  {
    title: "Project 3: Recipe Website",
    description: "Built a basic multi-section webpage for my favorite recipe.",
    link: "https://gdouzet-collab.github.io/Portfolio-RecipeWebsite/",
    image: "images/project 3 preview.png"
  },
  {
    title: "Project 4: Schedule Website",
    description: "Built a basic multi-section webpage to display my schedule and some HTML terms and definitions.",
    link: "https://gdouzet-collab.github.io/Portfolio-ScheduleWebsite/",
    image: "images/project 4 preview.png"
  },
  {
    title: "Project 5: Study Buddy Website",
    description: "Built a webpage to advertise a Study Buddy service.",
    link: "https://gdouzet-collab.github.io/Portfolio-StudyBuddyWebsite/",
    image: "images/project 5 preview.png"
  },
  {
    title: "Project 6: Wedding Planner Website",
    description: "Used JavaScript to create a table seating simulation for a Wedding Planner.",
    link: "https://gdouzet-collab.github.io/Portfolio-WeddingPlanner/",
    image: "images/project 6 preview.png"
  },
  {
    title: "Project 7: Dice Game Website",
    description: "A webpage for a dice rolling game.",
    link: "https://gdouzet-collab.github.io/Portfolio-DiceGame/",
    image: "images/project 7 preview.png"
  }
];


// DISPLAY PROJECTS
function displayProjects(projectArray) 
{
  var projectList = document.getElementById("projectList");
  projectList.innerHTML = "";

  for (var i = 0; i < projectArray.length; i++) 
  {
    var projectDiv = document.createElement("div");
    projectDiv.className = "project";

    var title = document.createElement("h3");
    title.textContent = projectArray[i].title;

    var description = document.createElement("p");
    description.textContent = projectArray[i].description;

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);

    if (projectArray[i].link) 
    {
      var link = document.createElement("a");
      link.href = projectArray[i].link;
      link.textContent = "View Project";
      link.target = "_blank";
      link.className = "project-link";
      projectDiv.appendChild(link);
    }

    if (projectArray[i].image) 
    {
      var img = document.createElement("img");
      img.src = projectArray[i].image;
      img.alt = projectArray[i].title + " preview";
      img.className = "project-preview";
      projectDiv.appendChild(img);
    }

    projectList.appendChild(projectDiv);
  }
}


// SEARCH FUNCTIONALITY
document.getElementById("searchInput").addEventListener("input", function () 
{
  var searchValue = this.value.toLowerCase();
  var filteredProjects = [];

  for (var i = 0; i < projects.length; i++) 
  {
    if (projects[i].title.toLowerCase().includes(searchValue)) 
    {
      filteredProjects.push(projects[i]);
    }
  }

  displayProjects(filteredProjects);
});

// INITIAL LOAD
displayProjects(projects);
