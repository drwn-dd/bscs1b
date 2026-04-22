function showSection(id) {
    document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");

    updateDashboard();

    const back = document.getElementById("backWrapper");
    if (back) {
        back.classList.toggle("hidden", id === "home");
    }
}

function toggleMenu(el) {
    el.classList.toggle("active");
    document.getElementById("menu").classList.toggle("hidden");
}

function closeMenu() {
    document.querySelector(".burger").classList.remove("active");
    document.getElementById("menu").classList.add("hidden");
}

function updateDashboard() {
    document.getElementById("quizCount").innerText = document.querySelectorAll("#quiz .box").length;
    document.getElementById("labCount").innerText = document.querySelectorAll("#laboratories .box").length;
    document.getElementById("examCount").innerText = document.querySelectorAll("#exam .box").length;

    let total =
        parseInt(document.getElementById("quizCount").innerText) +
        parseInt(document.getElementById("labCount").innerText) +
        parseInt(document.getElementById("examCount").innerText);

    document.getElementById("totalCount").innerText = total;
}

function openImage(img) {
    window.open(img.src, "_blank");
}

showSection("home");
