//	This script has been modified by Ashton Davies for integration and adjustment.

var dedns="167.86.91.171";
var nydns="66.94.105.229";
var idkdns="213.109.163.210";
var lastdns="92.60.37.102";
document.getElementById("ip1").value=dedns;
document.getElementById("ip2").value=nydns;
document.getElementById("ip3").value=idkdns;
document.getElementById("ip4").value=lastdns;

async function load(){
	var zip = new JSZip();

	var onc={ Type: "UnencryptedConfiguration", NetworkConfigurations: [] };
	var nameservers=[document.getElementById("ip1").value,document.getElementById("ip2").value,document.getElementById("ip3").value,document.getElementById("ip4").value];
	for (var i=0;i<4;i++){
		if (i==0){
			if (nameservers[i]==""){
				nameservers[i]=dns;
			}
		}
		if (nameservers[i]==""){
			nameservers[i]="0.0.0.0";
		}
	}
	var input=document.getElementById("input");
	var network = JSON.parse(input.value);

	if (!network.GUID || !network.Name || !network.WiFi){
		alert("Read the instructions carefully.");
	} else {
		let configuration = {
			GUID: network.GUID,
			Metered: document.getElementById("caub").checked,
			Name: network.Name,
			Type: "WiFi",
			WiFi: {
				AutoConnect: true,
				SSID: network.Name,
				Security: "None",
			},
			NameServersConfigType:"Static",
			StaticIPConfig:{
				NameServers:nameservers
			},
			ProxySettings:{
				Type:"Direct"
			}
		}
		onc.NetworkConfigurations.push(configuration);
		zip.file("kill.onc",JSON.stringify(onc));

		var onc2={ Type: "UnencryptedConfiguration", NetworkConfigurations: [] };

		let configuration2 = {
			GUID: network.GUID,
			Metered: false,
			Name: network.Name,
			Type: "WiFi",
			WiFi: {
				AutoConnect: true,
				SSID: network.Name,
				Security: "None",
			},
			NameServersConfigType:"DHCP",
			IPAddressConfigType: "DHCP",
			StaticIPConfig:{
				NameServers:[]
			},
			ProxySettings:{
				Type:"Direct"
			}
		}
		onc2.NetworkConfigurations.push(configuration2);
		zip.file("revive.onc",JSON.stringify(onc2));

		zip.generateAsync({type:"blob"}).then(function (content) {
			saveAs(content, "network.zip");
		});
		document.getElementById("exportMsg").hidden = false;
	}
}

function download(object, fileName) {
	let link = document.createElement("a");
	link.href = URL.createObjectURL(new Blob([JSON.stringify(object)]));
	link.download = fileName;
	link.click().remove();
}