const languageButton = document.getElementById("language-btn");

const translations = {
    en: {
        title: "My Portfolio",
        aboutTitle: "About Me",
        aboutText: "I am a cybersecurity enthusiast interested in web security.",
        skillsTitle: "My Skills",
        skillsText: "Networking, Linux, SIEM, and web security.",
        contactTitle: "Contact Me",
        contactText: "Feel free to get in touch with me.",
        button: "العربية"
    },
    ar: {
        title: "معرض أعمالي",
        aboutTitle: "من أنا",
        aboutText: "أنا مهتم بالأمن السيبراني وأمن تطبيقات الويب.",
        skillsTitle: "مهاراتي",
        skillsText: "الشبكات، لينكس، أنظمة SIEM، وأمن الويب.",
        contactTitle: "تواصل معي",
        contactText: "يسعدني تواصلك معي.",
        button: "English"
    }
};

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    const text = translations[currentLanguage];

    document.getElementById("title").textContent = text.title;
    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;
    document.getElementById("skills-title").textContent = text.skillsTitle;
    document.getElementById("skills-text").textContent = text.skillsText;
    document.getElementById("contact-title").textContent = text.contactTitle;
    document.getElementById("contact-text").textContent = text.contactText;

    languageButton.textContent = text.button;

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
});
