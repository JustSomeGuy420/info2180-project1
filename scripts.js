/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const textbox = document.getElementById("email");
    const result = document.getElementsByClassName("message")[0];

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = textbox.value.trim();

        if (email === "" ) {
            result.textContent = "Please enter a valid email address."
        } else {
            result.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`
        }    
    })
})