// Mapeamento de nomes para apelidos (você pode adicionar mais)
const apelidos = {
    'isabela': 'Bela',
    'joão': 'João',
    'joao': 'João',
    'maria': 'Mari',
    'josé': 'Zé',
    'jose': 'Zé',
    'ana': 'Aninha',
    'carlos': 'Carlinhos',
    'paulo': 'Paulinho',
    'lucas': 'Luquinhas',
    // Adicione mais conforme necessário
};

// Função para encontrar apelido baseado no nome
function encontrarApelido(nome) {
    const nomeLower = nome.toLowerCase().trim();
    
    // Procura exato primeiro
    if (apelidos[nomeLower]) {
        return apelidos[nomeLower];
    }
    
    // Procura por partes do nome
    for (const [key, apelido] of Object.entries(apelidos)) {
        if (nomeLower.includes(key) || key.includes(nomeLower)) {
            return apelido;
        }
    }
    
    // Se não encontrar, retorna o primeiro nome
    return nome.split(' ')[0];
}

// Elementos
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const inputName = document.getElementById('guest-name');
const questionText = document.getElementById('question-text');
const finalMessage = document.getElementById('final-message');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

let guestApelido = '';
let guestName = '';

// Função para salvar confirmação (agora usa API)
async function salvarConfirmacao(nome, apelido, status) {
    try {
        const resultado = await apiService.salvarConfirmacao(nome, apelido, status);
        if (resultado.success) {
            console.log('Confirmação salva com sucesso!');
        } else {
            console.error('Erro ao salvar:', resultado.error);
        }
    } catch (error) {
        console.error('Erro ao salvar confirmação:', error);
    }
}

// Quando o usuário digita o nome - mostra pergunta e botões em tempo real
inputName.addEventListener('input', function() {
    const texto = this.value.trim();
    guestName = texto;
    
    if (texto.length > 0) {
        // Encontra o apelido e mostra a pergunta imediatamente
        guestApelido = encontrarApelido(texto);
        questionText.textContent = `${guestApelido}!! É você?`;
        
        // Mostra step 2 (pergunta e botões) mantendo o input visível
        step2.classList.remove('hidden');
    } else {
        // Se apagar tudo, esconde step 2
        step2.classList.add('hidden');
    }
});

// Botão Confirmar
btnYes.addEventListener('click', function() {
    if (guestName.trim() !== '') {
        salvarConfirmacao(guestName, guestApelido, 'confirmado');
    }
    finalMessage.textContent = `Te esperamos lá, ${guestApelido}!`;
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});

// Botão Recusar
btnNo.addEventListener('click', function() {
    if (guestName.trim() !== '') {
        salvarConfirmacao(guestName, guestApelido, 'recusado');
    }
    finalMessage.textContent = `Sentiremos sua falta, ${guestApelido}!`;
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});

// Reset ao clicar no input novamente (apenas se estiver no step 3)
inputName.addEventListener('focus', function() {
    if (step3.classList.contains('hidden') === false) {
        // Reset apenas se estiver na mensagem final
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        step3.classList.add('hidden');
        this.value = '';
        guestApelido = '';
    }
});

