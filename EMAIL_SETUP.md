# Configuração de Envio de Emails - Brasa Global China Connect

## Configuração do Zoho

### 1. Configurar Senha de Aplicativo no Zoho

1. Acesse sua conta Zoho: https://mail.zoho.com/
2. Vá em **Configurações** > **Contas** > **Segurança**
3. Ative a **Autenticação de 2 Fatores** se ainda não estiver ativa
4. Vá em **Senhas de Aplicativo**
5. Clique em **Gerar Nova Senha de Aplicativo**
6. Dê um nome como "Brasa Global Website"
7. Copie a senha gerada (você só verá uma vez!)

### 2. Configurar Variáveis de Ambiente

#### Para Desenvolvimento Local:
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```bash
ZOHO_EMAIL=seu_email@zoho.com
ZOHO_PASSWORD=sua_senha_de_app_gerada
SITE_URL=http://localhost:8080
```

#### Para Produção (Vercel):
1. Acesse o dashboard do Vercel
2. Vá no seu projeto
3. Clique em **Settings** > **Environment Variables**
4. Adicione as mesmas variáveis:
   - `ZOHO_EMAIL`
   - `ZOHO_PASSWORD`
   - `SITE_URL` (URL do seu site no Vercel)

### 3. Configurações SMTP do Zoho

- **Host:** smtp.zoho.com
- **Porta:** 587 (TLS) ou 465 (SSL)
- **Segurança:** STARTTLS ou SSL
- **Usuário:** seu_email@zoho.com
- **Senha:** senha de aplicativo (NÃO sua senha normal)

## Como Funciona

### Formulário de Contato
- Os usuários preenchem o formulário no site
- Os dados são enviados para `/api/contact`
- A API envia um email para `contato@brasaglobalmeats.com`
- O email inclui todas as informações do formulário
- O assunto do email é prefixado com `[SITE]` para identificação

### Estrutura do Email
- **Cabeçalho:** Identificação clara que veio do site
- **Dados do Contato:** Nome, email, empresa, mensagem
- **Informações Adicionais:** Idioma, origem, data/hora
- **Rodapé:** Instruções para resposta

## Teste Local

1. Configure as variáveis de ambiente
2. Execute `npm run dev`
3. Acesse o formulário de contato
4. Preencha e envie uma mensagem
5. Verifique se o email foi recebido em `contato@brasaglobalmeats.com`

## Deploy no Vercel

1. Faça commit das alterações
2. Push para o GitHub
3. Configure as variáveis de ambiente no Vercel
4. Deploy automático será executado
5. Teste o formulário no site em produção

## Solução de Problemas

### Email não é enviado
- Verifique se as variáveis de ambiente estão configuradas
- Confirme se a senha de aplicativo está correta
- Verifique os logs do Vercel para erros

### Erro de autenticação
- Confirme se a autenticação de 2 fatores está ativa
- Use a senha de aplicativo, não a senha normal
- Verifique se o email está correto

### Email não chega
- Verifique a pasta de spam
- Confirme se o email de destino está correto
- Teste com um email diferente primeiro

## Segurança

- ✅ Senha de aplicativo específica para o site
- ✅ Validação de campos obrigatórios
- ✅ Rate limiting (implementar se necessário)
- ✅ Logs de erro para monitoramento
- ✅ Headers de segurança apropriados

## Monitoramento

- Logs de envio de email
- Notificações de erro
- Métricas de uso do formulário
- Backup de mensagens importantes
