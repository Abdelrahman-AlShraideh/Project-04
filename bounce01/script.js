const profilePhoto = document.getElementById("profile-photo");
const switchPhotoButton = document.getElementById("switch-photo-btn");

let isFirstPhoto = true;

switchPhotoButton.addEventListener("click", function () {
    profilePhoto.style.opacity = 0;

    setTimeout(function () {
        if (isFirstPhoto) {
            profilePhoto.src = "assets/profile2.jpg";
            profilePhoto.alt = "Profile photo 2";
        } else {
            profilePhoto.src = "assets/profile1.jpg";
            profilePhoto.alt = "Profile photo 1";
        }

        isFirstPhoto = !isFirstPhoto;
        profilePhoto.style.opacity = 1;
    }, 400);
});
