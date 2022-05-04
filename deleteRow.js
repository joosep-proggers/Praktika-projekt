document.addEventListener("click", (e) => {
    if(e.target.id == "deleteRowButton"){
        e.target.parentElement.remove()
    }
})