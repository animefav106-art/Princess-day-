function startStory() {
    const name = document.getElementById("princessName").value.trim();
    if (name === "") return alert("Please enter your name, princess.");

    // Hide letter
    document.getElementById("letter-screen").style.display = "none";

    // Show book
    document.getElementById("book-screen").style.display = "flex";

    // After book finishes opening → show mirror scene
    setTimeout(() => {
        document.getElementById("book-screen").style.display = "none";
        document.getElementById("mirror-screen").style.display = "block";

        const mirrorText = document.getElementById("mirror-text");

        if (name.toLowerCase() === "falak") {
            mirrorText.innerHTML =
                "Oh Falak... you are the prettiest of all. Happy Princess Day ✨";

            document.getElementById("music-falak").play();
        } else {
            mirrorText.innerHTML =
                "There are many beautiful princesses like you,<br>but I am sorry dear...<br>you are not the prettiest one.";

            document.getElementById("music-other").play();
        }

    }, 5000); // Book animation time
}
