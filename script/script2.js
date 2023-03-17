function validateForm() {
    //Obtém os valores dos campos do formulário
    const name = document.forms["frmcontato"]["userName"].value.trim();
    const email = document.forms["frmcontato"]["userEmail"].value.trim();
    const subject = document.forms["frmcontato"]["subject"].value.trim();
    const message = document.forms["frmcontato"]["message"].value.trim();

    // Verifica se o campo "Nome" foi preenchido
    if (name === "") {
     document.getElementById("userName-info").innerHTML = "Por favor, digite seu nome";
     document.getElementById("userName-info").classList.add("invalid-feedback");
     document.fo["frmContato"]["userName"].classList.add("is-invalid");
     return false;
    }

    //Verifica se o campo "E-mail" foi preenchido corretamente
    if (!isValidEmail(email)) {
     document.getElementById("userEmail-info").innerHTML = "Por favor, digite um e-mail válido";
     document.getElementById("userSubject-info").classList.add("Invalid-feedback");
     document.forms["frmContato"]["userEmail"].classList.add("is-Invalid");
     return false;
    }

    //Verifica se o campo "Assunto" foi preenchido corretamente
    if (assunto==="") {
        document.getElementById("userSubject-info").innerHTML = "Por favor, digite um assunto válido";
        document.forms ["userSubject"]["subject"].classList.add("invalid-feedback");
        document.forms["frmContado"]["subject"].classList.add("is-invalid");
        return false;
    }

    //Verifique se o campo "Mensagem" foi preenchido
    if (message === "") {
     document.getElementById("userMessage-info").innerHTML = "Por favor, digite sua mensagem";
     document.getElementById("userMessage-info").classList.add("invalid-feedback");
     document.forms ["frmContado"]["message"].classList.add("is-invalid");
     return false;
    }

    if (message.length < 10) {
     document.getElementById("userMessage-info").innerHTML = "Por favor,escreva uma mensagem minima de 10 caracteres";
     document.getElementById("userMessage-info").classList.add("invalid-feedback");
     document.forms ["frmContado"]["message"].classList.add("is-invalid");
     return false;
    }

    //Retorna true caso todos os campos tenham sido preenchidos corretamente
    return true;
}

function isValidEmail(email) {
  //Expressão regular para verificar se o e-mail é valido
  const emailRegex = /\S+@\.\S+/;
  return emailRegex.test(email);
}