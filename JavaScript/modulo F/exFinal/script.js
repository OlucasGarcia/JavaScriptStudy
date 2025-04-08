const num = [];

const res = document.getElementById("res")

function adicionar() {
    const n = document.getElementById("num");
    const valor = Number(n.value)
    const valores = document.getElementById("valores")

    const find = num.find(num => num === valor)

    if (valor.length == 0 || valor < 1 || valor > 100 || find !== undefined) {
        alert("Valor invalido ou já adicionado")
    } else {
        num.push(valor);

        const novoOption = document.createElement("option")

        novoOption.innerText = `✅ Valor ${valor} adicionado`

        valores.appendChild(novoOption)
        res.innerHTML = ""
    }

    n.value = ""
    n.focus()


}

function finalizar() {
    if (num.length == 0) {
        alert("Você não adicionou nenhum valor")
    } else {
        const numTotal = num.length
        const max = Math.max(...num)
        const min = Math.min(...num)
        const soma = num.reduce((a, b) => a + b, 0)
        const media = soma / numTotal

        novoResultado = document.createElement("p")

        novoResultado.innerText = ""

        novoResultado.innerText = `Ao todo, temos ${numTotal} números cadastrados
                                O maior número informado foi ${max}
                                O menor número informado foi ${min}
                                Somando todos os valores temos ${soma}
                                A média dos valores digitados é ${media}
    `

        res.appendChild(novoResultado)
    }

}