// AVISOS
const avisos = [
  "📌 Ensaio/organização da formatura: confirmar data no grupo.",
  "📷 Mandar fotos pra galeria do site.",
  "🎓 Último ano: vamo fazer história!"
];

document.getElementById("lista-avisos").innerHTML =
  avisos.map(a => `<li>${a}</li>`).join("");

document.getElementById("ano").textContent = new Date().getFullYear();

// MÚSICA (precisa de clique)
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let playing = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      music.volume = 0.25;
      await music.play();
      playing = true;
      musicBtn.textContent = "🔇 Pausar";
    } else {
      music.pause();
      playing = false;
      musicBtn.textContent = "🎵 Música";
    }
  } catch (e) {
    alert("O navegador bloqueou autoplay. Clique de novo pra tocar.");
  }
});

// MODAL DA GALERIA
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll("[data-full]").forEach(btn => {
  btn.addEventListener("click", () => {
    modalImg.src = btn.getAttribute("data-full");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});