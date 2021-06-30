{
    const welcome = () => {
        console.log("Cześć! Fajnie, że tu zajrzałeś!")   
       }
    welcome();   

    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");


    button.addEventListener("click", () => {
        body.classList.toggle("body--dark");

        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    });
}
