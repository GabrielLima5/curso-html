document.getElementById('form').addEventListener('mouseenter', e => {

    console.log('O mouse está dentro do formulário.') // Aqui estamos indicando um evento
                                                      // quando o mouse entrar dentro do form.

});

document.querySelector('#form').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário.') // Aqui estamos indicando um evento
                                                    // quando o mouse sair do form.

});

document.querySelector('#btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado.') // Aqui estamos indicando um evento
                                        // quando o botão de Enviar for clicado.

});

document.querySelector('#form').addEventListener('submit', e => {

    e.preventDefault(); // Aqui estamos removendo um comportamento padrão do navegador
                        // fazendo com que ele não recarregue a página ao enviar o formulário.
    
    let email = document.querySelector('#email').value; // Aqui estamos obtendo o valor do campo email
    let password = document.querySelector('#password').value; // Aqui estamos obtendo o valor do campo senha

    console.log(email, password); // Aqui, estamos colocando os valores obtidos no console.

    let json = {
        email,
        password
    };

    console.log(json)


    let stringJSON = JSON.stringify(json)

    console.log(stringJSON)


    let JSONparse = JSON.parse(stringJSON)

    console.log(JSONparse)


    if(!json.email){
        console.error('O campo email deve ser preenchido!')
    }

    else if(!json.password){
        console.error('O campo password deve ser preenchido!')
    }

    else{
        console.info('Dados validados com sucesso.')
    }
});





