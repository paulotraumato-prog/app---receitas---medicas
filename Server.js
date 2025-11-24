            <input type="text" placeholder="Nome completo">
            <input type="email" placeholder="E-mail">
            <textarea placeholder="Descreva o que precisa renovar..." rows="4"></textarea>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; text-align: center; margin: 15px 0;">
                <strong>PIX: R$ 59,99</strong><br>
                Chave: 00020126580014br.gov.bcb.pix0136...
            </div>
            
            <button class="btn" onclick="alert('Pedido enviado!')">Enviar Pedido</button>
        </div>
    </body>
    </html>
`);const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>🩺 RenovaReceitas</title>
            <style>
                body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
                .card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .btn { background: #2c7fb8; color: white; padding: 12px; border: none; border-radius: 5px; width: 100%; margin: 10px 0; cursor: pointer; }
                input, textarea { width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🩺 RenovaReceitas</h1>
                <p>Renovação de receitas médicas online</p>
                
                <input type="text" placeholder="Nome completo">
                <input type="email" placeholder="E-mail">
                <textarea placeholder="Descreva o que precisa renovar..." rows="4"></textarea>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; text-align: center; margin: 15px 0;">
                    <strong>PIX: R$ 59,99</strong><br>
                    Chave: 00020126580014br.gov.bcb.pix0136...
                </div>
                
                <button class="btn" onclick="alert('Pedido enviado!')">Enviar Pedido</button>
            </div>
        </body>
        </html>
    `);
});

server.listen(process.env.PORT || 3000, () => {
    console.log('🚀 App rodando!');
});
