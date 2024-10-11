const navbar = document.querySelector('.nav-fixed');

window.onscroll = function() {func1()};

function func1() {
    if (document.body.scrollTop > 50) {
        document.getElementById("nav").className = "nav-active";
    } else {
        document.getElementById("nav").className = "nav-fixed";
    }
}

 