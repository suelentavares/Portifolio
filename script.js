function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5592991696894'

    const texto = `Olá Suelen $ {nome}, $ {mensagem}`
    const textoCodificado = encodeURIComponent(texto)
    const url = `https://wa.me/${telefone}/?text=$=${textoCodificado}`

    window.open(url, '_blank')
}


