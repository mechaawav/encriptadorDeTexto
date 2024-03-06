function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var resultMessage = document.getElementById("resultMessage");

    if (inputText.trim() === "") {
        resultMessage.textContent = "Ningún mensaje fue encontrado, ingresa el texto que desees encriptar o desencriptar";
    } else {
        var encryptedText = inputText.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");
        resultMessage.textContent = encryptedText;
    }
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var resultMessage = document.getElementById("resultMessage");

    if (inputText.trim() === "") {
        resultMessage.textContent = "Ningún mensaje fue encontrado, ingresa el texto que desees encriptar o desencriptar";
    } else {
        var decryptedText = inputText.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");
        resultMessage.textContent = decryptedText;
    }
}
