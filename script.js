const aboutButton = document.getElementById("myButton");

if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    window.location.href = "abouti.html";
  });
}

window.addEventListener("load", () => {
  const toast = document.getElementById("toast");

  if (!toast) {
    return;
  }

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
});


const fotoButton = document.getElementById("fotoPageButton");

if (fotoButton) {
  fotoButton.addEventListener("click", () => {
    window.location.href = "foto.html";
  });
}

window.addEventListener("load", () => {
  const audio = document.getElementById("pageAudio");
  const playButton = document.getElementById("playAudioButton");

  if (!audio) {
    return;
  }

  const attemptPlay = () => {
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Autoplay may be blocked; user can tap the button.
      });
    }
  };

  if (playButton) {
    playButton.addEventListener("click", () => {
      attemptPlay();
    });
  }
});
