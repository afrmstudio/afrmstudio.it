const languages = {
    es: {
        greeting: "Hola, soy Alex Reyna, la mente creativa detrás de AFRM Studio...",
        services: "Ofrecemos una variedad de servicios para ayudarte a construir tu presencia online...",
        animatedText: "Te ayudamos a crear experiencias online memorables.",
        servicesTitle: "Nuestros Servicios",
        servicesDescription: "En AFRM Studio, ofrecemos una gama de servicios...",
        contactInfo: "Si quieres crear algo único e impactante...",
        labelName: "Nombre:",
        labelEmail: "Email:",
        labelMessage: "Mensaje:",
        buttonSubmit: "Enviar mensaje",
        followUs: "Síguenos"
    },
    en: {
        greeting: "Hi, I'm Alex Reyna, the creative mind behind AFRM Studio...",
        services: "We offer a variety of services to help you build your online presence...",
        animatedText: "We help you create memorable online experiences.",
        servicesTitle: "Our Services",
        servicesDescription: "At AFRM Studio, we offer a range of services...",
        contactInfo: "If you want to create something unique and impactful...",
        labelName: "Name:",
        labelEmail: "Email:",
        labelMessage: "Message:",
        buttonSubmit: "Send message",
        followUs: "Follow Us"
    },
    it: {
        greeting: "Ciao, sono Alex Reyna, la mente creativa dietro AFRM Studio...",
        services: "Offriamo una varietà di servizi per aiutarti a costruire la tua presenza online...",
        animatedText: "Ti aiutiamo a creare esperienze online memorabili.",
        servicesTitle: "I Nostri Servizi",
        servicesDescription: "In AFRM Studio, offriamo una gamma di servizi...",
        contactInfo: "Se vuoi creare qualcosa di unico e impattante...",
        labelName: "Nome:",
        labelEmail: "Email:",
        labelMessage: "Messaggio:",
        buttonSubmit: "Invia Messaggio",
        followUs: "Seguici"
    },
    de: {
        greeting: "Hallo, ich bin Alex Reyna, der kreative Kopf hinter AFRM Studio...",
        services: "Wir bieten eine Reihe von Dienstleistungen an, um Ihnen zu helfen, Ihre Online-Präsenz aufzubauen...",
        animatedText: "Wir helfen Ihnen, unvergessliche Online-Erlebnisse zu schaffen.",
        servicesTitle: "Unsere Dienstleistungen",
        servicesDescription: "Bei AFRM Studio bieten wir eine Reihe von Dienstleistungen an...",
        contactInfo: "Wenn Sie etwas Einzigartiges und Beeindruckendes schaffen möchten...",
        labelName: "Name:",
        labelEmail: "Email:",
        labelMessage: "Nachricht:",
        buttonSubmit: "Nachricht senden",
        followUs: "Folge uns"
    }
};

function setLanguage(language) {
    localStorage.setItem('language', language); // Guardamos el idioma en el localStorage

    document.getElementById('greeting').innerText = languages[language].greeting;
    document.getElementById('services').innerText = languages[language].services;
    document.getElementById('animated-text').innerText = languages[language].animatedText;
    document.getElementById('services-title').innerText = languages[language].servicesTitle;
    document.getElementById('services-description').innerText = languages[language].servicesDescription;
    document.getElementById('contact-info').innerText = languages[language].contactInfo;
    document.getElementById('label-name').innerText = languages[language].labelName;
    document.getElementById('label-email').innerText = languages[language].labelEmail;
    document.getElementById('label-message').innerText = languages[language].labelMessage;
    document.getElementById('button-submit').innerText = languages[language].buttonSubmit;
    document.getElementById('follow-us').innerText = languages[language].followUs;
}

// Al cargar la página, revisamos si hay un idioma guardado en el localStorage
window.onload = function () {
    const savedLanguage = localStorage.getItem('language') || 'es'; // Si no hay idioma guardado, ponemos español por defecto
    setLanguage(savedLanguage);
};
