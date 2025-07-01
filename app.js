let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");   
    }
}

function downloadQR() {
    const qrImage = document.getElementById("qrImage");
    
    if (qrImage.src && qrImage.src.includes("qrserver.com")) {
        try {
            const link = document.createElement("a");
            link.href = qrImage.src;
            link.download = "qr-code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            alert("Download failed: " + error.message);
        }
    } else {
        alert("Please generate a QR code first.");
    }
}
