function contar() {
    let inicialValue = document.getElementById('inicio').value;
    let finalValue = document.getElementById('fim').value;
    let passoValue = document.getElementById('passo').value;
    let res = document.querySelector('div#res');

    if (inicialValue.length == 0 || finalValue.length == 0 || passoValue.length == 0) {
        res.innerHTML = 'Valores inválidos'


    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicialValue)
        let f = Number(finalValue)
        let p = Number(passoValue)

        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            p = 1;
        }

        if (i < f) {

            for (let c = i; c <= f; c += p) {

                res.innerHTML += `${c} ➡️`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ➡️`
            }
        }
        res.innerHTML += '🏁'
    }
}