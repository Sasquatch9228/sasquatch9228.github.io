let sr_enabled = null;
sru_state_container = document.getElementById("sru-state");
checkStatus = setInterval(
    function() {
        document.getElementById("sru_indicator").src = document.getElementById("sru_indicator").src;
        if (sr_enabled == true) {
            if (document.querySelector("html").classList.contains("dji-sru-active")) {
                document.getElementById("srunInject").hidden = false;
                sru_state_container.querySelector("span").innerHTML = "Snap&Read is active.";
                sru_state_container.style.color = "limegreen";
                sru_state_container.querySelector("img").style.filter = "none";
            } else {
                document.getElementById("srunInject").hidden = true;
                sru_state_container.querySelector("span").innerHTML = "Snap&Read is not active.<br><text style='color: yellow;'>Activate it in the extension popup.</text>";
                sru_state_container.style.color = "red";
                sru_state_container.querySelector("img").style.filter = "grayscale()";
            }
        } else {
            document.getElementById('sru-state').innerHTML = "Snap&Read is not enabled in this browser. &nbsp <button class='nocolor page-btn' onclick='location.reload();'></button>";
            clearInterval(checkStatus);
        }
    }
, 100);
async function jsPanelHandler() {
    container = document.querySelector("dji-sru#__dji_sru_main_container").shadowRoot;
    panel = container.getElementById("__dji_sru_main_container_iframe").contentWindow.document;
    showPanel();
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line1 > div.dji-sru-tb-button.dji-sru-dialog-close > i").click();
    panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div.dji-sru-page.dji-sru-page-current > div > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line1 > div.dji-sru-tb-button.dji-sru-back-to-parent-folder-page > i").click();
    if (panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div > div > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div.dji-sru-folder-page-info").innerText == "Home") {
        panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div > div > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div.dji-page-folder-new.dji-outline").click();
        panel.querySelector("div.dji-sru-outline-topic-content").innerText = "Bookmarklets";
        panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-clear-style > div > div.dji-sru-outline-title-in-toolbar").innerText = "Snap&Run";
        panel.querySelector("div.dji-page-folder-new.dji-outline-new-source").click();
        panel.querySelector("div.dji-sru-tab-item[dji-item='dji-sru-outline-source-webpage']").click();
        addGUI();
        window.addEventListener("focus", addGUI);
    } else {
        panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div > div > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div.dji-sru-folder-page-info").innerText = "Home";
        snaprun_enabled = false;
    }
}
function showPanel() {
    panel.querySelector("html.dji-sru-outline-active").classList.add("dji-sru-outline-active");
    panel.querySelector("html.dji-sru-outline-active").setAttribute("dji-sru-outline-active", "true");
}
function addGUI() {
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div > div.dji-sru-tab-item.dji-selected").innerText = "BOOKMARKLET";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div > div:nth-child(1)").style.display = "none";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div > div:nth-child(3)").style.display = "none";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div > div.dji-sru-tab-item-more").style.display = "none";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div.dji-sru-form-line.dji-sru-page-source-author-line[dji-template-id='dji-sru-template-page-source-author-line']").remove();
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(4)").remove();
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div.dji-sru-form-line.dji-sru-3").style.display = "none";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(2)").style.display = "none";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(1) > div > div").innerText = "Bookmarklet Name";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(1) > div > input").placeholder = "My Bookmarklet";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(4) > div > div").innerText = "Bookmarklet Data";
    jsArea = panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(4) > div > input");
    jsArea.title = "You can drag or paste from your bookmarks.";
    jsArea.placeholder = "javascript:";
    jsArea.addEventListener("focus", function() {this.value = decodeURI(this.value);});
    jsArea.addEventListener("focusout", function() {this.value = encodeURI(this.value);});
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible").innerHTML += "The bookmarklet is automatically encoded as a URI.";
    panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line1 > div.dji-sru-toolbar-group.dji-flex.dji-end > div").addEventListener("click",
        function() {
            panel.querySelector("div.dji-sru-outline-topic-content").innerText = panel.querySelector("#dji-sru-outline-source-dlg > div.dji-sru-modal-dialog.dji-fit-to-parent > div.dji-sru-page-content > div.dji-tab-item-view.dji-source-view.dji-visible > div > div:nth-child(1) > div > input").value;
            panel.querySelector("div.dji-sru-outline-topic-content").click();
            panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div.dji-sru-page.dji-sru-page-current > div > div.dji-sru-page-toolbar > div.dji-sru-page-toolbar-line2 > div > div:nth-child(2)").remove();
            var mousedown = new MouseEvent("mousedown", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            setTimeout(
                function() {
                    panel.querySelector("div.dji-sru-outline-topic-bullet").dispatchEvent(mousedown);
                    panel.getElementById("__dji_sru_linkButton").click();
                    panel.querySelector(".dji-sru-outline-source").classList.add("dji-selected");
                    setTimeout(
                        function() {
                            panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div.dji-sru-page.dji-sru-page-current > div > div.dji-sru-page-content.dji-sru-outline-sources > div > div.dji-sru-check-box").click();
                            panel.querySelector("#__dji_sru_main_container_content > div.dji-sru-pagination-container > div.dji-sru-pagination-container-viewport > div.dji-sru-page.dji-sru-page-current > div > div.dji-sru-page-toolbar > div > div.dji-sru-tb-button.dji-sru-back-to-parent-folder-page.dji-sru-link-to-source").click();
                        }
                    , 200);
                }
            , 100);
        }
    );
    snaprun_enabled = true;
}