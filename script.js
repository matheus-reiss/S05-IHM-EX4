document.addEventListener('DOMContentLoaded', function() {
    // Código existente
    const settingsIcon = document.getElementById('settings-icon');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('inatelAppTheme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
    
    // Menu de temas
    settingsIcon.addEventListener('click', function() {
        if (themeMenu.style.display === 'block') {
            themeMenu.style.display = 'none';
        } else {
            themeMenu.style.display = 'block';
        }
    });
    
    // Trocar tema ao clicar nas opções
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.body.className = theme;
            
            // Salvar tema no localStorage
            localStorage.setItem('inatelAppTheme', theme);
            
            // Fechar menu após selecionar
            themeMenu.style.display = 'none';
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!settingsIcon.contains(event.target) && !themeMenu.contains(event.target)) {
            themeMenu.style.display = 'none';
        }
    });

    // Carregar tema salvo após iniciar a página
    window.addEventListener('load', function() {
        const savedTheme = localStorage.getItem('inatelAppTheme');
        if (savedTheme) {
            document.body.className = savedTheme;
        }
    });
    
    // Código do carrossel de notícias
    const eventos = [
        {
            id: 1,
            title: 'Semana do Software 2025',
            date: '12/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'tech',
            description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 2,
            title: 'Workshop de IoT',
            date: '12/01',
            time: '08:00',
            location: 'Laboratório CS&I',
            type: 'tech',
            description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 3,
            title: 'Festa dos Alunos 2025',
            date: '18/05',
            time: '19:00',
            location: 'Área Esportiva do Inatel',
            type: 'cultural',
            description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 4,
            title: 'Feira de Oportunidades',
            date: '04/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'academic',
            description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
        }
    ];
    
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    
    // Adicionar os cards ao carrossel
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>
                    <span class="material-icons-outlined icon">event</span> ${event.date} às ${event.time}
                    <span class="material-icons-outlined icon">location_on</span> ${event.location}
                </p>
            </div>
        `;
        carousel.appendChild(card);
    });
    
    // Função para atualizar o carrossel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Evento de clique para o botão anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Evento de clique para o botão seguinte
    nextBtn.addEventListener('click', () => {
        if (currentIndex < eventos.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Inicializar o carrossel
    updateCarousel();
});