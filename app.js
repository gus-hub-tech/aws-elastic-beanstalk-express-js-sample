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
          font-size: 5em;
          background: linear-gradient(45deg, #ff0080, #00ff80, #8000ff, #ff8000, #0080ff);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 2s ease-in-out infinite, bounce 3s ease-in-out infinite, rotate 10s linear infinite;
          margin-bottom: 30px;
          text-shadow: 0 0 50px rgba(255,255,255,0.8);
          transform-origin: center;
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes rotate {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .subtitle {
          color: #00ff88;
          font-size: 2.2em;
          margin-bottom: 30px;
          animation: typewriter 4s steps(40) 1s both, neonGlow 2s ease-in-out infinite alternate;
          border-right: 3px solid #00ff88;
          white-space: nowrap;
          overflow: hidden;
        }
        @keyframes neonGlow {
          from { 
            text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88;
            color: #00ff88;
          }
          to { 
            text-shadow: 0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00ff88, 0 0 50px #00ff88;
            color: #66ffaa;
          }
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
          transition: all 0.3s ease;
          animation: float 4s ease-in-out infinite;
        }
        .stat-box:nth-child(1) { animation-delay: 0s; }
        .stat-box:nth-child(2) { animation-delay: 1.3s; }
        .stat-box:nth-child(3) { animation-delay: 2.6s; }
        .stat-box:hover {
          transform: translateY(-20px) scale(1.15) rotateZ(5deg);
          box-shadow: 0 30px 60px rgba(0,255,136,0.5);
          border-color: #ff6b6b;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(2deg); }
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
          padding: 20px 40px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #ff6b6b);
          background-size: 200% 200%;
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.5em;
          font-weight: bold;
          cursor: pointer;
          animation: pulse 1.5s infinite, wiggle 3s ease-in-out infinite, bgShift 2s ease-in-out infinite;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .pulse-btn:hover {
          transform: scale(1.2) rotateZ(-5deg);
          box-shadow: 0 0 50px rgba(255,107,107,0.8), 0 0 100px rgba(76,236,196,0.6);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,107,107,0.9); }
          70% { box-shadow: 0 0 0 30px rgba(255,107,107,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,107,0); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotateZ(0deg); }
          25% { transform: rotateZ(2deg); }
          75% { transform: rotateZ(-2deg); }
        }
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      </style>
    </head>
    <body>
      <div class="stars"></div>
      <div class="container">
        <h1 class="title">🚀 MEGA AWESOME AWS PIPELINE 🚀</h1>
        <p class="subtitle">⚡ SUPER POWERED BY ELASTIC BEANSTALK ⚡</p>
        
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
        
        <button class="pulse-btn" onclick="celebrate()">🎆 EPIC DEPLOY SUCCESS! 🎆</button>
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
