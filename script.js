const line1Text = "Happy Birthday";
  const line2Text = " Mr Akin";
  
  document.getElementById("line1").innerHTML = "";
  document.getElementById("line2").innerHTML = "";
  
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < line1Text.length) {
      document.getElementById("line1").innerHTML += line1Text.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      charIndex = 0;
      setTimeout(function() {
        let charIndex2 = 0;
        function typeWriter2() {
          if (charIndex2 < line2Text.length) {
            document.getElementById("line2").innerHTML += line2Text.charAt(charIndex2);
            charIndex2++;
            setTimeout(typeWriter2, 100);
          }
        }
        typeWriter2();
      }, 2000); 
    }
  }
  
  typeWriter();




function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FFC700', '#FF3D00', '#FFEA00', '#00B0FF', '#00FF00'];

    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '0px'; 

        confettiContainer.appendChild(confetti);

        
        const fallDuration = Math.random() * 3 + 2; 
        confetti.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(${window.innerHeight}px)` }
        ], {
            duration: fallDuration * 1000,
            easing: 'linear',
            fill: 'forwards'
        });

    
        setTimeout(() => confetti.remove(), fallDuration * 1000);
    }, 300);
}

createConfetti();

function showFireworks() {
    const colors = ['#daa520', 'ffd700'];
    
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 360,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight - 0.2 },
            colors: [colors[Math.floor(Math.random() * colors.length)]],
        });
    }, 1000); 
}

showFireworks();

const modal = document.getElementById("modal");
const btn = document.getElementById("neon-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
