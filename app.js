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

// Generamos las reglas de encripte

function encryptText(text) {
    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

// Aplicamos la encriptación
    const encryptedText = text.replace(/[eioua]/g, match => encryptionMap[match]);
    return encryptedText;
}

// Generamos funcion para la desencriptacion

function decryptText(text) {
    const decryptionMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

// Aplicamos la desencriptación
    const decryptedText = text.replace(/(enter|imes|ai|ober|ufat)/g, match => decryptionMap[match]);
    return decryptedText;
}


