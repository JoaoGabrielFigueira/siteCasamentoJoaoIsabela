// Mapeamento de nomes para apelidos (você pode adicionar mais)
const apelidos = {
        'luzia': 'Vó Lu',
        'cida': 'Vó Cida',
        'assis': 'Biru Biru',
        'benedita': 'Tia Bene',
        'natali': 'Na',
        'evelin marton': 'Evelin Marton',
        'jeferson macedo': 'Jeh',
        'pietra marton': 'Pipi',
        'gabriel augusto': 'Gabi',
        'karine cassilo': 'Kari',
        'samuel cassilo': 'Samuca',
        'pedro cassilo': 'Pedroca',
        'jessica arantes': 'Je',
        'helena cassilo': 'Leca',
        'gabriel dias': 'Gabriel',
        'heidy montanheiro': 'Tia Heidy',
        'eduardo prado': 'Duda',
        'vicenzo montanheiro': 'Vi',
        'antonella montanheiro': 'Tuca',
        'mirella montanheiro': 'Mi',
        'tatiane montanheiro': 'Tati',
        'marcos montanheiro': 'Marcos Montanheiro',
        'vitoria montanheiro': 'Vi',
        'julia montanheiro': 'Ju',
        'claudia montanheiro': 'Claudia Montanheiro',
        'marcos del rio': 'Marcos Del Rio',
        'kimberly montanheiro': 'Kimy',
        'valentina montanheiro': 'Valen',
        'luciana guerra': 'Tia Lu',
        'flavio vieira': 'Flavio Vieira',
        'luana guerra': 'Loulou',
        'luis arthur': 'Luis Arthur',
        'leticia guerra': 'Le',
        'william': 'William',
        'lanna guerra': 'Lanna Guerra',
        'mariana guerra': 'Mari',
        'cecilia guerra': 'Ceci',
        'jether rodrigues': 'Jether Rodrigues',
        'beatriz nascimento': 'Bia',
        'gabriel souza': 'Lolo',
        'isabelly nascimento': 'Isa',
        'denise nascimento': 'Denise Nascimento',
        'livia braidott': 'Liv',
        'andre': 'Andre',
        'leticia amorim': 'Le',
        'gedeon amorim': 'Gedeon Amorim',
        'laura amorim': 'Covinha',
        'giovanna amorim': 'Jovi',
        'matheus amorim': 'Matheus Amorim',
        'amanda carvalho': 'Mandinha',
        'vanessa prince': 'Van',
        'daniel prince': 'Daniel Prince',
        'julia carvalho': 'Jubs',
        'miguel guedes': 'Mimi',
        'mateus prince': 'Milanesa',
        'enzo amorim': 'Enzoca',
        'alvaro felice': 'Alvinho',
        'kendra saraiva': 'Kendrita',
        'magda finotti': 'Magda Finotti',
        'cristina ermenegildo': 'Tia Cris',
        'claudio ermenegildo': 'Claudinho',
        'miguel ermenegildo': 'Miguel Ermenegildo',
        'ana elisa ermenegildo': 'Nelisa',
        'cassio ribeiro': 'Cassio Ribeiro',
        'silvana santos': 'Sil',
        'roberto': 'Roberto',
        'nicolas gabriel': 'Ni',
        'rilary zanin': 'Rilly',
        'jabes candido': 'Jabes',
        'jennifer benevenuto': 'Jennifer Benevenuto',
        'wanilson benevenuto': 'Wanilson Benevenuto',
        'giorgia benevenuto': 'Joy',
        'giovana benevenuto': 'Giovana Benevenuto',
        'giulia benevenuto': 'Giulia Benevenuto',
        'thiago luiz': 'Thiago Luiz',
        'fabio faria': 'Fabinho',
        'patricia faria': 'Patricia Faria',
        'raphaella melo': 'Rapha',
        'leandro melo': 'Leandro Melo',
        'abner china': 'Binão',
        'suellen- suh': 'Suh',
        'ana mel': 'Mel',
        'tia marta martoca': 'Martoca',
        'tio ricardo ricardão': 'Ricardão',
        'mariane mari': 'Mari',
        'lucas': 'Lucas',
        'dayane day': 'Day',
        'andrey drey': 'Drey',
        'salvador': 'Salvador',
        'neide': 'Neide',
        'mariane mari': 'Mari',
        'nathalia': 'Nathalia',
        'yuri': 'Yuri',
        'ely': 'Ely',
        'elza': 'Elza',
        'marta': 'Marta',
        'natanael': 'Natanael',
        'tia cassia': 'Cassia',
        'tio abner binão': 'Binão',
        'cassiany caca': 'Caca',
        'gabriely novaes': 'Gaby',
        'valdirene oliveira': 'Tia Val',
        'rosemar oliveira': 'Fortão',
        'carolyne oliveira': 'Carol',
        'beatriz oliveira': 'Bia',
        'isabelly oliveira': 'Belly',
        'gabrielly oliveira': 'Gabi',
        'gabriel felix': 'Biel',
        'julio': 'Julio',
        'heloisa aquila': 'Tia Lu',
        'reinaldo aquila': 'Tio Reinaldo',
        'tatiane ferraz': 'Tati',
        'marcio ferraz': 'Marcio Ferraz',
        'talita aquila': 'Lita',
        'raphael faria': 'Rafa',
        'thamiris rodrigues': 'Mires',
        'thiago aquila': 'Thiago Aquila',
        'lorraine aquila': 'Lo',
        'marcilene': 'Tia Ma',
        'guilherme ribeiro': 'Gui',
        'gustavo ribeiro': 'Gu',
        'henrique': 'Tio Henrique',
        'camila ': 'Mila',
        'jefferson camilo': 'Jerfinho',
        'claudineia': 'Tia Neia',
        'pedro margarido': 'Pedrinho',
        'gabriela': 'Gabriela',
        'felipe': 'Lipe',
        'amanda': 'Amanda',
        'silvia helena': 'Tia Ni',
        'nelson': 'Tio Nelson',
        'franciely ': 'France',
        'rodrigo': 'Rodrigo',
        'maria vitoria': 'Maria Vitoria',
        'ana livia': 'Ana Livia',
        'francine': 'Cine',
        'jamilton': 'Jamilton',
        'adriana': 'Tia Dri',
        'francisco ': 'Chico',
        'alan': 'Cabeça',
        'andresa': 'Andresa',
        'alex': 'Alex',
        'namorada': 'Namorada',
        'elaine tia laine': 'Tia Laine',
        'vidal tio vidal': 'Tio Vidal',
        'layla': 'Layla',
        'pedro': 'Pedro',
        'yan': 'Yan',
        'marcus vinicius': 'Vini',
        'vania': 'Vania',
        'reginaldo': 'Regi',
        'giovana santos': 'Gi',
        'pedro': 'Pedro',
        'michele': 'Tia Mi',
        'juliane ju': 'Ju',
        'bruno': 'Bruno',
        'wander': 'Wandinho',
        'carol': 'Carol',
        'wagner': 'Wagner',
        'ivone': 'Ivone',
        'joao faria': 'Chaveirinho',
        'sabrina': 'Bina',
        'isabella faria': 'Belinha',
        'davi': 'Davizola',
        'claudecir': 'Claudecir',
        'lucemir': 'Lucemir',
        'allan': 'Zé',
        'gabrielly': 'Gaby',
        'kawe': 'Kawe',
        'eduardo teodoro': 'Du',
        'joao nobrega': 'Jhon',
        'julia': 'Ju',
        'gabriel nobrega': 'Biel',
        'valtecir': 'Nene',
        'sarah': 'Sarah',
        'elias': 'Elias',
        'neila': 'Neila',
        'marcos': 'Marquinhos',
        'ana ramos': 'Ana Ramos',
        'ivan': 'Ivan',
        'sheila': 'Sheila',
        'eber': 'Eber',
        'namorada': 'Namorada',
        'genivaldo': 'Genivaldo',
        'tálita': 'Tálita',
        'bárbara': 'Bárbara',
        'danilo': 'Danilo',
        'eric': 'Eric',
        'jamile': 'Jamile',
        'matheus marques': 'Marquito',
        'bruno': 'Brunão',
        'tiffany': 'Tiffany',
        'fabio': 'Binho',
        'joão freitas': 'João Diniz',
        'caio': 'Gordão',
        'natalia': 'Natalia',
        'vinicius': 'Vinicin',
        'sophia': 'Sophia',
        'douglas': 'Boy',
        'rhuan': 'Rh',
        'joão vitor': 'Sorriso',
        'gustavo': 'Gugs',
        'renan': 'Bestie',
        'ruan': 'Barbie',
        'gustavo': 'Açucarado',
        'catarina': 'Cat',
        'fernando': 'Nando',
        'luana': 'Luana',
        'matheus': 'Matheus',
        'diego': 'Diego',
        'joayne': 'Jojo',
        'joao': 'JC',
        'rebeca': 'Beka',
        'estevam': 'Estevam',
        'lizandra': 'Liza',
        'alisson': 'Alisson',
        'thiago': 'Thiago',
        'esposa': 'Esposa'
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

