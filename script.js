// Botao buka/tutup Projetu
const botaoProjetu = document.getElementById('botaoProjetu');
const konteúduProjetu = document.querySelector('.konteúdu-sembunyi');

botaoProjetu.addEventListener('click', function() {
    if (konteúduProjetu.style.display === 'block') {
        konteúduProjetu.style.display = 'none';
        botaoProjetu.textContent = 'Hare Detallu Projetu';
    } else {
        konteúduProjetu.style.display = 'block';
        botaoProjetu.textContent = 'Subar Detallu';
    }
});

// Botao buka/tutup Grupu
const botaoGrupu = document.getElementById('botaoGrupu');
const kontenGrupu = document.getElementById('kontenGrupu');

botaoGrupu.addEventListener('click', function() {
    if (kontenGrupu.style.display === 'none') {
        kontenGrupu.style.display = 'grid';
        botaoGrupu.textContent = 'Subar Membru Grupu';
    } else {
        kontenGrupu.style.display = 'none';
        botaoGrupu.textContent = 'Hare Membru Grupu';
    }
});

// Botao Saudasaun
const botaoSaudasaun = document.getElementById('botao-saudasaun');
const mensajemSaudasaun = document.getElementById('mensajem-saudasaun');

botaoSaudasaun.addEventListener('click', function() {
    mensajemSaudasaun.style.display = 'block';
    setTimeout(() => {
        mensajemSaudasaun.style.display = 'none';
    }, 4500);
});

// Animasaun quando rola pájina
const seksaun = document.querySelectorAll('.seksaun');
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.15 });

seksaun.forEach(seks => observador.observe(seks));

// Navegasaun suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});