// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.backdropFilter = 'blur(10px)';
        navLinks.style.padding = '30px 20px';
        navLinks.style.boxShadow = '0 10px 30px rgba(4, 62, 85, 0.1)';
        navLinks.style.gap = '24px';
        navLinks.style.textAlign = 'center';
        mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            if (window.innerWidth <= 992 && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
            
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Respostas Sociais Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Counters Animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Legal Texts content
const legalTexts = {
    'Políticas de Utilização': `
        <h4>1. Condições Gerais</h4>
        <p>O acesso e a utilização deste website estão sujeitos aos presentes Termos e Condições de Utilização. Ao navegar neste site, o utilizador concorda em cumprir estes termos.</p>
        <h4>2. Propriedade Intelectual</h4>
        <p>Todo o conteúdo presente neste website, incluindo textos, imagens, logótipos e design, é propriedade exclusiva do <strong>Centro Social Nossa Senhora do Extremo (CSNSE)</strong> e está protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização prévia.</p>
        <h4>3. Exatidão da Informação</h4>
        <p>O CSNSE envida todos os esforços para garantir que as informações apresentadas no site são precisas e atualizadas. No entanto, não garantimos a ausência de erros ou omissões.</p>
        <h4>4. Links para Terceiros</h4>
        <p>Este site pode conter links para sites de terceiros. O CSNSE não se responsabiliza pelo conteúdo ou pelas práticas de privacidade desses sites.</p>
    `,
    'Políticas de Privacidade': `
        <h4>1. Responsável pelo Tratamento</h4>
        <p>O <strong>Centro Social Nossa Senhora do Extremo</strong> é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website.</p>
        <h4>2. Recolha e Finalidade</h4>
        <p>Recolhemos dados pessoais apenas quando estritamente necessário (ex: formulários de contacto ou donativos), com a finalidade de responder a pedidos de informação, gerir donativos e comunicar atividades da instituição.</p>
        <h4>3. Segurança dos Dados</h4>
        <p>Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra a perda, uso indevido, acesso não autorizado ou alteração.</p>
        <h4>4. Conservação</h4>
        <p>Os dados pessoais são conservados apenas durante o período necessário para as finalidades para as quais foram recolhidos, ou conforme exigido por lei.</p>
    `,
    'RGPD': `
        <h4>1. Os Seus Direitos (RGPD)</h4>
        <p>Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), assiste-lhe o direito de solicitar ao CSNSE o <strong>acesso</strong> aos dados pessoais que lhe digam respeito, bem como a sua <strong>retificação</strong>, <strong>apagamento</strong>, e a <strong>limitação</strong> do tratamento.</p>
        <h4>2. Retirada de Consentimento</h4>
        <p>Tem o direito de retirar o seu consentimento a qualquer momento, sem comprometer a licitude do tratamento efetuado com base no consentimento previamente dado.</p>
        <h4>3. Como Exercer os Direitos</h4>
        <p>Para exercer os seus direitos, pode contactar-nos através dos meios disponibilizados na secção de contactos do nosso website.</p>
        <h4>4. Reclamações</h4>
        <p>Tem ainda o direito de apresentar reclamação junto da autoridade de controlo competente (Comissão Nacional de Proteção de Dados - CNPD).</p>
    `
};

// Legal Modals Logic
document.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('.legal-modal-trigger');
    const legalModal = document.getElementById('legalModal');
    const closeLegalModal = document.getElementById('closeLegalModal');
    const legalModalTitle = document.getElementById('legalModalTitle');
    const legalModalBody = legalModal ? legalModal.querySelector('.modal-body') : null;

    if(modalTriggers && legalModal && closeLegalModal && legalModalBody) {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const title = trigger.getAttribute('data-title');
                legalModalTitle.textContent = title;
                
                if (legalTexts[title]) {
                    legalModalBody.innerHTML = legalTexts[title];
                }

                legalModal.classList.add('active');
            });
        });

        closeLegalModal.addEventListener('click', () => {
            legalModal.classList.remove('active');
        });

        legalModal.addEventListener('click', (e) => {
            if (e.target === legalModal) {
                legalModal.classList.remove('active');
            }
        });
    }
});
