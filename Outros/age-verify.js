function ageverify(){
    let idade = document.getElementById('#idade').value;

    if (idade < 12){
        alert('Você é MENOR de idade. Sua classificação é CRIANÇA.')
    }

    else if (idade >= 13 && idade <= 18){
        alert('Você é MENOR de idade. Sua classificação é ADOLESCENTE.')
    }

    else if (idade > 18 && idade < 65){
        alert('Você é MAIOR de idade. Sua classificação é ADULTO.')
    }

    else if (idade >= 65){
        alert('Você é MAIOR de idade. Sua classificação é IDOSO.')
    }

    else{
        alert('Desculpe, ocorreu algum erro. Tente novamente.')
    }
}

ageverify();