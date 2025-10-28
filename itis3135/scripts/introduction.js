// --------------------------------------
// Function to display introduction result
// --------------------------------------
function displayIntro() {
    const first = document.getElementById("firstName").value;
    const middle = document.getElementById("middleName").value;
    const last = document.getElementById("lastName").value;
    const nickname = document.getElementById("nickname").value;
    const adj = document.getElementById("mascotAdj").value;
    const animal = document.getElementById("mascotAnimal").value;
    const caption = document.getElementById("caption").value;
    const statement = document.getElementById("personalStatement").value;
    const personal = document.getElementById("personalBackground").value;
    const prof = document.getElementById("professionalBackground").value;
    const academic = document.getElementById("academicBackground").value;
    const funny = document.getElementById("funnyFact").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    // Collect all courses
    const courseDivs = Array.from(document.querySelectorAll(".course"));
    let courseHTML = "";
    courseDivs.forEach((c) => {
        const d = c.querySelector(".dept").value;
        const n = c.querySelector(".num").value;
        const name = c.querySelector(".name").value;
        const reason = c.querySelector(".reason").value;
        courseHTML += `<li><strong>${d}-${n}:</strong> ${name} — ${reason}</li>`;
    });

    // Use uploaded image or default
    const fileInput = document.getElementById("picture");
    let imgSrc = "images/Introduction.jpg";
    if (fileInput.files && fileInput.files[0]) {
        imgSrc = URL.createObjectURL(fileInput.files[0]);
    }

    // Replace form with intro content
    document.getElementById("main").innerHTML = `
    <h2>Introduction Form</h2>
    <h2>${first} ${middle ? middle + " " : ""}"${nickname}" ${last} | ${adj} ${animal}</h2>
      <figure>
        <img src="${imgSrc}" alt="Photo of ${first}" width="250">
        <figcaption>${caption}</figcaption>
      </figure>
      <p><strong>Personal Statement:</strong> ${statement}</p>
      <p><strong>Personal Background:</strong> ${personal}</p>
      <p><strong>Professional Background:</strong> ${prof}</p>
      <p><strong>Academic Background:</strong> ${academic}</p>
      <p><strong>Courses I’m Taking & Why:</strong></p>
      <ol>${courseHTML}</ol>
      <p><strong>Funny / Interesting Fact:</strong> ${funny}</p>
      <p class="quote">“${quote}”<br>— <em>${quoteAuthor}</em></p>
      <button onclick="location.reload()">Reset Form</button>
    `;
}

// --------------------------------------
// Event Listeners
// --------------------------------------
const form = document.getElementById("introForm");

// Prevent form reload
form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayIntro();
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", () => {
    form.reset();
    Array.from(form.querySelectorAll("input, textarea")).forEach((el) => (el.value = ""));
    document.getElementById("previewImage").src = "images/Introduction.jpg"; // reset preview
});

// Add course
document.getElementById("addCourse").addEventListener("click", () => {
    const courseList = document.getElementById("courseList");
    const newCourse = document.createElement("div");
    newCourse.classList.add("course");
    newCourse.innerHTML = `
      <input type="text" placeholder="Department" class="dept">
      <input type="text" placeholder="Number" class="num">
      <input type="text" placeholder="Name" class="name">
      <input type="text" placeholder="Reason" class="reason">
      <button type="button" class="deleteCourse">❌</button>
    `;
    courseList.appendChild(newCourse);
});
// Delete course
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteCourse")) {
        e.target.parentElement.remove();
    }
});

// --------------------------------------
// Live Image Preview (Default + Upload)
// --------------------------------------
const fileInput = document.getElementById("picture");
const previewImage = document.getElementById("previewImage");

fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files[0]) {
        previewImage.src = URL.createObjectURL(fileInput.files[0]);
    } else {
        previewImage.src = "images/Introduction.jpg"; // fallback default
    }
});