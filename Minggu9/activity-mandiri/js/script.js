function fn_ValForm() {
    var sMsg = "";

    if (document.getElementById("name").value == "") {
        sMsg += "\n Anda belum mengisikan nama.";
    }

    var sEmail = document.getElementById("email").value;
    if (sEmail == "") {
        sMsg += "\n Anda belum mengisikan email.";
    }

    if (document.getElementById("message").value == "") {
        sMsg += "\n Anda belum mengisikan pesan.";
    }

    var emailRegex = /^[a-z0-9][a-z0-9_\.]{0,}@[a-z0-9][a-z0-9\.\-]{0,}\.[a-z]{2,4}$/i;

    if (sEmail != "" && !emailRegex.test(sEmail)) {
        sMsg += "\n Format email tidak valid. Contoh: nama@domain.com";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false; 
    } else {
        return true; 
    }
}