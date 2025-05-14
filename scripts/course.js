// JavaScript for Course Home Page

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const courseList = document.getElementById("courseList");
    const creditsDisplay = document.getElementById("credits");

    // Set footer dates
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Responsive nav toggle
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("hidden");
    });

    // Course data
    const courses = [
        { code: "CSE110", name: "Intro to Programming", credits: 3, taken: true },
        { code: "WDD130", name: "Web Fundamentals", credits: 3, taken: true },
        { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, taken: false },
        { code: "CSE210", name: "Programming with Classes", credits: 3, taken: false },
        { code: "WDD231", name: "Front-End Development", credits: 3, taken: true },
    ];

    function renderCourses(filter) {
        const filtered = filter === "all"
            ? courses
            : courses.filter(course => course.code.startsWith(filter));

        courseList.innerHTML = filtered.map(course => `
      <div class="course ${course.taken ? 'taken' : ''}">
        <strong>${course.code}</strong>: ${course.name} (${course.credits} credits)
      </div>
    `).join("");

        const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
        creditsDisplay.textContent = `Total Credits: ${totalCredits}`;
    }

    window.filterCourses = renderCourses;
    renderCourses("all");
});
