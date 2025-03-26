function mostrarMais() {
    var infoExtra = document.getElementById("info-extra");
    if (infoExtra.style.display === "none") {
        infoExtra.style.display = "block";
    } else {
        infoExtra.style.display = "none";
    }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem-enviada").style.display = "block";
    setTimeout(() => {
        document.getElementById("mensagem-enviada").style.display = "none";
    }, 3000);
    this.reset();
});
// Função para mostrar mais informações na seção Sobre
function mostrarMaisSobre() {
    $("#info-extra-sobre").slideToggle(); // Alterna a visibilidade da div com informações adicionais
}

// Função para mostrar mais informações sobre o curso ao clicar
function mostrarInfo(curso) {
    let titulo = '';
    let descricao = '';

    // Definir o título e descrição com base no curso escolhido
    switch(curso) {
        case 'medicina':
            titulo = 'Curso de Medicina';
            descricao = 'O curso de Medicina prepara os alunos para atuar como médicos com habilidades clínicas e científicas, proporcionando conhecimento aprofundado nas áreas de saúde e diagnóstico.';
            break;
        case 'enfermagem':
            titulo = 'Curso de Enfermagem';
            descricao = 'O curso de Enfermagem oferece uma formação completa para atuar em hospitais, clínicas e outros ambientes de saúde, com foco no cuidado integral ao paciente.';
            break;
        case 'farmacia':
            titulo = 'Curso de Farmácia';
            descricao = 'O curso de Farmácia prepara profissionais para atuar na indústria farmacêutica, em farmácias e drogarias, além de desenvolver habilidades na manipulação e controle de medicamentos.';
            break;
        case 'fisioterapia':
            titulo = 'Curso de Fisioterapia';
            descricao = 'O curso de Fisioterapia forma profissionais para atuar no tratamento de problemas de movimento, lesões musculoesqueléticas e reabilitação física de pacientes.';
            break;
        case 'nutricao':
            titulo = 'Curso de Nutrição';
            descricao = 'O curso de Nutrição ensina aos alunos como promover a saúde e o bem-estar por meio da alimentação, atuando na prevenção e no tratamento de doenças relacionadas à nutrição.';
            break;
        default:
            titulo = 'Curso não encontrado';
            descricao = 'Selecione um curso para visualizar mais informações.';
            break;
    }

    // Exibir o modal com as informações do curso
    document.getElementById('titulo-curso').innerText = titulo;
    document.getElementById('descricao-curso').innerText = descricao;
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal quando o usuário clicar fora da área de conteúdo
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        fecharModal();
    }
}
