# app---receitas---medicas
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🩺 RenovaReceitas - App Médico</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 500px; margin: 0 auto; }
        .card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .logo { text-align: center; margin-bottom: 20px; }
        .logo h1 { color: #333; font-size: 28px; }
        .step { display: none; animation: fadeIn 0.5s; }
        .step.active { display: block; }
        .btn { background: #667eea; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-size: 16px; cursor: pointer; width: 100%; margin: 10px 0; }
        .btn:hover { background: #5a6fd8; }
        .input-group { margin: 15px 0; }
        input, textarea { width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; }
        input:focus, textarea:focus { border-color: #667eea; outline: none; }
        .pix-code { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; font-family: monospace; margin: 15px 0; }
        .status { padding: 10px; margin: 5px 0; border-radius: 5px; }
        .status.pending { background: #fff3cd; border-left: 4px solid #ffc107; }
        .status.completed { background: #d1edff; border-left: 4px solid #007bff; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="logo">
                <h1>🩺 RenovaReceitas</h1>
                <p>Renovação de receitas médicas online</p>
            </div>

            <!-- Passo 1: Dados Pessoais -->
            <div id="step1" class="step active">
                <h2>Seus Dados</h2>
                <div class="input-group">
                    <input type="text" id="nome" placeholder="Nome completo" required>
                </div>
                <div class="input-group">
                    <input type="email" id="email" placeholder="E-mail" required>
                </div>
                <div class="input-group">
                    <input type="text" id="cpf" placeholder="CPF" required>
                </div>
                <button class="btn" onclick="showStep(2)">Continuar</button>
            </div>

            <!-- Passo 2: Descrição -->
            <div id="step2" class="step">
                <h2>O que precisa renovar?</h2>
                <div class="input-group">
                    <textarea id="descricao" placeholder="Descreva detalhadamente as receitas ou relatórios que precisam de renovação..." rows="4" required></textarea>
                </div>
                <button class="btn" onclick="showStep(3)">Continuar para Pagamento</button>
            </div>

            <!-- Passo 3: Pagamento -->
            <div id="step3" class="step">
                <h2>Pagamento via PIX</h2>
                <p style="text-align: center; font-size: 24px; margin: 10px 0;">R$ 59,99</p>
                
                <div class="pix-code">
                    <strong>Chave PIX:</strong><br>
                    00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-426614174000
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <div style="width: 200px; height: 200px; background: #f0f0f0; margin: 0 auto; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                        [QR CODE PIX]
                    </div>
                </div>
                
                <button class="btn" onclick="processarPagamento()">Já efetuei o pagamento</button>
            </div>

            <!-- Passo 4: Confirmação -->
            <div id="step4" class="step">
                <h2 style="text-align: center; color: #28a745;">✅ Pedido Confirmado!</h2>
                
                <div class="status completed">
                    <strong>📋 Dados recebidos</strong>
                    <p>Seus dados foram registrados com sucesso</p>
                </div>
                
                <div class="status completed">
                    <strong>💳 Pagamento confirmado</strong>
                    <p>Pagamento PIX de R$ 59,99 aprovado</p>
                </div>
                
                <div class="status pending">
                    <strong>👨‍⚕️ Em análise médica</strong>
                    <p>Médico responsável está revisando seu caso</p>
                </div>
                
                <div class="status pending">
                    <strong>📄 Assinatura digital</strong>
                    <p>Documentos serão assinados digitalmente</p>
                </div>
                
                <div class="status pending">
                    <strong>📧 Envio por e-mail</strong>
                    <p>Você receberá os documentos em: <span id="email-confirmacao"></span></p>
                </div>
                
                <button class="btn" onclick="showStep(1)" style="background: #6c757d;">Fazer Novo Pedido</button>
            </div>
        </div>
    </div>

    <script>
        function showStep(stepNumber) {
            // Esconder todos os passos
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            
            // Mostrar passo atual
            document.getElementById('step' + stepNumber).classList.add('active');
            
            // Atualizar e-mail na confirmação
            if (stepNumber === 4) {
                document.getElementById('email-confirmacao').textContent = document.getElementById('email').value;
            }
        }

        function processarPagamento() {
            // Simular processamento do pagamento
            setTimeout(() => {
                showStep(4);
            }, 2000);
        }

        // Validação de CPF
        document.getElementById('cpf').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2')
                            .replace(/(\d{3})(\d)/, '$1.$2')
                            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                e.target.value = value;
            }
        });
    </script>
</body>
</html>
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Rota principal - servir o frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API para processar solicitações
app.post('/api/solicitacao', (req, res) => {
    const { nome, email, cpf, descricao } = req.body;
    
    console.log('📥 Nova solicitação recebida:', { nome, email, cpf });
    
    // Simular processamento
    const numeroPedido = 'REC' + Date.now();
    
    // Resposta de sucesso
    res.json({
        success: true,
        pedido: numeroPedido,
        mensagem: 'Solicitação recebida com sucesso! Aguarde a análise médica.',
        timestamp: new Date().toISOString()
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: '✅ ONLINE', 
        servico: 'RenovaReceitas API',
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 Servidor RenovaReceitas iniciado!');
    console.log(`📧 URL: http://localhost:${PORT}`);
    console.log(`❤️  Health: http://localhost:${PORT}/health`);
});
{
  "name": "app-receitas-medicas",
  "version": "1.0.0",
  "description": "App para renovação de receitas médicas com PIX",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "forwardPorts": [3000],
  "portsAttributes": {
    "3000": {
      "label": "RenovaReceitas App",
      "onAutoForward": "openPreview"
    }
  },
  "postCreateCommand": "npm install",
  "postStartCommand": "npm start",
  "customizations": {
    "vscode": {
      "extensions": [
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss"
      ]
    }
  }
}
