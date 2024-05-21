window.addEventListener("load", () => {
    let profileImageDark = "./assets/img/avatar.png", profileImageLight = "./assets/img/avatar-light.jpg";
    let input = document.getElementById("change-theme");
    let profileImage = document.querySelector("#profile-image img");
    if (input) {
        input.addEventListener("input", (e) => {
            if (e.target.checked) {
                document.body.dataset.theme = "light";
                profileImage.src = profileImageLight;
            } else {
                document.body.dataset.theme = "dark";
                profileImage.src = profileImageDark;
            }
        });
    }
});