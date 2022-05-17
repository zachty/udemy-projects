"use strict";

//classes to be used from html file
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//function to open modal for event listeners
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//function to close modal for event listeners
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

//what happens when a modal is clicked
for (let button of btnsOpenModal) button.addEventListener("click", openModal);

//clicking x button or outside modal box closes the modal
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//click esc key event
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
