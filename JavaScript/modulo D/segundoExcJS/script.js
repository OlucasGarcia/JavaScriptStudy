function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fano = document.getElementById('txtAno');
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebeHomem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 51) {
                // Adulto
                img.setAttribute('src', 'adultoHomem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebeMulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 51) {
                // Adulto
                img.setAttribute('src', 'adultoMulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}