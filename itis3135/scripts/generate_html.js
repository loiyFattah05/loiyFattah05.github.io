function generateHTML() {
    var courseDivs = document.querySelectorAll("#courseList .course");
    var courseHTML = "";

    for (var i = 0; i < courseDivs.length; i++) {
        var course = courseDivs[i];
        courseHTML +=
`        <li><strong>${course.querySelector(".dept").value}-${course.querySelector(".num").value}:</strong> ${course.querySelector(".name").value} — ${course.querySelector(".reason").value}</li>
`;
    }

    var htmlString =
`
    <h2> Introduction</h2>
    <h2>${document.getElementById("firstName").value} ${document.getElementById("middleName").value} “${document.getElementById("nickname").value}” ${document.getElementById("lastName").value} | ${document.getElementById("mascotAdj").value} ${document.getElementById("mascotAnimal").value} </h2>

    <figure>
        <img src="images/Introduction.jpg" alt="${document.getElementById("caption").value}" width="250">
        <figcaption>${document.getElementById("caption").value}</figcaption>
    </figure>

    <p><strong>Personal Statement:</strong> ${document.getElementById("personalStatement").value}</p>

    <p><strong>Personal Background:</strong> ${document.getElementById("personalBackground").value}</p>

    <p><strong>Professional Background:</strong> ${document.getElementById("professionalBackground").value}</p>

    <p><strong>Academic Background:</strong> ${document.getElementById("academicBackground").value}</p>

    <p><strong>Courses I’m Taking & Why:</strong></p>
    <ol>
${courseHTML}    </ol>

    <p><strong>Funny / Interesting Fact:</strong> ${document.getElementById("funnyFact").value}</p>

    <p class="quote">“${document.getElementById("quote").value}”<br>
    — <em>${document.getElementById("quoteAuthor").value}</em></p>
`;

    document.querySelector("h2").textContent = "Introduction HTML";

    document.getElementById("introForm").outerHTML =
        '<pre><code class="html">' +
        htmlString.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
        '</code></pre>';

    hljs.highlightAll();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateHTML").addEventListener("click", generateHTML);
});