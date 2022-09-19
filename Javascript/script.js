function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0) {
        window.alert(`Erro, campo obrigatório não preenchido!!`)
    }else if (Number(fano.value) > ano){
        window.alert(`Erro, a data preenchida deve ser menor ou igual ao ano atual`)
    } else {    
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'masculino'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/5anosMasculino.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/13anosMasculino.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/30anosHomen.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/70anosHomen.jpg')
            }
        } else {
            genero = 'feminino'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/5anosFeminino.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/13anosFeminino.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/30anosMulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/70anosMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`<p>Pessoa de ${idade} anos do sexo ${genero} detectada</p>`)
        res.appendChild(img)
        
    } 
}



