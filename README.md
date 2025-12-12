# Site de Casamento

Site elegante e responsivo para celebrar seu casamento, inspirado em designs modernos de fotografia de casamento.

## 🎨 Características

- Design elegante e minimalista
- Totalmente responsivo (funciona em celular, tablet e desktop)
- Carrossel de imagens interativo
- Navegação suave entre seções
- Animações suaves ao rolar a página
- Fácil personalização

## 📁 Estrutura de Arquivos

```
siteCasamento/
├── index.html      # Página principal
├── styles.css      # Estilos e design
├── script.js       # Funcionalidades interativas
└── README.md       # Este arquivo
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Personalize o conteúdo conforme necessário
3. Substitua as imagens placeholder pelas suas próprias fotos

## ✏️ Personalização

### Alterar Nomes e Textos

Edite o arquivo `index.html` e procure por:
- `SEUS NOMES` - Substitua pelos nomes do casal
- `[Nome do Noivo]` e `[Nome da Noiva]` - Adicione os nomes reais
- Textos introdutórios na seção principal
- Informações da cerimônia (data, local, dress code)

### Adicionar Suas Próprias Imagens

1. Coloque suas imagens em uma pasta `images/` (ou qualquer nome)
2. Substitua os links das imagens no HTML:
   - Carrossel: procure por `carousel-image`
   - Imagem lateral: procure por `side-image`
   - Grid de imagens: procure por `grid-image`

Exemplo:
```html
<!-- Antes -->
<img src="https://images.unsplash.com/..." alt="Casamento 1">

<!-- Depois -->
<img src="images/nossa-foto-1.jpg" alt="Casamento 1">
```

### Personalizar Cores

Edite o arquivo `styles.css` e modifique as variáveis no início:

```css
:root {
    --color-bg: #F5F1EB;        /* Cor de fundo */
    --color-text: #2C2C2C;      /* Cor do texto */
    --color-accent: #8B7355;    /* Cor de destaque */
    --color-border: #2C2C2C;    /* Cor das bordas */
}
```

### Adicionar Links de Redes Sociais

No arquivo `index.html`, procure por `social-icon` e adicione os links:

```html
<a href="https://instagram.com/seu-perfil" class="social-icon">📷</a>
<a href="https://facebook.com/seu-perfil" class="social-icon">📱</a>
```

### Configurar Botão de Confirmação

O botão "CONFIRMAR PRESENÇA" atualmente mostra um alerta. Você pode:

1. Criar um formulário próprio
2. Usar um serviço como Google Forms
3. Adicionar um link para WhatsApp

Edite o arquivo `script.js` na função do botão `bookButton`.

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktops (1200px+)
- Tablets (768px - 1024px)
- Celulares (até 768px)

## 🎯 Próximos Passos

1. Personalize todos os textos com suas informações
2. Adicione suas próprias fotos
3. Configure os links de redes sociais
4. Adicione informações detalhadas sobre a cerimônia
5. Configure o sistema de confirmação de presença
6. Adicione informações sobre presentes (lista de casamento, etc.)

## 💡 Dicas

- Use imagens de alta qualidade para melhor visualização
- Mantenha o tamanho das imagens otimizado para carregamento rápido
- Teste o site em diferentes dispositivos antes de compartilhar
- Considere usar um serviço de hospedagem gratuito como GitHub Pages, Netlify ou Vercel

## 📞 Suporte

Se precisar de ajuda para personalizar o site, sinta-se à vontade para fazer perguntas!

---

Feito com ❤️ para celebrar seu momento especial!

