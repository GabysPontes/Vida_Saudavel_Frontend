const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", sendDataToServer)

async function sendDataToServer(e) {
    e.preventDefault();
    const name = document.getElementById("InputUser").value
    const email = document.getElementById("InputEmail").value
    const mensagem = document.getElementById("InputMensagem").value
    
    const data = {
    name,
    email,
    mensagem
}

await fetch("https://vida-saudavel.onrender.com/contatos", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
location.reload();
}

