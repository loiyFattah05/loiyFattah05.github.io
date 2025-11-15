/* ============================= */
/* MEET THE BOARD – JS HOVER LOGIC */
/* ============================= */

function initBoardHover() {

  // Helper must be defined BEFORE it is used (linter requirement)
  function closeAllMemberInfo() {
    document.querySelectorAll(".member-info").forEach((info) => {
      info.classList.remove("show-info");
    });
  }

  const boardMembers = document.querySelectorAll(".board-member");
  if (!boardMembers.length) return; // Not on board page

  boardMembers.forEach((member) => {
    const photo = member.querySelector(".member-photo");
    const info = member.querySelector(".member-info");

    if (!photo || !info) return;

    // Show info when hovering picture
    photo.addEventListener("mouseenter", () => {
      closeAllMemberInfo();
      info.classList.add("show-info");
    });

    // Hide info on mouse leave
    photo.addEventListener("mouseleave", () => {
      info.classList.remove("show-info");
    });

    // Optional: hide when leaving the whole card
    member.addEventListener("mouseleave", () => {
      info.classList.remove("show-info");
    });
  });
}

/* ============================= */
/* EVENTS PAGE – MODAL SYSTEM */
/* ============================= */

function initEventModal() {

  const modal = document.querySelector("#event-modal");
  if (!modal) return; // Not on events page

  const modalBody = modal.querySelector(".modal-body");
  const modalClose = modal.querySelector(".close");
  const eventCards = document.querySelectorAll(".event-card");

  if (!modalBody || !modalClose || !eventCards.length) return;

  eventCards.forEach((card) => {
    const poster = card.querySelector(".poster-container");
    const info = card.querySelector(".event-info");
    const titleElement = card.querySelector(".event-title");
    const title = titleElement ? titleElement.innerText : "Event";

    if (!poster || !info) return;

    poster.addEventListener("click", () => {
      // Fill modal with event info
      modalBody.innerHTML = `
        <h2>${title}</h2>
        ${info.innerHTML}
      `;

      modal.classList.add("visible");
    });
  });

  // Close modal on X button
  modalClose.addEventListener("click", () => {
    modal.classList.remove("visible");
  });

  // Close modal when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("visible");
    }
  });
}

/* ============================= */
/* INIT ON PAGE LOAD */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {
  initBoardHover();
  initEventModal();
});