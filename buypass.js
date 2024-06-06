//  This script has been modified and built upon other versions by Ashton Davies for integration and improvement.

function buypass() {
    if (!window.PaymentRequest) {
        return alert("This browser does not support the Payment Request API.");
    }
    new PaymentRequest(
        [
            {
                supportedMethods: location.href.toLowerCase().split("/buypass/", 1) + "/buypass/assets/pay/payment-manifest.json",
                data: {url: "https://google.com"},
            },
        ],
        {
            total: {
                label: "_",
                amount: {value: "1", currency: "USD"},
            },
        }
    ).show();
}
document.querySelector(".buypassBtn").addEventListener("click", buypass);