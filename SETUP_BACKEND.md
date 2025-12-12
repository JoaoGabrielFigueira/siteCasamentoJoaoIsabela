# Configuração do Backend - Google Sheets API

## Passo 1: Criar uma Planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha, adicione os cabeçalhos:
   - Coluna A: `Nome`
   - Coluna B: `Apelido`
   - Coluna C: `Status`
   - Coluna D: `Data`
   - Coluna E: `Timestamp`
4. Anote o ID da planilha na URL (exemplo: `https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit`)

## Passo 2: Configurar Google Apps Script

1. Na planilha, vá em **Extensões** > **Apps Script**
2. Delete o código padrão e cole o código do arquivo `google-sheets-api.js`
3. Salve o projeto (Ctrl+S)
4. Clique em **Implantar** > **Nova implantação**
5. Selecione tipo: **Aplicativo da web**
6. Configure:
   - Descrição: "API de Confirmações"
   - Executar como: **Eu**
   - Quem tem acesso: **Qualquer pessoa**
7. Clique em **Implantar**
8. Copie a **URL da Web App** gerada

## Passo 3: Configurar no Site

1. Abra o arquivo `config.js`
2. Cole a URL da Web App no campo `GOOGLE_SCRIPT_URL`
3. Salve o arquivo

## Pronto! 

Agora todas as confirmações serão salvas automaticamente na planilha do Google.

---

## Alternativa: Usar Firebase (Mais Robusto)

Se preferir uma solução mais profissional, posso configurar Firebase:
- Banco de dados em tempo real
- Autenticação
- Mais escalável

Me avise se quiser que eu configure Firebase ao invés do Google Sheets!
