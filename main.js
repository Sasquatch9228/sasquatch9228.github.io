chromeVersion = navigator.userAgent.substring(navigator.userAgent.lastIndexOf("Chrome/"), navigator.userAgent.lastIndexOf(" "));
chromeVersion = chromeVersion.substring(chromeVersion.indexOf("/"), chromeVersion.indexOf(".")).replaceAll("/", "");
if (sessionStorage.getItem("version") == undefined) {
    if (chromeVersion > 121) {
        document.getElementById("version").value = 121;
    } else {
        if (chromeVersion < 102) {
            document.getElementById("version").value = "All";
        } else {
            document.getElementById("version").value = chromeVersion;
        }
    }
} else {
    document.getElementById("version").value = sessionStorage.getItem("version");
}
if (location.search.startsWith("?detail")) {
    showDetails(location.search.slice(8).replaceAll("%20", " "));
} else {
    if (localStorage.getItem("welcome") == undefined) {
        message("<div class='logo'><image height='64px' src='assets/icon.png'></image><div>EXT-REMOVER</div></div><p>EXT-REMOVER contains a collection of exploits discovered by various users to expand the capability of managed Chromebooks, making it easy to find the information you need.<p>Exploit details, code, and styles have been modified for a better user experience.<p><u><b>Disclaimers:</b> This service is not designed to encourage time wasting. Use these only in your free time, and do not let them lead to distraction. Property of your organization should always be returned in its proper condition.</u><button class='continue'>Continue</button>");
    } else {
        document.querySelector('#filterMsg').hidden = true;
    }
}
filterOptions(document.getElementById("version").value);
if (localStorage.getItem("thumbnailHide") == true) {
    thumbnailHide(true);
}
const logoImg = document.querySelector(".logo").querySelector("img");
logoImg.addEventListener("click", startHueLoop);
function startHueLoop() {
    this.style.backgroundColor = "red";
    hue = 0;
    setInterval("logoImg.style.filter = 'hue-rotate(' + hue + 'deg)'; hue += 1;", 10);
    logoImg.removeEventListener("click", startHueLoop);
}
function filterOptions(version) {
    sessionStorage.setItem("version", version);
    if (localStorage.getItem("cloak") !== null && localStorage.getItem("cloak") !== undefined) {
        tabCloak(localStorage.getItem("cloak"));
    } else {
        document.title =  "Exploits - EXT-REMOVER";
    }
    const options = document.querySelectorAll(".optionButton");
    for (let i = 0; i < options.length; i++) {
        optionVersion = options[i].querySelector(".patch").innerText;
        if (version >= optionVersion && version !== "All" || optionVersion == "Hidden") {
            options[i].parentElement.style.display = "none";
        } else {
            options[i].parentElement.style.display = "inline-block";
        }
    }
    /* Old Filter (has some start versions if needed)
    document.getElementById("LTBEEF").hidden = version >= 106;
    document.getElementById("LoMoH").hidden = version >= 111;
    document.getElementById("LTMEAT").hidden = version >= 115;
    document.getElementById("Incognito DNS").hidden = version >= 115 || version < 105;
    document.getElementById("Buypass").hidden = version < 60;
    document.getElementById("Downgrade").hidden = version >= 116;
    document.getElementById("CAUB").hidden = version < 85;
    document.getElementById("Sh1mmer").hidden = version >= 111;
    document.getElementById("Enterprise Enrollment Glitch").hidden = version < 115;
    document.getElementById("E-Halcyon").hidden = version >= 116;
    */
}
function showDetails(id) {
    document.body.style.overflow = "hidden";
    const iframes = document.querySelectorAll("iframe");
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].location = "";
    }
    author = {LTBEEF:"Bypassi#7037, CompactCow#4717, Nebelung#1335", LoMoH:"Ashton Davies", LTMEAT:"Bypassi#7037", LTMEATFlood:"Ashton Davies", LTMEATPrint:"Swordmaster4321", Dextensify:"ading2210", BookmarkletExecutor:"Ashton Davies, 3kh0", Incognito:"NotGamerFromGamerTown", QuickView:"vk6#7391, Bypassi#7037", Buypass:"Bypassi#7037", Chaos:"xlak", ExtensionInstaller:"Aka, but nice", Swamp:"Bypassi#7037", INSECURLY:"Bypassi#7037", Killcurly:"zoroark#4285", Blank3r:"Unknown", Downgrade:"ChromeOS (built-in)", CAUB:"Catakang#0987", Sh1mmer:"Mercury Workshop", Fakemurk:"Mercury Workshop", EnterpriseEnrollmentGlitch:"Brandon421-ops", EHalcyon:"Mercury Workshop", CRXViewer:"Rob Wu", Chrome100:"e9x", Updates:"chros.tech", Changes:"Chromium Gerrit", PolicyPasswordTool:"SimonTheCat#0651, Luphoria", Alphabetic:"xlak"};
    history.pushState(null, null, "?detail=" + id);
    document.title = id + " - " + "Chrome OS Exploits";
    document.getElementById("divHeader").innerHTML = id + "<br><sub>By: " + author[id.replaceAll(" ", "").replaceAll("-", "").replaceAll("[", "").replaceAll("]", "")];
    document.getElementById("detailsContent").innerHTML = document.getElementById(id).innerHTML;
    document.getElementById("detailsContent").querySelector(".title").remove();
    document.getElementById("detailsContent").hidden = false;
    document.getElementById("details").hidden = false;
    document.getElementById("noclick").hidden = false;
    document.getElementById("noclick").style.animationPlayState = "running";
    document.getElementById("details").style.animationPlayState = "running";
    document.getElementById("close").addEventListener("click", close);
}
function message(message) {
    document.body.style.overflow = "hidden";
    document.getElementById("message").innerHTML = message;
    document.getElementById("message").hidden = false;
    document.getElementById("noclick").hidden = false;
    document.getElementById("noclick").style.animationPlayState = "running";
    document.getElementById("message").style.animationPlayState = "running";
    document.querySelector(".continue").addEventListener("click", function() {localStorage.setItem("welcome", "closed"); close();});
}
function settings() {
    document.body.style.overflow = "hidden";
    document.getElementById("divHeader").innerText = "Settings";
    document.getElementById("detailsContent").hidden = true;
    document.getElementById("settingsContent").hidden = false;
    document.getElementById("details").hidden = false;
    document.getElementById("noclick").hidden = false;
    document.getElementById("noclick").style.animationPlayState = "running";
    document.getElementById("details").style.animationPlayState = "running";
    document.getElementById("close").addEventListener("click", close);
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
        filterOptions(document.getElementById("version").value);
        link.href = "assets/icon.png";
    } else {
        document.title = cloak;
        link.href = "assets/" + cloak + ".png";
        localStorage.setItem("cloak", cloak);
    }
}
function thumbnailHide(hide) {
    const thumbnails = document.querySelectorAll(".thumbnail");
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].hidden = hide;
        if (hide == true) {
            thumbnails[i].parentElement.style.height = "100px";
        } else {
            thumbnails[i].parentElement.style.height = thumbnails[i].parentElement.style.maxHeight;
        }
    }
    localStorage.setItem("thumbnailHide", hide);
}
function close() {
    document.getElementById("details").hidden = true;
    document.getElementById("message").hidden = true;
    document.getElementById("noclick").hidden = true;
    const divContent = document.querySelectorAll(".divContent");
    for (let i = 0; i < divContent.length; i++) {
        divContent[i].hidden = true;
    }
    history.pushState(null, null, "?");
    document.body.style.overflow = "visible";
    filterOptions(document.getElementById("version").value);
}
