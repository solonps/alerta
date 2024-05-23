document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const veiculo = document.getElementById('veiculo').value;
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Nome: ${nome}</p><p>Veículo: ${veiculo}</p>`;
});