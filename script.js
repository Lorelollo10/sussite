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
    try {
      localStorage.setItem("playFotoAudio", "1");
    } catch {
      // Ignore storage failures and still navigate.
    }

    window.location.href = "foto.html";
  });
}

window.addEventListener("load", () => {
  const audio = document.getElementById("pageAudio");
  const playButton = document.getElementById("playAudioButton");

  if (!audio) {
    return;
  }

  let shouldPlay = false;

  try {
    shouldPlay = localStorage.getItem("playFotoAudio") === "1";
    localStorage.removeItem("playFotoAudio");
  } catch {
    return;
  }

  if (!shouldPlay) {
    return;
  }

  const attemptPlay = () => {
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        if (playButton) {
          playButton.hidden = false;
        }
      });
    }
  };

  if (playButton) {
    playButton.addEventListener("click", () => {
      playButton.hidden = true;
      attemptPlay();
    });
  }

  attemptPlay();
});
