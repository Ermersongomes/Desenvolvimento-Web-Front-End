function destacar(ele){
    ele.style.background = "#aaa"
}
function normal(ele){
    ele.style.background = "white"
}
function funcao01(){
    let validado = false;
    let stremail = document.getElementById("email").value;

    validado = stremail.includes('@');

    if(validado){
        window.alert('Formulario enviado com sucesso!')
    }else{
        window.alert('Digite um e-mail válido.')
    }

}