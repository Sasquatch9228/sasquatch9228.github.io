// Credit to ading2210 (vk6#7391) for original extension detection in Dextensify. Adapted for LTMEAT Flood by Ashton Davies.

let extensions = {
    "lightspeedfilteragent": {
        name: "Lightspeed Filter Agent",
        url: "chrome-extension://adkcpkpghahmbopkjchobieckeoaoeem/icon-128.png"
    },
    "lightspeedclassroom": {
        name: "Lightspeed Classroom",
        url: "chrome-extension://kkbmdgjggcdajckdlbngdjonpchpaiea/assets/icon-classroom-128.png"
    },
    "securly_external": {
        name: "Securly (external)",
        url: "chrome-extension://joflmkccibkooplaeoinecjbmdebglab/fonts/Metropolis.css"
    },
    "securly_webstore": {
        name: "Securly (webstore)",
        url: "chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/fonts/Metropolis.css"
    },
    "goguardian": {
        name: "GoGuardian",
        url: "chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/youtube_injection.js"
    },
    "lanschool": {
        name: "LanSchool",
        url: "chrome-extension://baleiojnjpgeojohhhfbichcodgljmnj/blocked.html"
    },
    "linewize": {
        name: "Linewize",
        url: "chrome-extension://ddfbkhpmcdbciejenfcolaaiebnjcbfc/background/assets/pages/default-blocked.html"
    },
    "blocksi": {
        name: "Blocksi",
        url: "chrome-extension://ghlpmldmjjhmdgmneoaibbegkjjbonbk/pages/blockPage.html"
    },
    "fortiguard": {
        name: "FortiGuard",
        url: "chrome-extension://igbgpehnbmhgdgjbhkkpedommgmfbeao/youtube_injection.js"
    },
    "cisco": {
        name: "Cisco Umbrella",
        url: "chrome-extension://jcdhmojfecjfmbdpchihbeilohgnbdci/blocked.html"
    },
    "contentkeeper": {
        name: "ContentKeeper",
        url: "chrome-extension://jdogphakondfdmcanpapfahkdomaicfa/img/ckauth19x.png"
    },
    "contentkeeperg3": {
        name: "CK-Authenticator G3",
        url: "chrome-extension://odoanpnonilogofggaohhkdkdgbhdljp/img/ckauth19x.png"
    },
    "securlyclassroom": {
        name: "Securly Classroom",
        url: "chrome-extension://jfbecfmiegcjddenjhlbhlikcbfmnafd/notfound.html"
    },
    "hapara": {
        name: "Hapara Highlights (webstore)",
        url: "chrome-extension://kbohafcopfpigkjdimdcdgenlhkmhbnc/blocked.html"
    },
    "hapara-new-id": {
        name: "Hapara Highlights (external)",
        url: "chrome-extension://aceopacgaepdcelohobicpffbbejnfac/blocked.html"
    },
    "iBoss": {
        name: "iBoss",
        url: "chrome-extension://kmffehbidlalibfeklaefnckpidbodff/restricted.html"
    },
    "interclass": {
        name: "InterCLASS Filtering Service",
        url: "chrome-extension://jbddgjglgkkneonnineaohdhabjbgopi/pages/message-page.html"
    },
    "intersafe": {
        name: "InterSafe GatewayConnection Agent",
        url: "chrome-extension://ecjoghccnjlodjlmkgmnbnkdcbnjgden/resources/options.js"
    },
    "gopher_buddy": {
        name: "Gopher Buddy",
        url: "chrome-extension://cgbbbjmgdpnifijconhamggjehlamcif/images/gopher-buddy_128x128_color.png"
    },
    "lanschool_helper": {
        name: "LanSchool Web Helper",
        url: "chrome-extension://honjcnefekfnompampcpmcdadibmjhlk/blocked.html"
    },
    "imtlazarus": {
        name: "IMTLazarus",
        url: "chrome-extension://cgigopjakkeclhggchgnhmpmhghcbnaf/models/model.json"
    },
    "impero_backdrop": {
        name: "Impero Backdrop",
        url: "chrome-extension://jjpmjccpemllnmgiaojaocgnakpmfgjg/licenses.html"
    },
    "mobile_guardian": {
        name: "Mobile Guardian",
        url: "chrome-extension://fgmafhdohjkdhfaacgbgclmfgkgokgmb/block.html"
    }
};
async function check_url(a) {
    let b = new AbortController();
    let c = setTimeout(() => b.abort(), 500);
    try {
        await fetch(a, {
            signal: b.signal
        });
        return true;
    } catch (d) {
        let e = d + "";
        return e.includes("AbortError");
    }
}
async function detect_extensions() {
    let detected = new Array;
    for (let b of Object.values(extensions)) {
        let exists = await check_url(b.url);
        if (exists) {
            detected.push(b);
        }
    }
    ;
    return detected;
}
async function loadExtensionButtons() {
    let installed = await detect_extensions();
    let buttonsContainer = document.getElementById("buttons_container");
    if (!window.chrome) {
        buttonsContainer.innerHTML = `<p style="color: red;"><b>This is not a Chromium-based browser.</b>`;
        return;
    } else if (installed.length === 0) {
        buttonsContainer.innerHTML = "<p style='color: red;'>No supported extensions detected.<p style='color: yellow;'>You can paste the extension's ID manually from its details page in <u>chrome://extensions</u>."
    } else {
        buttonsContainer.innerHTML = "";
    }
    ;
    for (let c of installed) {
        let extBtn = document.createElement("button");
        extBtn.classList.add("ltmeatfloodBtn");
        extBtn.innerText = `${c.name}`;
        extBtn.onclick = () => {
            handleButton(c);
            let extBtns = document.querySelectorAll(".ltmeatfloodBtn");
            for (let i = 0; i < installed.length; i++) {
                extBtns[i].style.borderColor = "";
                extBtns[i].style.filter = "";
            }
            extBtn.style.borderColor = "white";
            extBtn.style.filter = "brightness(1.05)";
        };
        buttonsContainer.append(extBtn);
    }
}
function handleButton(extension) {
    document.getElementById("extensionId").value = extension.url.slice(19, 51);
}
window.onload = loadExtensionButtons();
