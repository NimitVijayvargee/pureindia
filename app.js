function switch_theme(){
    html = document.documentElement;
    current_theme = html.getAttribute('data-bs-theme');
    if(current_theme === "dark"){
        html.setAttribute("data-bs-theme","light")
    }else{
        html.setAttribute("data-bs-theme","dark")
    }
}