export default async function handler(req, res) {
  try {
    // Verificar variáveis de ambiente
    const envCheck = {
      ZOHO_EMAIL: process.env.ZOHO_EMAIL ? '✅ Configurado' : '❌ Não configurado',
      ZOHO_PASSWORD: process.env.ZOHO_PASSWORD ? '✅ Configurado' : '❌ Não configurado',
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV
    };

    res.status(200).json({
      message: 'API de teste funcionando',
      environment: envCheck,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro no teste',
      error: error.message
    });
  }
}
