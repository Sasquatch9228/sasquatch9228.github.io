function linkIP() {
    connect = open("https://linkip.adguard-dns.com/linkip/b22da83d/7ALdhr5HpGcJBbWaLr0PCkX3jxMbMdM1Br89HlCi5Pl", "connect", "width = 1px, height = 1px");
    document.getElementById("details").querySelector(".bookmarkletexecutorBtn").innerText = "Close when loaded...";
    window.addEventListener("focus", function() {
        document.getElementById("details").querySelector(".bookmarkletexecutorBtn").innerText = "Link IP address again";
        connect.close();
    });
}