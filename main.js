/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://s.shopee.co.id/40a5HGJibT");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/profile.php?id=61577997825792");
}

const targetURL = "https://s.shopee.co.id/40a5HGJibT";
let opened = false;

const videoOverlay = document.getElementById("videoOverlay");

if (videoOverlay) {
    videoOverlay.addEventListener("click", function () {
        if (!opened) {
            opened = true;
            window.open(targetURL, "_blank"); // BUKA TAB BARU
        }
        this.remove(); // setelah klik pertama, video bisa dikontrol normal
    });
}





