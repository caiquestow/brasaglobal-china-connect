import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, language, source } = req.body;

    // Validação dos campos obrigatórios
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('Variáveis de ambiente não configuradas:', {
        ZOHO_EMAIL: !!process.env.ZOHO_EMAIL,
        ZOHO_PASSWORD: !!process.env.ZOHO_PASSWORD
      });
      return res.status(500).json({ 
        message: 'Email service not configured',
        error: 'Missing environment variables'
      });
    }

    console.log('Tentando enviar email com:', {
      from: process.env.ZOHO_EMAIL,
      to: 'contato@brasaglobalmeats.com',
      name,
      email
    });

    // Configuração do transporter do Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      // Adicionar timeout e logging
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    // Verificar conexão SMTP
    try {
      await transporter.verify();
      console.log('Conexão SMTP verificada com sucesso');
    } catch (verifyError) {
      console.error('Erro na verificação SMTP:', verifyError);
      return res.status(500).json({ 
        message: 'SMTP connection failed',
        error: verifyError.message
      });
    }

    // Configuração do email
    // Usamos replyTo para manter a funcionalidade do "Responder", mas com template limpo
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'contato@brasaglobalmeats.com',
      replyTo: email, // Mantém o "Responder" funcionando
      subject: `[SITE] Nova mensagem de contato - ${name}`,
      headers: {
        'X-Contact-Email': email,
        'X-Contact-Name': name,
        'X-Contact-Company': company || 'Não informado',
        'X-Contact-Language': language || 'pt',
        'X-Contact-Source': source || 'Site'
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nova Mensagem do Site</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Nova Mensagem do Site</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Brasa Global China Connect</p>
            </div>
          
            <!-- Conteúdo Principal -->
            <div style="padding: 30px;">
              <h2 style="color: #333; margin-bottom: 25px; font-size: 22px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                📋 Detalhes do Contato
              </h2>
              
              <!-- Informações do Cliente -->
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #667eea;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 8px; height: 8px; background: #667eea; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #374151; min-width: 80px;">Nome:</strong>
                  <span style="color: #111827; margin-left: 10px; font-weight: 500;">${name}</span>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 8px; height: 8px; background: #667eea; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #374151; min-width: 80px;">Email:</strong>
                  <span style="color: #111827; margin-left: 10px; font-weight: 500;">${email}</span>
                </div>
                
                ${company ? `
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 8px; height: 8px; background: #667eea; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #374151; min-width: 80px;">Empresa:</strong>
                  <span style="color: #111827; margin-left: 10px; font-weight: 500;">${company}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 8px; height: 8px; background: #667eea; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #374151; min-width: 80px;">Idioma:</strong>
                  <span style="color: #111827; margin-left: 10px; font-weight: 500;">${language === 'pt' ? 'Português' : language === 'en' ? 'English' : '中文'}</span>
                </div>
              </div>
              
              <!-- Mensagem do Cliente -->
              <div style="margin-bottom: 25px;">
                <h3 style="color: #374151; margin-bottom: 15px; font-size: 18px;">💬 Mensagem:</h3>
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; color: #111827; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <!-- Informações Adicionais -->
              <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e40af; margin-bottom: 15px; font-size: 18px;">ℹ️ Informações Adicionais</h3>
                <div style="color: #1e40af; font-size: 14px;">
                  <p style="margin: 5px 0;"><strong>Origem:</strong> ${source || 'Site'}</p>
                  <p style="margin: 5px 0;"><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
                </div>
              </div>
            </div>
          
            <!-- Footer com Informações de Contato -->
            <div style="background: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">
                Esta mensagem foi enviada automaticamente pelo formulário de contato do site.
              </p>
              
              <div style="background: #dbeafe; padding: 20px; border-radius: 8px; border: 2px solid #3b82f6; margin: 15px 0;">
                <h3 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px;">📧 Contato Direto</h3>
                <p style="margin: 10px 0; color: #1e40af; font-size: 16px;">
                  <strong>Email do cliente:</strong> <span style="color: #dc2626; font-weight: 600;">${email}</span>
                </p>
                <p style="margin: 10px 0; color: #1e40af; font-size: 14px;">
                  💡 <strong>Dica:</strong> Clique em "Responder" para enviar direto para o cliente!
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nova Mensagem do Site - Brasa Global China Connect

Detalhes do Contato:
Nome: ${name}
Email: ${email}
${company ? `Empresa: ${company}` : ''}

Mensagem:
${message}

Informações Adicionais:
- Idioma do site: ${language === 'pt' ? 'Português' : language === 'en' ? 'English' : '中文'}
- Origem: ${source || 'Site'}
- Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

Esta mensagem foi enviada automaticamente pelo formulário de contato do site.

📧 INFORMAÇÕES PARA CONTATO DIRETO:
Nome: ${name}
Email: ${email}
${company ? `Empresa: ${company}` : ''}
Idioma: ${language === 'pt' ? 'Português' : language === 'en' ? 'English' : '中文'}

💡 DICA: Para responder ao cliente, use o email: ${email}
      `,
    };

    console.log('Enviando email...');
    
    // Envio do email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado com sucesso:', {
      messageId: info.messageId,
      response: info.response
    });

    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    
    res.status(500).json({ 
      message: 'Failed to send email',
      error: error.message,
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
}
