function criptografarTexto() {
    const texto = document.querySelector('.textarea').value.toLowerCase();
    if (texto !== '') {
        const chaves = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        let textoCriptografado = '';
        let palavras = texto.split(' ');
        for (let i = 0; i < palavras.length; i++) {
            let palavraCriptografada = '';
            for (let j = 0; j < palavras[i].length; j++) {
                const letra = palavras[i][j];
                if (letra.match(/[a-z]/)) {
                    if (chaves[letra]) {
                        palavraCriptografada += chaves[letra];
                    } else {
                        palavraCriptografada += letra;
                    }
                }
            }
            textoCriptografado += palavraCriptografada + ' ';
        }

        const resultadoDiv = document.querySelector('.right');
        resultadoDiv.innerHTML = '';
        resultadoDiv.innerHTML = `
            <p class="resultado">${textoCriptografado.trim()}</p>
            <div class="botao-copiar-container">
                <button class="botao-copiar">Copiar</button>
            </div>
        `;


        const botaoCopiar = resultadoDiv.querySelector('.botao-copiar');
        botaoCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(textoCriptografado.trim());
            alert('Texto copiado!');
        });
    }
}

function descriptografarTexto() {
    const texto = document.querySelector('.textarea').value.toLowerCase();
    if (texto !== '') {
        const chaves = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        let textoDescriptografado = '';
        let i = 0;
        while (i < texto.length) {
            let achou = false;
            for (const chave in chaves) {
                if (texto.substring(i, i + chave.length) === chave) {
                    textoDescriptografado += chaves[chave];
                    i += chave.length;
                    achou = true;
                    break;
                }
            }
            if (!achou) {
                if (texto[i] === ' ') {
                    textoDescriptografado += ' ';
                } else {
                    textoDescriptografado += texto[i];
                }
                i++;
            }
        }

        const resultadoDiv = document.querySelector('.right');
        resultadoDiv.innerHTML = '';
        resultadoDiv.innerHTML = `
            <p class="resultado">${textoDescriptografado.trim()}</p>
                <button class="botao-copiar">Copiar</button>
        `;

        const botaoCopiar = resultadoDiv.querySelector('.botao-copiar');
        botaoCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(textoDescriptografado.trim());
            alert('Texto copiado!');
        });
    }
}