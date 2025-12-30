const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>AWS Elastic Beanstalk</title>
      <style>
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Arial', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h1 {
          font-size: 3em;
          margin-bottom: 20px;
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff; }
          to { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff; }
        }
        .subtitle {
          font-size: 1.5em;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello Devs! 🚀</h1>
        <p class="subtitle">Welcome to AWS Elastic Beanstalk with Express.js</p>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
