// Definimos las traducciones para cada idioma
const translations = {
    es: {
        greeting: "¡Hola! Soy Alex Reyna, parte del equipo de AFRM Studio.",
        services: "Nos apasiona ayudar a emprendedores y empresas a crear una presencia online auténtica y efectiva. En AFRM Studio, ofrecemos una gama de servicios diseñados para ayudarte a destacar en el mundo digital, desde diseño web personalizado hasta estrategias de branding que realmente conectan con tu audiencia.",
        animatedText: "Te ayudamos a crear experiencias online memorables.",
        servicesTitle: "Nuestros Servicios",
        servicesDescription: "En AFRM Studio, ofrecemos una gama de servicios para ayudarte a crear una presencia online atractiva y funcional.",
        contactInfo: "Si quieres crear algo único e impactante, ¡estás en el lugar correcto!",
        followUs: "Síguenos",
        whatWeDo: "¿Qué hacemos por ti?",
        formLabels: {
            name: "Nombre:",
            email: "Email:",
            message: "Mensaje:",
            submit: "Enviar mensaje"
        },
        servicesList: {
            webDesign: "Diseño Web Personalizado: Creamos sitios web adaptados a tu estilo y necesidades, asegurando una experiencia visual y funcional impecable.",
            landingPages: "Landing Pages Optimizada para Conversiones: Diseño de **landing pages** que no solo atraen visitantes, sino que convierten. ¡Potencia tus ventas!",
            seoMarketing: "SEO y Marketing Digital: Mejoramos tu visibilidad en los motores de búsqueda y te ayudamos a atraer más clientes a tu negocio.",
            brandingConsulting: "Consultoría en Branding y Estrategia Digital: Desarrollamos tu marca online con un enfoque estratégico que te posiciona como líder en tu industria.",
            logoCreation: "Creación de Logos y Branding: Creamos logos personalizados que capturan la esencia de tu marca, asegurando una identidad visual coherente y única."
        }
    },
    en: {
        greeting: "Hi! I'm Alex Reyna, part of the AFRM Studio team.",
        services: "We're passionate about helping entrepreneurs and businesses create an authentic and effective online presence. At AFRM Studio, we offer a range of services designed to help you stand out in the digital world, from custom web design to branding strategies that truly connect with your audience.",
        animatedText: "We help you create memorable online experiences.",
        servicesTitle: "Our Services",
        servicesDescription: "At AFRM Studio, we offer a range of services to help you create an attractive and functional online presence.",
        contactInfo: "If you want to create something unique and impactful, you're in the right place!",
        followUs: "Follow us",
        whatWeDo: "What do we do for you?",
        formLabels: {
            name: "Name:",
            email: "Email:",
            message: "Message:",
            submit: "Submit message"
        },
        servicesList: {
            webDesign: "Custom Web Design: We create websites tailored to your style and needs, ensuring a flawless visual and functional experience.",
            landingPages: "Landing Pages Optimized for Conversions: We design **landing pages** that not only attract visitors but also convert them. Boost your sales!",
            seoMarketing: "SEO and Digital Marketing: We improve your visibility on search engines and help you attract more customers to your business.",
            brandingConsulting: "Branding and Digital Strategy Consulting: We develop your online brand with a strategic approach that positions you as a leader in your industry.",
            logoCreation: "Logo and Branding Creation: We create custom logos that capture the essence of your brand, ensuring a coherent and unique visual identity."
        }
    },
    it: {
        greeting: "Ciao! Sono Alex Reyna, parte del team di AFRM Studio.",
        services: "Siamo appassionati di aiutare imprenditori e aziende a creare una presenza online autentica ed efficace. In AFRM Studio, offriamo una gamma di servizi progettati per aiutarti a distinguerti nel mondo digitale, dalla progettazione web personalizzata alle strategie di branding che davvero connettono con il tuo pubblico.",
        animatedText: "Ti aiutiamo a creare esperienze online memorabili.",
        servicesTitle: "I Nostri Servizi",
        servicesDescription: "In AFRM Studio, offriamo una gamma di servizi per aiutarti a creare una presenza online attraente e funzionale.",
        contactInfo: "Se vuoi creare qualcosa di unico e impattante, sei nel posto giusto!",
        followUs: "Seguici",
        whatWeDo: "Cosa facciamo per te?",
        formLabels: {
            name: "Nome:",
            email: "Email:",
            message: "Messaggio:",
            submit: "Invia messaggio"
        },
        servicesList: {
            webDesign: "Design Web Personalizzato: Creiamo siti web su misura per il tuo stile e le tue esigenze, garantendo un'esperienza visiva e funzionale impeccabile.",
            landingPages: "Landing Pages Ottimizzate per Conversioni: Progettiamo **landing pages** che non solo attraggono i visitatori, ma li convertono. Potenzia le tue vendite!",
            seoMarketing: "SEO e Marketing Digitale: Miglioriamo la tua visibilità sui motori di ricerca e ti aiutiamo ad attirare più clienti nel tuo business.",
            brandingConsulting: "Consulenza in Branding e Strategia Digitale: Sviluppiamo il tuo marchio online con un approccio strategico che ti posiziona come leader nel tuo settore.",
            logoCreation: "Creazione di Logo e Branding: Creiamo loghi personalizzati che catturano l'essenza del tuo marchio, garantendo un'identità visiva coerente e unica."
        }
    },
    de: {
        greeting: "Hallo! Ich bin Alex Reyna, Teil des AFRM Studio-Teams.",
        services: "Wir sind leidenschaftlich daran interessiert, Unternehmern und Unternehmen zu helfen, eine authentische und effektive Online-Präsenz zu schaffen. Bei AFRM Studio bieten wir eine Reihe von Dienstleistungen an, die darauf ausgelegt sind, dir zu helfen, in der digitalen Welt hervorzutreten, von maßgeschneidertem Webdesign bis hin zu Branding-Strategien, die wirklich mit deinem Publikum verbinden.",
        animatedText: "Wir helfen dir, unvergessliche Online-Erlebnisse zu schaffen.",
        servicesTitle: "Unsere Dienstleistungen",
        servicesDescription: "Bei AFRM Studio bieten wir eine Reihe von Dienstleistungen an, um dir zu helfen, eine attraktive und funktionale Online-Präsenz zu schaffen.",
        contactInfo: "Wenn du etwas Einzigartiges und Beeindruckendes erschaffen möchtest, bist du hier genau richtig!",
        followUs: "Folge uns",
        whatWeDo: "Was tun wir für dich?",
        formLabels: {
            name: "Name:",
            email: "E-Mail:",
            message: "Nachricht:",
            submit: "Nachricht senden"
        },
        servicesList: {
            webDesign: "Individuelles Webdesign: Wir erstellen maßgeschneiderte Webseiten, die deinem Stil und deinen Bedürfnissen entsprechen und eine makellose visuelle und funktionale Erfahrung bieten.",
            landingPages: "Landing Pages Optimiert für Konversionen: Wir entwerfen **Landing Pages**, die nicht nur Besucher anziehen, sondern sie auch in Kunden umwandeln. Steigere deine Verkäufe!",
            seoMarketing: "SEO und digitales Marketing: Wir verbessern deine Sichtbarkeit in Suchmaschinen und helfen dir, mehr Kunden für dein Unternehmen zu gewinnen.",
            brandingConsulting: "Branding- und Digitalstrategie-Beratung: Wir entwickeln deine Online-Marke mit einem strategischen Ansatz, der dich als Marktführer positioniert.",
            logoCreation: "Logo- und Branding-Erstellung: Wir erstellen maßgeschneiderte Logos, die das Wesen deiner Marke einfangen und eine kohärente und einzigartige visuelle Identität gewährleisten."
        }
    }
};

// Función para cambiar el idioma de la página
function setLanguage(language) {
    // Cambiar los textos en la página al idioma seleccionado
    document.getElementById("greeting").textContent = translations[language].greeting;
    document.getElementById("services").textContent = translations[language].services;
    document.getElementById("animated-text").textContent = translations[language].animatedText;
    document.getElementById("services-title").textContent = translations[language].servicesTitle;
    document.getElementById("services-description").textContent = translations[language].servicesDescription;
    document.getElementById("contact-info").textContent = translations[language].contactInfo;
    document.getElementById("follow-us").textContent = translations[language].followUs;
    document.getElementById("what-we-do").textContent = translations[language].whatWeDo;

    // Cambiar las etiquetas del formulario
    document.getElementById("label-name").textContent = translations[language].formLabels.name;
    document.getElementById("label-email").textContent = translations[language].formLabels.email;
    document.getElementById("label-message").textContent = translations[language].formLabels.message;
    document.getElementById("button-submit").textContent = translations[language].formLabels.submit;

    // Actualizar los servicios
    document.getElementById("service-web-design").textContent = translations[language].servicesList.webDesign;
    document.getElementById("service-landing-pages").textContent = translations[language].servicesList.landingPages;
    document.getElementById("service-seo-marketing").textContent = translations[language].servicesList.seoMarketing;
    document.getElementById("service-branding-consulting").textContent = translations[language].servicesList.brandingConsulting;
    document.getElementById("service-logo-creation").textContent = translations[language].servicesList.logoCreation;
}
