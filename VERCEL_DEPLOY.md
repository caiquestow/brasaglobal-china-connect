# Deploy no Vercel - Brasa Global China Connect

## Pré-requisitos

1. ✅ Conta no Vercel (https://vercel.com)
2. ✅ Conta no GitHub com o projeto
3. ✅ Configuração do Zoho para emails
4. ✅ Variáveis de ambiente configuradas

## Passo a Passo para Deploy

### 1. Preparar o Projeto

```bash
# Certifique-se de que todas as alterações estão commitadas
git add .
git commit -m "feat: implementa envio de emails do formulário de contato"
git push origin main
```

### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **New Project**
4. Selecione o repositório `brasaglobal-china-connect`
5. Clique em **Import**

### 3. Configurar o Projeto

#### Build Settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### Environment Variables:
Clique em **Environment Variables** e adicione:

```bash
ZOHO_EMAIL=seu_email@zoho.com
ZOHO_PASSWORD=sua_senha_de_app
SITE_URL=https://seu-dominio.vercel.app
```

### 4. Deploy

1. Clique em **Deploy**
2. Aguarde o build e deploy
3. Anote a URL gerada (ex: `https://brasaglobal-china-connect.vercel.app`)

### 5. Configurar Domínio Personalizado (Opcional)

1. Vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruções do Vercel

## Estrutura de Arquivos no Vercel

```
/
├── index.html
├── src/
│   ├── components/
│   │   └── Contact.tsx (formulário atualizado)
│   └── ...
├── api/
│   └── contact.js (API route para emails)
├── vercel.json (configuração do Vercel)
└── package.json
```

## Teste Pós-Deploy

1. Acesse o site no Vercel
2. Vá para a seção de contato
3. Preencha o formulário
4. Envie uma mensagem
5. Verifique se o email foi recebido em `contato@brasaglobalmeats.com`

## Monitoramento

### Logs do Vercel:
- Acesse o dashboard do projeto
- Vá em **Functions** > **api/contact.js**
- Verifique os logs de execução

### Métricas:
- **Deploy Status:** Sucesso/Falha
- **Function Calls:** Número de envios de email
- **Response Time:** Tempo de resposta da API
- **Error Rate:** Taxa de erro

## Solução de Problemas Comuns

### Build Falha
- Verifique se todas as dependências estão no `package.json`
- Confirme se o comando de build está correto
- Verifique os logs de erro

### API não funciona
- Confirme se as variáveis de ambiente estão configuradas
- Verifique se o arquivo `vercel.json` está correto
- Teste a API localmente primeiro

### Emails não são enviados
- Verifique as credenciais do Zoho
- Confirme se a porta SMTP está correta
- Verifique os logs da função no Vercel

## Atualizações

Para atualizar o site:

```bash
git add .
git commit -m "descrição da atualização"
git push origin main
```

O Vercel fará deploy automático a cada push para a branch `main`.

## Custos

- **Plano Gratuito:** 100GB de banda/mês
- **Hobby:** $20/mês para mais recursos
- **Pro:** $20/mês por usuário

## Suporte

- **Documentação:** [vercel.com/docs](https://vercel.com/docs)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status:** [vercel-status.com](https://vercel-status.com)
