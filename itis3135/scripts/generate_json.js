

function generateJSON() {
    var courseDivs = document.querySelectorAll("#courseList .course");
    var courses = [];

    for (var i = 0; i < courseDivs.length; i++) {
        var course = courseDivs[i];
        courses.push({
            department: course.querySelector(".dept").value,
            number: course.querySelector(".num").value,
            name: course.querySelector(".name").value,
            reason: course.querySelector(".reason").value
        });
    }


    var jsonData = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        preferredName: document.getElementById("nickname").value,
        mascot: document.getElementById("mascotAdj").value + " " + document.getElementById("mascotAnimal").value,
        imageCaption: document.getElementById("caption").value,
        personalStatement: document.getElementById("personalStatement").value,
        personalBackground: document.getElementById("personalBackground").value,
        professionalBackground: document.getElementById("professionalBackground").value,
        academicBackground: document.getElementById("academicBackground").value,
        coursesInProgress: courses,
        funnyFact: document.getElementById("funnyFact").value,
        favoriteQuote: document.getElementById("quote").value,
        quoteAuthor: document.getElementById("quoteAuthor").value
    };

    var formattedJSON = JSON.stringify(jsonData, null, 4);

    document.querySelector("h2").textContent = "Introduction JSON";

    document.getElementById("introForm").outerHTML = `
        <pre><code class="json">${formattedJSON}</code></pre>
    `;
    hljs.highlightAll();
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateJSON").addEventListener("click", generateJSON);
});