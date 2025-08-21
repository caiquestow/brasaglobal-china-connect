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
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'contato@brasaglobalmeats.com',
      subject: `[SITE] Nova mensagem de contato - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nova Mensagem do Site</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Brasa Global China Connect</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px;">Detalhes do Contato</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Nome:</strong>
              <span style="color: #333; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${email}</span>
            </div>
            
            ${company ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Empresa:</strong>
              <span style="color: #333; margin-left: 10px;">${company}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Mensagem:</strong>
              <div style="color: #333; margin-top: 10px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: #e8f4fd; border-radius: 4px; border-left: 4px solid #2196f3;">
              <strong style="color: #1976d2;">Informações Adicionais:</strong>
              <ul style="margin: 10px 0; color: #1976d2;">
                <li>Idioma do site: ${language || 'Não especificado'}</li>
                <li>Origem: ${source || 'Site'}</li>
                <li>Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>Esta mensagem foi enviada automaticamente pelo formulário de contato do site.</p>
            <p>Para responder, use o email: ${email}</p>
          </div>
        </div>
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
- Idioma do site: ${language || 'Não especificado'}
- Origem: ${source || 'Site'}
- Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

Esta mensagem foi enviada automaticamente pelo formulário de contato do site.
Para responder, use o email: ${email}
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
