// Mapeamento de nomes para apelidos (você pode adicionar mais)
const apelidos = {
        'luzia': 'Vó Lu',
        'cida': 'Vó Cida',
        'assis': 'Biru Biru',
        'benedita': 'Tia Bene',
        'natali': 'Na',
        'evelin marton': 'Tia Evelin',
        'jeferson macedo': 'Jeh',
        'pietra marton': 'Pipi',
        'gabriel augusto': 'Gabi',
        'karine cassilo': 'Tia Kari',
        'samuel cassilo': 'Tio Samuca',
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
        'marcos montanheiro': 'Tio Marcos',
        'vitoria montanheiro': 'Vi',
        'julia montanheiro': 'Ju',
        'claudia montanheiro': 'Tia Cau',
        'marcos del rio': 'Tio Marquinhos',
        'kimberly montanheiro': 'Kimy',
        'valentina montanheiro': 'Valen',
        'luciana guerra': 'Tia Lu',
        'flavio vieira': 'Flavio',
        'luana guerra': 'Loulou',
        'luis arthur': 'Luis',
        'leticia guerra': 'Le',
        'william': 'William',
        'lanna guerra': 'Lanna',
        'mariana guerra': 'Mari',
        'cecilia guerra': 'Ceci',
        'jether rodrigues': 'Jether',
        'beatriz nascimento': 'Bia',
        'gabriel souza': 'Lolo',
        'isabelly nascimento': 'Isa',
        'denise nascimento': 'Denise',
        'livia braidott': 'Liv',
        'andre': 'Andre',
        'leticia amorim': 'Le',
        'gedeon amorim': 'Gedeon',
        'laura amorim': 'Covinha',
        'giovanna amorim': 'Jovi',
        'matheus amorim': 'Matheus',
        'amanda carvalho': 'Mandinha',
        'vanessa prince': 'Van',
        'daniel prince': 'Daniel',
        'julia carvalho': 'Jubs',
        'miguel guedes': 'Mimi',
        'mateus prince': 'Milanesa',
        'enzo amorim': 'Enzoca',
        'alvaro felice': 'Alvinho',
        'kendra saraiva': 'Kendrita',
        'Samuel': 'Samuel',
        'magda finotti': 'Magda',
        'cristina ermenegildo': 'Tia Cris',
        'claudio ermenegildo': 'Claudinho',
        'miguel ermenegildo': 'Miguel',
        'ana elisa ermenegildo': 'Nelisa',
        'cassio ribeiro': 'Cassio',
        'silvana santos': 'Sil',
        'roberto': 'Roberto',
        'nicolas gabriel': 'Ni',
        'rilary zanin': 'Rilly',
        'jabes candido': 'Jabes',
        'jennifer benevenuto': 'Jennifer',
        'wanilson benevenuto': 'Wanilson',
        'giorgia benevenuto': 'Joy',
        'giovana benevenuto': 'Giovana',
        'giulia benevenuto': 'Giulia',
        'thiago luiz': 'Thiago',
        'fabio faria': 'Fabinho',
        'patricia faria': 'Patricia',
        'raphaella melo': 'Rapha',
        'leandro melo': 'Leandro',
        'abner': 'China',
        'suellen': 'Suh',
        'ana mel': 'Mel',
        'marta montanheiro': 'Martoca',
        'ricardo montanheiro': 'Ricardão',
        'mariane montanheiro': 'Mari',
        'lucas': 'Lucas',
        'dayane': 'Day',
        'andrey': 'Drey',
        'salvador': 'Salvador',
        'neide': 'Neide',
        'mariane silva': 'Mari',
        'nathalia galvao': 'Nathalia',
        'yuri galvao': 'Yuri',
        'ely': 'Ely',
        'elza': 'Elza',
        'marta vieira': 'Marta',
        'natanael': 'Natanael',
        'cassia novaes': 'Cassia',
        'abner novaes': 'Binão',
        'cassiany novaes': 'Caca',
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
        'marcio ferraz': 'Marcio',
        'talita aquila': 'Lita',
        'raphael faria': 'Rafa',
        'thamiris rodrigues': 'Mires',
        'thiago aquila': 'Thiago',
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
        'Isaura': 'Isaura',
        'elaine': 'Tia Laine',
        'vidal': 'Tio Vidal',
        'layla': 'Layla',
        'pedro': 'Pedro',
        'yan': 'Yan',
        'marcus vinicius': 'Vini',
        'vania': 'Vania',
        'reginaldo': 'Regi',
        'giovana santos': 'Gi',
        'pedro': 'Pedro',
        'michele': 'Tia Mi',
        'juliane': 'Ju',
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
        'ana ramos': 'Ana',
        'ivan': 'Ivan',
        'sheila': 'Sheila',
        'eber': 'Eber',
        'mileny': 'Mileny',
        'genivaldo': 'Genivaldo',
        'tálita': 'Tálita',
        'bárbara': 'Bárbara',
        'danilo': 'Danilo',
        'eric': 'Eric',
        'amanda': 'Amanda',
        'jamile': 'Jamile',
        'matheus marques': 'Marquito',
        'bruno': 'Brunão',
        'tiffany': 'Tiffany',
        'fabio': 'Binho',
        'joão freitas': 'Diniz',
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
        'diego': 'Diego',
        'joayne': 'Jojo',
        'joao': 'JC',
        'rebeca': 'Beka',
        'estevam': 'Estevam',
        'lizandra': 'Liza',
        'alisson': 'Alisson',
        'thiago': 'Thiago',
        'Jaqueline': 'Jaqueline',
        'chico marton': 'Chico',
        'valquiria marton': 'Valquiria',
        'dora marton': 'Dora',
        'regina marton': 'Regina',
        'filomena marton': 'Filomena',
        'edwirges marton': 'Tia Edwirges',
        'joao marton': 'João',
        'allan marton': 'Allan',
        'cristiane marton': 'Cristiane',
        'rosa marton': 'Rosa',
        'wilson marton': 'Wilson',
        'messias marton': 'Messias',
        'sonia marton': 'Sonia',
        'domingos marton': 'Domingos',
        'celia marton': 'Celia',
        'ana marton': 'Tia Ana',
        'robson marton': 'Robson',
        'mauricio': 'Mauricio',
        'juliana': 'Juliana',
        'miguel': 'Miguel',
        'silvia oliveira': 'Silvia',
        'alexandro': 'Alexandro',
        'andrew barbosa': 'Andrew',
        'sophia barbosa': 'Sophia',
        'flavia': 'Flavia',
        'wander': 'Wander',
        'vanessa amorim': 'Vanessa',
        'anderson domingues': 'Anderson',
        'anderson jr amorim': 'Anderson junior',
        'sarah amorim': 'Sarah',
        'dani covo': 'Dani',
        'saulo covo': 'Saulo',
        'talita covo': 'Talita',
        'lucas covo': 'Lucas',
        'nilva cardoso': 'Nilva',
        'ueverson dionísio': 'Ueverson',
        'guilherme souza': 'Guilherme',
        'noemi lemos': 'Noemi',
        'beatriz delfino': 'Beatriz',
        'zizo delfino': 'Zizo',
        'alto': 'Alto',
        'maria santos': 'Maria',
        'laerte': 'Laerte',
        'marcia': 'Marcia',
        'moises': 'Moises',
        'elis': 'Elis',
        'gabrielly oliveira': 'Gabi',
        'lilian garcia': 'Lilian',
        'marcelo pereira': 'Marcelo',
        'raquel navarro': 'Raquel',
        'douglas navarro': 'Douglas',
        'davi navarro': 'Davi',
        'rafaela navarro': 'Rafaela',
        'rayssa navarro': 'Rayssa',
        'vinicius balbulio': 'Vinicius', 
        'keila': 'Keila',
        'carlos eduardo': 'Carlos',
        'ana beatriz': 'Ana',
        'joao': 'João',
        'leia castro': 'Leia',
        'robson castro': 'Robson',
        'emily castro': 'Emily',
        'eduardo castro': 'Eduardo',
        'valcir henrique': 'Valcir',
        'marta usson': 'Marta',
        'otavio augusto': 'Otavio',
        'jarbas neto': 'Jarbas',
        'livia vezzaro': 'Livia',
        'izana vezzaro': 'Izana',
        'abel dato': 'Abel',
        'alice dato': 'Alice',
        'andre ribeiro': 'Andre',
        'leia ribeiro': 'Leia',
        'glaucia soares': 'Glaucia',
        'rodrigo soares': 'Rodrigo',
        'Alice soares': 'Alice',
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

