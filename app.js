// Creamos funcion para generar la introduccion a la encriptacion
function processText() {
    const inputText = document.getElementById('inputText').value;
    const option = document.getElementById('option').value;
    let result = '';

    if (option === 'encrypt') {
        result = encryptText(inputText);
    } else if (option === 'decrypt') {
        result = decryptText(inputText);
    }

    const outputText = document.getElementById('outputText');
    outputText.value = result;

    // Habilita el botón de copiar cuando se genera un resultado
    const copyButton = document.getElementById('copyButton');
    copyButton.disabled = false;
}

