/*--------------------[ Get skills function ]-------------------*/
async function getSkills(url) {
    try {
        let res = await fetch(url);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

async function renderSkills(stack, mastered = 0) {
    let skills = await getSkills("../../api/skills.json");
    let html = "";
    let htmlSegment = "";
    for (let i = 0; i < skills.length; i++) {
        let oneSkill = skills[i];
        htmlSegment = "";
        if (oneSkill.mastered == mastered) {
            htmlSegment = `
                    <div class="single-skill" id="${oneSkill.id}">
                        <span class="icon">
                            <i class="${oneSkill.iconClass}"></i>
                        </span>
                        <span class="label">
                            ${oneSkill.label}
                        </span>
                    </div> `;
            html += htmlSegment;
            continue;
        }
        if (oneSkill.stack == stack) {
            htmlSegment = `
                    <div class="single-skill" id="${oneSkill.id}">
                        <span class="icon">
                            <i class="${oneSkill.iconClass}"></i>
                        </span>
                        <span class="label">
                            ${oneSkill.label}
                        </span>
                    </div> `;
            html += htmlSegment;
            continue;
        }
        html += htmlSegment;

    } // fin for
    document.getElementById("skill-menu").innerHTML = html;
    document.querySelector(".details").innerHTML = " &larr; You can explore the details of each skill click on it...";
}
let removeClassFromSet = (selector, targetClass) => {
    if (document.querySelectorAll(selector).length > 1)
        document.querySelectorAll(selector).forEach(tmpCollection => {
            tmpCollection.classList.remove(targetClass);
        });
    else
        document.querySelector(selector).classList.remove(targetClass);
};
document.querySelectorAll(".guide-stack").forEach(oneGuidStack => {
    oneGuidStack.addEventListener("click", (e) => {
        let id = e.target.id;
        let stack = "";
        let mastered = 0;
        if (id == "back-end")
            stack = "back";
        if (id == "front-end")
            stack = "front";
        if (id == "mastered") {
            mastered = 1;
            stack = "";
        }
        removeClassFromSet(".guide-stack", "guide-stack-selected");
        document.getElementById(id).classList.add("guide-stack-selected");
        renderSkills(stack, mastered);
    });
});
document.querySelectorAll(".navigation").forEach(navigation => {
    navigation.addEventListener("click", (e) => {
        removeClassFromSet(".navigation", "selected-about-options");
        e.target.classList.add("selected-about-options");
        if (e.target.id == "nav-about") {
            document.getElementById("about").style.display = "block";
            document.getElementById("skills").style.display = "none";
        }
        if (e.target.id == "nav-skills") {
            document.getElementById("about").style.display = "none";
            document.getElementById("skills").style.display = "block";
        }
    });
});