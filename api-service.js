// Serviço para comunicação com o backend (Google Sheets)

class ApiService {
    constructor() {
        this.baseUrl = CONFIG.GOOGLE_SCRIPT_URL;
        this.useLocalStorage = CONFIG.USE_LOCALSTORAGE_FALLBACK;
    }
    
    // Salvar confirmação
    async salvarConfirmacao(nome, apelido, status) {
        const confirmacao = {
            nome: nome,
            apelido: apelido,
            status: status,
            data: new Date().toISOString(),
            timestamp: Date.now()
        };
        
        // Se não tiver URL configurada, usa localStorage
        if (!this.baseUrl || this.baseUrl === 'COLE_SUA_URL_AQUI') {
            if (this.useLocalStorage) {
                return this.salvarLocalStorage(confirmacao);
            } else {
                console.error('URL do Google Script não configurada!');
                return { success: false, error: 'Backend não configurado' };
            }
        }
        
        try {
            // Enviar para Google Sheets
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script requer no-cors
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(confirmacao)
            });
            
            // Com no-cors, não conseguimos ver a resposta, mas assumimos sucesso
            // Também salvamos no localStorage como backup
            this.salvarLocalStorage(confirmacao);
            
            return { success: true, data: confirmacao };
            
        } catch (error) {
            console.error('Erro ao salvar no Google Sheets:', error);
            // Fallback para localStorage
            return this.salvarLocalStorage(confirmacao);
        }
    }
    
    // Salvar no localStorage (fallback)
    salvarLocalStorage(confirmacao) {
        try {
            const confirmacoes = JSON.parse(localStorage.getItem('confirmacoes') || '[]');
            
            const index = confirmacoes.findIndex(c => 
                c.nome.toLowerCase() === confirmacao.nome.toLowerCase()
            );
            
            if (index >= 0) {
                confirmacoes[index] = confirmacao;
            } else {
                confirmacoes.push(confirmacao);
            }
            
            localStorage.setItem('confirmacoes', JSON.stringify(confirmacoes));
            return { success: true, data: confirmacao };
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
            return { success: false, error: error.message };
        }
    }
    
    // Buscar todas as confirmações
    async buscarConfirmacoes() {
        // Se não tiver URL configurada, usa localStorage
        if (!this.baseUrl || this.baseUrl === 'COLE_SUA_URL_AQUI') {
            if (this.useLocalStorage) {
                return this.buscarLocalStorage();
            } else {
                return { success: false, error: 'Backend não configurado', data: [] };
            }
        }
        
        try {
            const response = await fetch(`${this.baseUrl}?action=get`, {
                method: 'GET',
                mode: 'cors'
            });
            
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            
            const result = await response.json();
            
            if (result.success) {
                // Também sincronizar com localStorage
                if (result.data && result.data.length > 0) {
                    localStorage.setItem('confirmacoes', JSON.stringify(result.data));
                }
                return result;
            } else {
                throw new Error(result.error || 'Erro desconhecido');
            }
            
        } catch (error) {
            console.error('Erro ao buscar do Google Sheets:', error);
            // Fallback para localStorage
            return this.buscarLocalStorage();
        }
    }
    
    // Buscar do localStorage (fallback)
    buscarLocalStorage() {
        try {
            const confirmacoes = JSON.parse(localStorage.getItem('confirmacoes') || '[]');
            return { success: true, data: confirmacoes };
        } catch (error) {
            console.error('Erro ao buscar do localStorage:', error);
            return { success: false, error: error.message, data: [] };
        }
    }
}

// Instância global do serviço
const apiService = new ApiService();
