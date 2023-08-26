const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// MODAL OPEN FUNCTION
const openModal = () =>{
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//MODAL CLOSE FUNCTIION
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    
};
