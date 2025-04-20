window.addEventListener("load", function () {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const pic = localStorage.getItem("userPic");

  if (!name || !email) {
    window.location.href = "index.html";
  }

  document.getElementById("userName").innerText = name;
  document.getElementById("userEmail").innerText = email;
  document.getElementById("userPic").src = pic;

  const findBtn = document.getElementById("findBtn");
  if (findBtn) {
    findBtn.addEventListener("click", () => {
      alert("Redirecting to Find Teams...");
      window.location.href = "find-teams.html";
    });
  } else {
    console.log("green-btn not found!");
  }
});

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
