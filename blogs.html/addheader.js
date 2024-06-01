document.write("<header><div class='logo'><image id='icon' height='32px' src='assets/icon.png' onerror='this.remove();'></image> &nbsp extension remover</div>&nbsp&nbsp&nbsp&nbsp&nbsp<div class='tabs'><a class='tab' role='tab' href='index.html'><div id='tab-exploits'>Exploits</div></a><a class='tab' role='tab' href='tools.html'><div id='tab-tools'>Tools</div></a><a class='tab' role='tab' href='blogs.html'><div id='tab-blogs'>Blogs</div></a><a class='tab' role='tab' href='https://github.com/3kh0/ext-remover/discussions'><div>Discussions</div></a><a class='tab' role='tab' href='about.html'><div id='tab-about'>About</div></a></div></header>");
const path = location.pathname.toLowerCase();
hrefStart = "";
if (path.includes("/detail/") || path.includes("/blog/")) {
    hrefStart = "../../";
}
if (path.includes("/blog")) {
    var tab = document.getElementById("tab-blogs");
} else {
    if (path.includes("/about")) {
        var tab = document.getElementById("tab-about");
    } else {
        var tab = document.getElementById("tab-exploits");
    }
}
if (path.includes("/tool")) {
    var tab = document.getElementById("tab-tools");
    if (path.includes("/tool/")) {
        hrefStart = "../../../";
        if (path.includes("/archive/")) {
            hrefStart += "../../";
        }
    }
}
tab.classList.add("tab-current");
document.getElementById("icon").src = hrefStart + "assets/icon.png";
document.getElementById("tab-exploits").parentElement.href = hrefStart + "index.html";
document.getElementById("tab-tools").parentElement.href = hrefStart + "tools.html";
document.getElementById("tab-blogs").parentElement.href = hrefStart + "blogs.html";
document.getElementById("tab-about").parentElement.href = hrefStart + "about.html";
var root = document.querySelector(":root");
var rootstyle = getComputedStyle(root);
// To get a root style:  rootstyle.getPropertyValue('--backgroundColor')
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        document.querySelector("header").style.backgroundColor = "var(--headerColor)";
        document.querySelector("header").style.backdropFilter = "blur(5px)";
        document.querySelector("header").style.boxShadow = "0 1px 10px 0 var(--backgroundColor)";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.backdropFilter = "none";
        document.querySelector("header").style.boxShadow = "none";
    }
});
if (localStorage.getItem("cloak") !== null && localStorage.getItem("cloak") !== undefined) {
    tabCloak(localStorage.getItem("cloak"));
}
function tabCloak(cloak) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    if (cloak == "none") {
        localStorage.removeItem("cloak");
        link.href = "../../assets/icon.png";
    } else {
        document.title = cloak;
        link.href = "../../assets/" + cloak + ".png";
        localStorage.setItem("cloak", cloak);
    }
}
