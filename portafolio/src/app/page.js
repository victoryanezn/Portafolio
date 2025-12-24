import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img
          src="/foto-perfil.jpg"
          alt="Foto de Victor Yañez"
          style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '20px', border: '4px solid #007BFF' }}
        />
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Victor Yañez</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Estudiante de Ingeniería en Informática</p>
        <a
          href="/CV_VictorYañez2025.pdf"
          download
          style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
        >
          Descargar CV
        </a>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <a
            href="https://www.linkedin.com/in/victor-ya%C3%B1ez-naranjo-792b4026b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '10px 20px', backgroundColor: '#0A66C2', color: '#fff', borderRadius: '5px', textDecoration: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0' }}
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:contactovictoryanez@gmail.com"
            style={{ padding: '10px 20px', backgroundColor: '#0A66C2', color: '#fff', borderRadius: '5px', textDecoration: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0' }}
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </header>

      <main>
        {/* Sección de certificados */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Certificados</h2>
          {/* Certificado institucional - Duoc UC */}
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0', color: '#007BFF' }}>Certificado institucional Duoc UC (Instituto)</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>
              Incluye:
              <ul style={{ paddingLeft: '20px', color: '#555' }}>
                <li>Calidad de Software</li>
                <li>Arquitectura de Software</li>
                <li>Análisis y Planificación de Requerimientos Informáticos</li>
                <li>Internacional en Inglés Intermedio Alto</li>
                <li>Análisis y Desarrollo de Modelos de Datos</li>
                <li>Programación de Software</li>
              </ul>
            </p>
            <a href="/certificado_instituto.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Ver / Descargar</a>
          </div>

          {/* Lista de certificados como puntos con link directo */}
          <ul style={{ paddingLeft: '20px', color: '#555', marginTop: '30px' }}>
            <li><a href="https://coursera.org/share/fa9f2122fe965363cd8bf7683c7c23d5" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Generative AI for Project Managers (Coursera)</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/L1JUT1OKZ04H" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Generative AI: Introduction and Applications</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/S1ZDCOCP8K62" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Generative AI: Prompt Engineering Basics</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/J5MLW2E66UE1" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Generative AI: Unleash Your Project Management Potential</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/D6O7HVIJG5AM" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Introduction to Artificial Intelligence (AI)</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/0JKJODFASCO5" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Foundations of Cybersecurity</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/verify/XVMXIPTIBK1L" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Building AI Powered Chatbots Without Programming</a></li>
          </ul>
        </section>

        {/* Sección de experiencia */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Experiencia</h2>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>Monitor Part Time - SUBE mirador</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>Corporación Municipal de Fomento de la Florida · feb. 2025 - actualidad</p>
            <ul style={{ paddingLeft: '20px', color: '#555' }}>
              <li>Atención a clientes y control de acceso al bicicletero municipal.</li>
              <li>Registro y supervisión de ingresos mediante sistema computarizado.</li>
              <li>Monitoreo de cámaras para prevención de incidentes.</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>Técnico en Soporte Informático y Redes</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>INFOCAP Chile · oct. 2022 - dic. 2022</p>
            <ul style={{ paddingLeft: '20px', color: '#555' }}>
              <li>Mantenimiento preventivo y correctivo de equipos.</li>
              <li>Instalación y configuración de puntos de red.</li>
              <li>Gestión de inventario y supervisión de CCTV.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
