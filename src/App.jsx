import { useEffect, useState } from 'react';

const img = path => `/assets/web/${path}`;
const icon = file => `/assets/ICONOS/Icono%20seccion%205/${file}`;

const experiences = [
  {
    crop: 'c1',
    title: '01. CALMA',
    text: 'Una experiencia esencial de relajación para regalarte unos minutos sólo para ti.',
  },
  {
    crop: 'c2',
    title: '02. CONEXIÓN',
    text: 'Combina el masaje corporal, con una experiencia de relajación para ojos y cabeza.',
  },
  {
    crop: 'c3',
    title: '03. ALBA',
    text: 'Un recorrido integral de bienestar para relajar cuerpo y mente y salir, sintiéndote renovado.',
  },
];

const steps = [
  { icon: '⌖', number: '01', title: 'VISÍTANOS', text: 'Encuéntranos mientras recorres el mall.' },
  { icon: '☝', number: '02', title: 'DESCUBRE', text: 'Selecciona la experiencia que quieres vivir.' },
  { icon: '♨', number: '03', title: 'RELÁJATE', text: 'Deja que el cuerpo descanse.' },
  { icon: '☼', number: '04', title: 'VUELVE', text: 'Continua tu día con otra energía.' },
];

const stepIcons = {
  '01': icon('1.-%20Visitanos.svg'),
  '02': icon('2.-%20Descubrete.svg'),
  '03': icon('3.-%20Relajate.svg'),
  '04': icon('4.-%20Vuelve.svg'),
};

const reasons = [
  {
    className: 'reason-accessible',
    title: 'Accesible',
    text: 'Una experiencia de bienestar integrada a tu rutina.',
  },
  {
    className: 'reason-premium',
    title: 'Premium',
    text: 'Un espacio pensado en cada detalle.',
  },
  {
    className: 'reason-sensorial',
    title: 'Sensorial',
    text: 'Una experiencia que empieza desde que entras.',
  },
  {
    className: 'reason-contemporary',
    title: 'Contemporáneo',
    text: 'Una nueva manera de incorporar el bienestar en la vida cotidiana.',
  },
];

const locations = {
  mall: {
    button: 'Mall Aventura Plaza Trujillo',
    name: 'Mall Aventura Plaza Trujillo',
    address: 'Mall Aventura Plaza Trujillo',
    hours: 'Lunes a domingo, 10:00 a.m. - 10:00 p.m.',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8089587.300646681!2d-88.80414497499999!3d-8.102112299999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3dbb84162eaf%3A0xca9481ed99654e25!2sMallplaza%20Trujillo!5e0!3m2!1ses!2spe!4v1788297131635!5m2!1ses!2spe',
  },
  pizarro: {
    button: 'Centro Comercial Plaza Pizarro Trujillo',
    name: 'Centro Comercial Plaza Pizarro Trujillo',
    address: 'C.C. Portal F Pizarro, Trujillo',
    hours: 'Lunes a domingo, 10:00 a.m. - 10:00 p.m.',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.921259195948!2d-79.0275466754409!3d-8.109500231134364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d003ce9ff4d%3A0x58c985a063c2390e!2sC.C.%20Portal%20F%20Pizarro!5e0!3m2!1ses!2spe!4v1788297226641!5m2!1ses!2spe',
  },
};

const faqs = [
  ['¿Qué experiencias ofrece ALBA?', 'Sesiones de relajación, recarga y desconexión, adaptadas al tiempo que tengas.'],
  ['¿Cuánto dura cada experiencia?', 'Puedes elegir sesiones de 20, 40 o 60 minutos.'],
  ['¿Necesito reservar?', 'No es obligatorio, pero reservar asegura tu horario preferido.'],
  ['¿Dónde está ALBA?', 'Nos encuentras en Mall de Trujillo, nivel 2, local 215.'],
  ['¿Puedo ir sin reserva?', 'Sí, te atenderemos según disponibilidad.'],
];

const journalPosts = [
  '5 minutos para desconectar de tu día',
  'Por qué necesitamos hacer pausas',
  'Cómo liberar tensión después de un día largo',
  'Ideas para regalarte un momento',
];

const assistantQuestions = [
  '¿Qué experiencias ofrece ALBA?',
  '¿Cuánto dura cada experiencia?',
  '¿Dónde está ALBA?',
  '¿Necesito reservar?',
];

const assistantInitialMessages = [
  {
    role: 'assistant',
    content: 'Hola, soy el asistente de ALBA. Puedo ayudarte a elegir una experiencia, revisar horarios o ubicar tu local más cercano.',
  },
];

const openAssistantChat = message => {
  window.dispatchEvent(new CustomEvent('open-alba-assistant', {
    detail: { message },
  }));
};

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`topbar${open ? ' open' : ''}`}>
      <a className="brand" href="#inicio" aria-label="ALBA inicio" onClick={closeMenu}>
        <img className="brand-logo" src={img('logo/alba-logo.svg')} alt="ALBA" />
      </a>

      <button
        className="menu"
        aria-label="Abrir menú"
        aria-expanded={open}
        type="button"
        onClick={() => setOpen(value => !value)}
      >
        <i />
        <i />
      </button>

      <nav>
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#experiencias" onClick={closeMenu}>Experiencias</a>
        <a href="#alba" onClick={closeMenu}>Alba</a>
        <a href="#espacio" onClick={closeMenu}>TU ATMÓSFERA</a>
        <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
      </nav>

      <button
        className="btn top-cta"
        type="button"
        onClick={() => openAssistantChat('Quiero reservar mi momento en ALBA.')}
      >
        Reserva tu momento
      </button>
    </header>
  );
}

function Picture({ base, alt, className }) {
  return (
    <picture className={className}>
      <source media="(max-width: 600px)" srcSet={img(`images/${base}-movil.jpg`)} />
      <source media="(max-width: 900px)" srcSet={img(`images/${base}-tablet.jpg`)} />
      <img src={img(`images/${base}-desktop.jpg`)} alt={alt} />
    </picture>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero numbered" data-n="01. INICIO">
      <Picture base="inicio" alt="Sillón de descanso frente a los Andes al amanecer" />
      <div className="hero-copy">
        <h1>Un nuevo comienzo empieza aquí.</h1>
        <p>A veces hacer una pausa es la <br className="mobile-only" />mejor manera de volver a ti.</p>
        <div className="actions">
          <a className="btn" href="#alba">Descubre ALBA</a>
          <a className="btn ghost" href="#experiencias">Ver experiencias</a>
        </div>
      </div>
    </section>
  );
}

function Pause() {
  return (
    <section className="pause numbered split" data-n="02. UNA PAUSA PARA TI">
      <div className="copy">
        <p className="kicker">Haz espacio para ti</p>
        <h2 className="pause-title">
          <span className="pause-title__italic">A veces,</span>
          <span className="pause-title__middle"><span className="desktop-only">solo </span>necesitas</span>
          <span className="pause-title__big">PARAR.</span>
        </h2>
        <p>Haz una pausa, déjate llevar y vuelve diferente:</p>
        <p>Un momento para detenerte, desconectar y recuperar tu energía.</p>
        <div className="mini-values">
          <span>1<small>RESPIRA</small></span>
          <span>2<small>DESCONECTA</small></span>
          <span>3<small>DISFRUTA</small></span>
        </div>
      </div>
      <Picture base="pausa" alt="Mujer descansando en un sillón de masajes" />
    </section>
  );
}

function AlbaExperience() {
  return (
    <section id="alba" className="about numbered experience-story" data-n="03. LA EXPERIENCIA ALBA">
      <Picture className="experience-media" base="alba" alt="Interior calido del espacio ALBA" />
      <div className="experience-copy">
        <p className="kicker">La experiencia ALBA</p>
        <h2 className="experience-title">
          <span className="experience-title__script">respira</span>
          <span className="experience-title__strong">DESCONECTA</span>
          <span className="experience-title__script">disfruta</span>
        </h2>
        <div className="experience-steps">
          <article>
            <h3>Haz una pausa.</h3>
            <p>Encuentra un espacio que te invita a detenerte, respirar y dejar atrás el ritmo del día.</p>
          </article>
          <article>
            <h3>Déjate llevar.</h3>
            <p>Relájate, desconecta de lo que te rodea y disfruta plenamente del momento.</p>
          </article>
          <article>
            <h3>Vuelve diferente.</h3>
            <p>Continúa tu día con una nueva perspectiva, otra energía y una mejor actitud.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiencias" className="experiences numbered" data-n="04. EXPERIENCIAS">
      <div className="section-head">
        <p className="kicker">Elige tu ritmo</p>
        <h2 className="experiences-title">
          <span>nuestras</span>
          <strong>EXPERIENCIAS</strong>
        </h2>
      </div>
      <div className="experience-grid">
        {experiences.map(experience => (
          <article key={experience.title}>
            <div className={`crop ${experience.crop}`} />
            <h3>{experience.title}</h3>
            <p>{experience.text}</p>
            <button type="button" onClick={() => openAssistantChat(`Quiero conocer más sobre ${experience.title}.`)}>
              Conoce la experiencia →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="steps numbered" data-n="05. ¿CÓMO FUNCIONA?">
      <div className="section-head">
        <p className="kicker">ES SENCILLO</p>
        <h2 className="steps-title">
          <span>Tu pausa</span>
          <em>empieza aquí.</em>
        </h2>
      </div>
      <div className="step-grid">
        {steps.map(step => (
          <article key={step.number}>
            <b><img src={stepIcons[step.number]} alt="" aria-hidden="true" /></b>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <button
        className="btn"
        type="button"
        onClick={() => openAssistantChat('Ayúdame a encontrar mi momento ideal en ALBA.')}
      >
        Encuentra tu momento
      </button>
    </section>
  );
}

function Space() {
  return (
    <section id="espacio" className="space numbered split" data-n="06. EL ESPACIO">
      <div className="copy">
        <p className="kicker">Una atmósfera propia</p>
        <h2 className="space-title">
          <span>Un pequeño escape</span>
          <em>dentro de tu día.</em>
        </h2>
        <p>Diseñamos cada detalle para que la calma comience antes de sentarte.</p>
        <ul>
          <li>Luz cálida</li>
          <li>Materiales suaves</li>
          <li>Aromas sutiles</li>
          <li>Música tranquila</li>
          <li>Espacios pensados para desconectar</li>
        </ul>
      </div>
      <div className="mosaic">
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="why numbered why-hero" data-n="07. PROPUESTA DE VALOR">
      <div className="why-bg" aria-hidden="true" />
      <div className="why-content">
        <div className="why-heading">
          <p className="kicker">Propuesta de valor</p>
          <h2 className="why-title">
            <span>Qué hace</span>
            <span>diferente a</span>
            <strong>ALBA?</strong>
          </h2>
        </div>
        <div className="reasons" aria-label="Diferenciales de ALBA">
          {reasons.map(reason => (
            <article className={reason.className} key={reason.title}>
              <span />
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const [selected, setSelected] = useState('mall');
  const location = locations[selected];

  return (
    <section id="ubicacion" className="location numbered" data-n="08. UBICACION">
      <div className="location-intro">
        <p className="kicker">Estamos cerca</p>
        <h2 className="location-title">
          <span>Encuentra tu</span>
          <strong>ALBA</strong>
        </h2>
        <p>Selecciona un local para ver la información completa.</p>
        <div className="location-options" role="list">
          {Object.entries(locations).map(([key, item]) => (
            <button
              className={`location-option${selected === key ? ' active' : ''}`}
              type="button"
              data-location={key}
              aria-pressed={selected === key}
              key={key}
              onClick={() => setSelected(key)}
            >
              {item.button}
            </button>
          ))}
        </div>
      </div>
      <div className="location-detail is-visible">
        <div className="location-info">
          <div className="location-copy">
            <p className="kicker">Local seleccionado</p>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p className="hours">
              <strong>Horarios</strong><br />
              <span>{location.hours}</span>
            </p>
          </div>
          <div className="map">
            <iframe
              title="Mapa del local ALBA"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={location.map}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [status, setStatus] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setStatus('¡Listo! Recibimos tu solicitud. Te contactaremos para confirmar.');
    event.currentTarget.reset();
  };

  return (
    <section id="reserva" className="booking numbered" data-n="09. RESERVA">
      <div className="booking-copy">
        <p className="kicker">Este momento es tuyo</p>
        <h2 className="booking-title">Regálate un momento.</h2>
        <p>Elige tu experiencia y encuentra el momento que quieres dedicarte.</p>
      </div>
      <form id="booking-form" onSubmit={handleSubmit}>
        <label>
          Experiencia
          <select required defaultValue="">
            <option value="">Selecciona una experiencia</option>
            <option>Calma</option>
            <option>Conexión</option>
            <option>Alba</option>
          </select>
        </label>
        <label>
          Fecha
          <input type="date" required />
        </label>
        <label>
          Hora
          <select required defaultValue="">
            <option value="">Selecciona una hora</option>
            <option>11:00</option>
            <option>16:00</option>
            <option>19:00</option>
          </select>
        </label>
        <label>
          Duración
          <select required defaultValue="20 minutos">
            <option>20 minutos</option>
            <option>40 minutos</option>
            <option>60 minutos</option>
          </select>
        </label>
        <label>
          Nombre
          <input placeholder="Escribe tu nombre" required />
        </label>
        <label>
          Celular
          <input type="tel" placeholder="Escribe tu número" required />
        </label>
        <button className="btn" type="submit">Reservar mi momento</button>
        <p className="form-status" role="status">{status}</p>
      </form>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq numbered" data-n="10. PREGUNTAS FRECUENTES">
      <div className="section-head">
        <p className="kicker">Todo claro</p>
        <h2 className="faq-title">
          <span>Queremos que solo tengas que</span>
          <span>preocuparte por</span>
          <strong>DISFRUTAR.</strong>
        </h2>
      </div>
      <div className="accordion">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Corporate() {
  return (
    <section className="gifts numbered corporate" data-n="11. EMPRESAS">
      <div className="corporate-kicker-wrap">
        <p className="kicker">Bienestar para equipos</p>
      </div>
      <div className="corporate-layout">
        <article className="corporate-device" aria-label="Vuelve diferente para equipos">
          <picture>
            <source media="(max-width: 600px)" srcSet={img('images/tarjeta-Movil.png')} />
            <source media="(max-width: 900px)" srcSet={img('images/tarjeta-Tableta.png')} />
            <img src={img('images/tarjeta-Desktop.png')} alt="Vuelve diferente. Tu equipo merece una pausa." />
          </picture>
        </article>
        <div className="corporate-content">
        <h2 className="corporate-title">
          <span>Tu equipo <em>merece un</em></span>
          <strong>DESCANSO.</strong>
        </h2>
          <p>Una forma especial de reconocer a tu equipo. Regala una experiencia de bienestar para desconectar y recargar energias. Ideal como beneficio, reconocimiento o detalle corporativo. Porque cuidar a tu equipo tambien importa.</p>
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="journal numbered" data-n="12. CONTENIDO / INSPIRACIÓN">
      <div className="section-head">
        <p className="kicker">Para volver a ti</p>
        <h2>Pequeños momentos para sentirte mejor.</h2>
      </div>
      <div className="journal-grid">
        {journalPosts.map(title => (
          <article key={title}>
            <div />
            <h3>{title}</h3>
            <a href="#">Leer más →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="social numbered split" data-n="13. INSTAGRAM + TIKTOK">
      <div className="copy">
        <p className="kicker">Seguimos cerca</p>
        <h2>La calma también continúa contigo.</h2>
        <p>Descubre nuevas experiencias, inspiración y pequeños momentos para volver a ti.</p>
        <figure className="linktree-qr">
          <a href="https://linktr.ee/qr/f6b21c29-7b18-49a4-8cd3-5efc6fd1c08b" target="_blank" rel="noopener noreferrer" aria-label="Abrir Linktree de ALBA">
            <img src={img('images/linktree-qr.jpg')} alt="Codigo QR de Linktree ALBA" />
          </a>
          <figcaption>Linktree</figcaption>
        </figure>
      </div>
      <div className="phones">
        <a className="social-phone instagram-phone" href="https://www.instagram.com/alba.bienestar.pe?stkn=MWh5eW5rMDBwOHI2cA==" target="_blank" rel="noopener noreferrer" aria-label="Abrir Instagram de ALBA">
          <picture>
            <source media="(max-width: 600px)" srcSet={img('images/instagram-movil.jpg')} />
            <source media="(max-width: 900px)" srcSet={img('images/instagram-tablet.jpg')} />
            <img src={img('images/instagram-desktop.jpg')} alt="Vista previa de Instagram ALBA" />
          </picture>
          <span>
            Visítanos aquí
            <img src="/assets/ICONOS/social/instagram.svg" alt="" />
          </span>
        </a>
        <a className="social-phone tiktok-phone" href="https://www.tiktok.com/@alba.bienestar?_r=1&_t=ZS-99WBpLdMv7V" target="_blank" rel="noopener noreferrer" aria-label="Abrir TikTok de ALBA">
          <picture>
            <source media="(max-width: 600px)" srcSet={img('images/tiktok-movil.jpg')} />
            <source media="(max-width: 900px)" srcSet={img('images/tiktok-tablet.jpg')} />
            <img src={img('images/tiktok-desktop.jpg')} alt="Vista previa de TikTok ALBA" />
          </picture>
          <span>
            Visítanos aquí
            <img src="/assets/ICONOS/social/tiktok.svg" alt="" />
          </span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="numbered" data-n="14. FOOTER">
      <div className="footer-brand">
        <img className="footer-logo" src={img('logo/alba-logo.svg')} alt="ALBA" />
        <p>Siempre puedes empezar de nuevo.</p>
      </div>
      <div className="footer-links">
        <div>
          <b>Experiencias</b>
          <a href="#experiencias">Relajar</a>
          <a href="#experiencias">Recargar</a>
          <a href="#experiencias">Desconectar</a>
        </div>
        <div>
          <b>ALBA</b>
          <a href="#alba">Nosotros</a>
          <a href="#espacio">Tu Atmósfera</a>
          <a href="#ubicacion">Ubicación</a>
        </div>
        <div>
          <b>Ayuda</b>
          <button type="button" onClick={() => openAssistantChat('Quiero contactar con ALBA.')}>Contacto</button>
          <button type="button" onClick={() => openAssistantChat('Quiero hacer una reserva en ALBA.')}>Reservas</button>
          <a href="#">Privacidad</a>
        </div>
      </div>
      <p className="copyright">© 2026 ALBA. Todos los derechos reservados.</p>
      <p className="developer-credit">Desarrollado por EACODE</p>
    </footer>
  );
}

function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(assistantInitialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const apiUrl = (import.meta.env.VITE_ASSISTANT_API_URL || 'http://localhost:3001').replace(/\/$/, '');

  const sendMessage = async message => {
    const cleanMessage = message.trim();
    if (!cleanMessage || loading) return;

    const nextMessages = [...messages, { role: 'user', content: cleanMessage }];
    setMessages(nextMessages);
    setInput('');
    setOpen(true);
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: cleanMessage,
          history: nextMessages.slice(-8),
        }),
      });

      if (!response.ok) throw new Error('Assistant request failed');

      const data = await response.json();
      setMessages(current => [
        ...current,
        {
          role: 'assistant',
          content: data.reply || 'Puedo ayudarte con información de ALBA, experiencias, horarios y reservas.',
        },
      ]);
    } catch (error) {
      setMessages(current => [
        ...current,
        {
          role: 'assistant',
          content: 'Por ahora no pude conectarme. Intenta de nuevo en unos segundos o escríbenos para ayudarte con tu reserva.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    sendMessage(input);
  };

  useEffect(() => {
    const handleOpenAssistant = event => {
      setOpen(true);
      const message = event.detail?.message || '';
      if (message) {
        sendMessage(message);
      }
    };

    window.addEventListener('open-alba-assistant', handleOpenAssistant);
    return () => window.removeEventListener('open-alba-assistant', handleOpenAssistant);
  }, [messages, loading]);

  return (
    <aside className={`assistant-widget${open ? ' is-open' : ''}`} aria-label="Asistente virtual de ALBA">
      {open && (
        <div className="assistant-panel">
          <header className="assistant-header">
            <div>
              <span>ALBA</span>
              <strong>Asistente virtual</strong>
            </div>
            <button type="button" aria-label="Minimizar asistente" onClick={() => setOpen(false)}>
              -
            </button>
          </header>

          <div className="assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </p>
            ))}
            {loading && <p className="assistant-message assistant">Estoy revisando...</p>}
          </div>

          <div className="assistant-prompts" aria-label="Preguntas frecuentes">
            {assistantQuestions.map(question => (
              <button type="button" key={question} onClick={() => sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <form className="assistant-form" onSubmit={handleSubmit}>
            <input
              aria-label="Mensaje para el asistente"
              placeholder="Escribe tu pregunta"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        className="assistant-toggle"
        type="button"
        aria-label={open ? 'Cerrar asistente virtual' : 'Abrir asistente virtual'}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        <span>ALBA</span>
        <small>?</small>
      </button>
    </aside>
  );
}

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.numbered, .value-cards article, .experience-steps article, .experience-grid article, .step-grid article, .journal-grid article, .gift-grid article, .corporate-device'
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    elements.forEach(element => {
      element.classList.add('reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function useAnchorScroll() {
  useEffect(() => {
    const handleClick = event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      const isAlba = hash === '#alba';
      const scrollTarget = isAlba || target.matches('.hero')
        ? target
        : target.querySelector('.section-head, .copy, .experience-copy, .why-content, .location-intro, .booking-copy, .corporate-kicker-wrap') || target;
      const isTablet = window.matchMedia('(max-width: 900px)').matches;
      const header = document.querySelector('.topbar');
      const headerHeight = header?.getBoundingClientRect().height || (isTablet ? 76 : 92);
      const offset = isAlba ? headerHeight : (isTablet ? 126 : 156);
      const top = scrollTarget.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', hash);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

export default function App() {
  useRevealAnimation();
  useAnchorScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pause />
        <AlbaExperience />
        <Experiences />
        <Steps />
        <Space />
        <Why />
        <Location />
        <Corporate />
        <Journal />
        <Social />
      </main>
      <Footer />
      <VirtualAssistant />
    </>
  );
}
