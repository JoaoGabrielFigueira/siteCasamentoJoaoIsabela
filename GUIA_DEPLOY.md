# Guia de Deploy - Site de Casamento

## 🚀 Opções Gratuitas para Hospedar seu Site

### 1. **Netlify** (⭐ RECOMENDADO - Mais Fácil)

**Vantagens:**
- ✅ Gratuito para sempre
- ✅ Deploy em segundos (drag and drop)
- ✅ HTTPS automático
- ✅ URL personalizada (ex: seucasamento.netlify.app)
- ✅ Sem necessidade de Git

**Como fazer:**

1. Acesse [netlify.com](https://www.netlify.com)
2. Crie uma conta (pode usar Google/GitHub)
3. Arraste a pasta do projeto para a área de deploy
4. Pronto! Seu site estará online

**URL personalizada:**
- Vá em **Site settings** > **Change site name**
- Escolha um nome (ex: casamento-isabela-joao)
- Seu site ficará: `casamento-isabela-joao.netlify.app`

---

### 2. **GitHub Pages** (Gratuito e Popular)

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Integrado com GitHub
- ✅ URL: `seuusuario.github.io/nome-do-repositorio`
- ✅ Controle de versão

**Como fazer:**

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório (ex: `site-casamento`)
3. Faça upload dos arquivos do projeto
4. Vá em **Settings** > **Pages**
5. Selecione a branch `main` e pasta `/root`
6. Pronto! Seu site estará em: `seuusuario.github.io/site-casamento`

**Comandos Git (opcional):**
```bash
git init
git add .
git commit -m "Primeiro deploy"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/site-casamento.git
git push -u origin main
```

---

### 3. **Vercel** (Muito Rápido)

**Vantagens:**
- ✅ Gratuito
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ URL: `seu-site.vercel.app`

**Como fazer:**

1. Acesse [vercel.com](https://vercel.com)
2. Crie conta (pode usar GitHub)
3. Clique em **Add New Project**
4. Arraste a pasta ou conecte com GitHub
5. Deploy automático!

---

### 4. **Firebase Hosting** (Google)

**Vantagens:**
- ✅ Gratuito (10GB de armazenamento)
- ✅ HTTPS automático
- ✅ CDN global (site rápido no mundo todo)
- ✅ Integração com Google Analytics

**Como fazer:**

1. Instale Node.js: [nodejs.org](https://nodejs.org)
2. Instale Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
3. Faça login:
   ```bash
   firebase login
   ```
4. No diretório do projeto:
   ```bash
   firebase init hosting
   ```
5. Configure:
   - Public directory: `.` (ponto)
   - Single-page app: `N`
   - GitHub: `N`
6. Deploy:
   ```bash
   firebase deploy
   ```

---

### 5. **Surge.sh** (Super Simples)

**Vantagens:**
- ✅ Gratuito
- ✅ Deploy em 30 segundos
- ✅ Comando único

**Como fazer:**

1. Instale Node.js: [nodejs.org](https://nodejs.org)
2. Instale Surge:
   ```bash
   npm install -g surge
   ```
3. No diretório do projeto:
   ```bash
   surge
   ```
4. Escolha um domínio (ex: casamento-isabela-joao.surge.sh)
5. Pronto!

---

## 📋 Checklist Antes do Deploy

- [ ] Testar todas as páginas localmente
- [ ] Verificar se todas as imagens estão na pasta `images/`
- [ ] Testar o formulário de confirmação
- [ ] Verificar se o Google Sheets está configurado
- [ ] Testar em mobile (responsivo)
- [ ] Verificar links da navbar

---

## 🔒 Domínio Personalizado (Opcional)

Todas as plataformas acima permitem usar seu próprio domínio:

**Exemplo:** `www.casamentoisabelaejoao.com.br`

**Como configurar:**
1. Compre um domínio (Registro.br, GoDaddy, etc.)
2. Na plataforma de deploy, vá em **Domain Settings**
3. Adicione seu domínio
4. Configure o DNS conforme instruções

---

## ⚠️ Importante: Google Sheets API

**Após o deploy, você precisa:**

1. Verificar se a URL do Google Script está correta no `config.js`
2. Testar se as confirmações estão sendo salvas
3. A URL do Google Script funciona de qualquer lugar (não precisa mudar nada)

---

## 🎯 Recomendação Final

**Para iniciantes:** Use **Netlify** (mais fácil, drag and drop)

**Para quem usa Git:** Use **GitHub Pages** (gratuito e profissional)

**Para performance:** Use **Vercel** ou **Firebase** (mais rápido)

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas em qualquer passo, me avise que eu ajudo!
