const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>🚀 AWS DevOps Pipeline</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: #0a0a0a;
          font-family: 'Courier New', monospace;
          overflow: hidden;
          height: 100vh;
        }
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
        .title {
          font-size: 4em;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 3s ease-in-out infinite;
          margin-bottom: 20px;
          text-shadow: 0 0 30px rgba(255,255,255,0.5);
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .subtitle {
          color: #00ff88;
          font-size: 1.8em;
          margin-bottom: 30px;
          animation: typewriter 4s steps(40) 1s both;
          border-right: 3px solid #00ff88;
          white-space: nowrap;
          overflow: hidden;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
        }
        .stat-box {
          background: rgba(255,255,255,0.1);
          border: 2px solid #00ff88;
          border-radius: 15px;
          padding: 20px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }
        .stat-box:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,255,136,0.3);
        }
        .stat-number {
          font-size: 2.5em;
          color: #ff6b6b;
          font-weight: bold;
        }
        .stat-label {
          color: #ffffff;
          font-size: 1.2em;
          margin-top: 10px;
        }
        .pulse-btn {
          margin-top: 40px;
          padding: 15px 30px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.3em;
          font-weight: bold;
          cursor: pointer;
          animation: pulse 2s infinite;
          transition: all 0.3s ease;
        }
        .pulse-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(255,107,107,0.6);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,107,107,0.7); }
          70% { box-shadow: 0 0 0 20px rgba(255,107,107,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,107,0); }
        }
      </style>
    </head>
    <body>
      <div class="stars"></div>
      <div class="container">
        <h1 class="title">🚀 AWS DEVOPS PIPELINE 🚀</h1>
        <p class="subtitle">Powered by Elastic Beanstalk & Express.js</p>
        
        <div class="stats">
          <div class="stat-box">
            <div class="stat-number" id="deployments">0</div>
            <div class="stat-label">Deployments</div>
          </div>
          <div class="stat-box">
            <div class="stat-number" id="uptime">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
          <div class="stat-box">
            <div class="stat-number" id="visitors">0</div>
            <div class="stat-label">Visitors</div>
          </div>
        </div>
        
        <button class="pulse-btn" onclick="celebrate()">🎉 DEPLOY SUCCESS! 🎉</button>
      </div>
      
      <script>
        // Create animated stars
        function createStars() {
          const starsContainer = document.querySelector('.stars');
          for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
          }
        }
        
        // Animate counters
        function animateCounter(id, target) {
          const element = document.getElementById(id);
          let current = 0;
          const increment = target / 100;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            element.textContent = Math.floor(current);
          }, 50);
        }
        
        // Celebration effect
        function celebrate() {
          const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
          for (let i = 0; i < 50; i++) {
            setTimeout(() => {
              const confetti = document.createElement('div');
              confetti.style.position = 'fixed';
              confetti.style.left = Math.random() * 100 + 'vw';
              confetti.style.top = '-10px';
              confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + 'px';
              confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
              confetti.style.borderRadius = '50%';
              confetti.style.pointerEvents = 'none';
              confetti.style.zIndex = '1000';
              document.body.appendChild(confetti);
              
              confetti.animate([
                { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
              ], {
                duration: Math.random() * 2000 + 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }).onfinish = () => confetti.remove();
            }, i * 50);
          }
        }
        
        // Initialize
        createStars();
        setTimeout(() => {
          animateCounter('deployments', 42);
          animateCounter('visitors', Math.floor(Math.random() * 1000) + 100);
        }, 2000);
      </script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
