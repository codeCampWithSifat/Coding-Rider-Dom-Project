const milestonesData = JSON.parse(data).data;

function loadMilestones() {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${milestonesData
    .map(function (milstone) {
      return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilestone(this, ${milstone._id})">
                <p>
                  ${milstone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
        ${milstone.modules
          .map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join("")}
      </div>
    </div>`;
    })
    .join("")}`;
}

loadMilestones();
openMilestone();

function openMilestone(milestoneElement, id) {
  const currentPanel = milestoneElement?.parentNode?.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  if (!currentPanel?.classList.contains("show") && shownPanel) {
    shownPanel?.classList.remove("show");
  }

  // first remove previous active class if any [other than the clicked one]
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  // toggle current clicked one
  milestoneElement?.classList.toggle("active");

  currentPanel?.classList.toggle("show");

  showMilestone(id);
}

function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

// listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
  this.style.opacity = "1";
};
