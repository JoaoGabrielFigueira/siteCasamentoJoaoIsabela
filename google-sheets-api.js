// Código para Google Apps Script
// Cole este código no Google Apps Script (Extensões > Apps Script na sua planilha)

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar cabeçalhos se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Nome', 'Apelido', 'Status', 'Data', 'Timestamp']);
    }
    
    // Verificar se já existe registro com este nome
    const lastRow = sheet.getLastRow();
    let rowIndex = -1;
    
    if (lastRow > 1) {
      const nomes = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
      for (let i = 0; i < nomes.length; i++) {
        if (nomes[i][0].toLowerCase() === data.nome.toLowerCase()) {
          rowIndex = i + 2; // +2 porque começa na linha 2 (linha 1 é cabeçalho)
          break;
        }
      }
    }
    
    const rowData = [
      data.nome,
      data.apelido,
      data.status,
      new Date(data.data).toLocaleString('pt-BR'),
      data.timestamp
    ];
    
    if (rowIndex > 0) {
      // Atualizar linha existente
      sheet.getRange(rowIndex, 1, 1, 5).setValues([rowData]);
    } else {
      // Adicionar nova linha
      sheet.appendRow(rowData);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Dados salvos com sucesso'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    if (lastRow <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Ler dados (pular cabeçalho)
    const range = sheet.getRange(2, 1, lastRow - 1, 5);
    const values = range.getValues();
    
    const confirmacoes = values.map(row => ({
      nome: row[0],
      apelido: row[1],
      status: row[2],
      data: row[3],
      timestamp: row[4]
    }));
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: confirmacoes
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
