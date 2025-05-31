/*export const personalInfo = {
  name: "Andrés E. Sánchez García",
  location: "Santa Cruz de Tenerife, Spain",
  email: "andrestf99@gmail.com",
  github: "https://github.com/CodeEspu",
  linkedin: "https://www.linkedin.com/in/andres-s%C3%A1nchez-garc%C3%ADa/",
};

export const workExperience = [
  
  {
    company: "Sound Black SLU",
    location: "Santa Cruz de Tenerife, Spain",
    position: "🔊 Audiovisual Technician",
    period: "June 2024 - Sept 2024",
    achievements: [
      "➜ Assembly of sound, video, and lighting equipment for events.",
      "➜ Technical project management, problem-solving, and team coordination",
    ],
  },
  {
    company: "Sonopluss SL",
    location: "Santa Cruz de Tenerife, Spain",
    position: "🔊 Internship as Sound Technician",
    period: "Mar 2024 - June 2024",
    achievements: [
      "➜ Assembly and organization of sound equipment and structures.",
      "➜ Attention to detail, organization, and teamwork.",
    ],
  },
  {
    company: "Eldorado.gg",
    location: "Remote",
    position: "🎮 Freelance",
    period: "Jan 2016 - Jan 2023",
    achievements: [
      "➜ Strategic Thinking & Game Analysis",
      "➜ Client Relationship Management",
      "➜ Effective Communication & Mentorship",
      "➜ Branding & Personal Marketing (+500 satisfied clients worldwide)",
      "➜ Remote Work & Time Management",
      "➜ Leadership & Team Coordination",
    ],
  },
  {
    company: "Villarreal C.F",
    location: "Remote",
    position: "🎮 Professional Gamer",
    period: "Mar 2019 - May 2019",
    achievements: [
      "➜ Top-ranking at national and international level",
      "➜ Content creation for social media, stream and online community management",
      "➜ Personal brand development and management",
      "➜ Team leadership, coaching, and mentoring",
    ],
  },


];

export const education = [
  {
    institution: "University of La Laguna",
    location: "Remote",
    degree: "Diginnova Program: Innovation, Digital Transformation, and Sustainability",
    period: "Apr 2025 - Jun 2026",
    achievements: [
      "➜ Dual training program focused on employability...",
      "➜ Includes a university-issued certification and practical content...",
      ],
  },
  {
    institution: "CIFP César Manrique",
    location: "Santa Cruz de Tenerife, Spain",
    degree: "Specialization Course in Cybersecurity IT",
    period: "Sept 2024 - Jun 2025",
    achievements: [
      "➜ Class Representative.",
      "➜ Development of Practical Projects.",
      "➜ Participation in Cybersecurity Events (e.g Hackr0n)."
      ],
  },

  {
    institution: "CIFP César Manrique",
    location: "Santa Cruz de Tenerife, Spain",
    degree: "Telecommunications and Computer Systems",
    period: "Sept 2022 - Jun 2024",
  },

  {
    institution: "CIFP César Manrique",
    location: "Santa Cruz de Tenerife, Spain",
    degree: "Web Application Development",
    period: "Sept 2019 - Jun 2020",
  },

  {
    institution: "IES Puntalarga",
    location: "Santa Cruz de Tenerife, Spain",
    degree: "High School Diploma in Technology Sciences",
    period: "Sept 2016 - Jun 2018",
  },


];
export const skills = {
  programmingLanguages: [
    "Python",
    "C#",
    "Bash",
    "Powershell",
  ],
  frontendDevelopment: [
    "Wireshark",
    "Burp Suite CE",
    "Metasploit",
    "JohnTheRipper",
    "CrackMapExec",
    "OWASP Zap",
    "Setoolkit",
    "Shodan",
    "Ettercap",
    "Haschat",
    "Nikto",
    "Hydra",
    "Aircrack-ng",
    "SQLmap",
    "BeEF",
    "Dirbuster",
    "Cewl",
    "TheFatRat",
    "Nessus"
  ],
  backendDevelopment: [
    "SIEM",
    "Wazuh",
    "ELK",
    "pfsense",
    "Kibana",
    "Shodan",
    "Suricata",
    "GnuPG",
    "OpenSSL",
    "Snort",
    "Zabbix",
    "RADIUS Server",
    "Cisco Packet Tracer",
    "ElasticSearch", 
    "Logstash",
    "Nginx",
    "PostgreSQL",
    "MariaDB",
    "Apache"
  ],
  databaseAndStorage: [
    "Volatility",
    "Autopsy",
    "Registry Explorer",
    "iLEAPP",
    "ALEAPP",
    "FTK Imager",
    "Cellebrite UFED",
    "Log2Timeline",
    "HxD Editor",

  ],
  cloudAndDevOps: [
    "GitHub",
    "Docker",
    "Google Dork",
    "Genymotion",

  ],
  
};
*/

export const translations: Record<"en" | "es", {
  personalInfo: {
    name: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
  };
  workExperience: Array<{
    company: string;
    location: string;
    position: string;
    period: string;
    achievements: string[];
  }>;
  projects: Array<{
    title: string;
    github: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    location: string;
    degree: string;
    period: string;
    achievements?: string[];
  }>;
  skills: {
    programmingLanguages: string[];
    frontendDevelopment: string[];
    backendDevelopment: string[];
    databaseAndStorage: string[];
    cloudAndDevOps: string[];
  };
}> = {
  en: {
    personalInfo: {
      name: "Andrés E. Sánchez García",
      location: "Santa Cruz de Tenerife, Spain",
      email: "andrestf99@gmail.com",
      github: "https://github.com/CodeEspu",
      linkedin: "https://www.linkedin.com/in/andres-s%C3%A1nchez-garc%C3%ADa/",
    },
    workExperience: [
      {
        company: "Sound Black SLU",
        location: "Santa Cruz de Tenerife, Spain",
        position: "🔊 Audiovisual Technician",
        period: "June 2024 - Sept 2024",
        achievements: [
          "➜ Assembly of sound, video, and lighting equipment for events.",
          "➜ Technical project management, problem-solving, and team coordination.",
        ],
      },
      {
        company: "Sonopluss SL",
        location: "Santa Cruz de Tenerife, Spain",
        position: "🔊 Internship as Sound Technician",
        period: "Mar 2024 - June 2024",
        achievements: [
          "➜ Assembly and organization of sound equipment and structures.",
          "➜ Attention to detail, organization, and teamwork.",
        ],
      },
      {
        company: "Eldorado.gg",
        location: "Remote",
        position: "🎮 Freelance",
        period: "Jan 2016 - Jan 2023",
        achievements: [
          "➜ Strategic Thinking & Game Analysis",
          "➜ Client Relationship Management",
          "➜ Effective Communication & Mentorship",
          "➜ Branding & Personal Marketing (+500 satisfied clients worldwide)",
          "➜ Remote Work & Time Management",
          "➜ Leadership & Team Coordination",
        ],
      },
      {
        company: "Villarreal C.F",
        location: "Remote",
        position: "🎮 Professional Gamer",
        period: "Mar 2019 - May 2019",
        achievements: [
          "➜ Top-ranking at national and international level",
          "➜ Content creation for social media, stream and online community management",
          "➜ Personal brand development and management",
          "➜ Team leadership, coaching, and mentoring",
        ],
      },
    ],
    projects: [
      {
        title: "Blue Team Lab on Docker",
        github: "https://github.com/CodeEspu/Docker-BlueTeam",
        description: "Deployed a containerized security monitoring environment.\n\n Using Suricata (IDS mode) for real-time network traffic analysis. Integrated Wazuh as a SIEM for log enrichment and correlation, with Filebeat forwarding events to Logstash. Visualized alerts and metrics through the ELK Stack (Elasticsearch, Logstash, Kibana)."
      }
    ],
    education: [
      {
        institution: "University of La Laguna",
        location: "Remote",
        degree: "Diginnova Program: Innovation, Digital Transformation, and Sustainability",
        period: "Apr 2025 - Jun 2026",
        achievements: [
          "➜ Dual training program focused on employability.",
          "➜ Includes a university-issued certification and practical content.",
        ],
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, Spain",
        degree: "Specialization Course in Cybersecurity IT",
        period: "Sept 2024 - Jun 2025",
        achievements: [
          "➜ Class Representative.",
          "➜ Development of Practical Projects.",
          "➜ Participation in Cybersecurity Events (e.g Hackr0n)."
          ],
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, Spain",
        degree: "Telecommunications and Computer Systems",
        period: "Sept 2022 - Jun 2024",
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, Spain",
        degree: "Web Application Development",
        period: "Sept 2019 - Jun 2020",
      },
      {
        institution: "IES Puntalarga",
        location: "Santa Cruz de Tenerife, Spain",
        degree: "High School Diploma in Technology Sciences",
        period: "Sept 2016 - Jun 2018",
      },
    ],
    skills: {
      programmingLanguages: ["Python", "C#", "Bash", "Powershell"],
      frontendDevelopment: ["Wireshark", "Burp Suite CE", "Metasploit", "JohnTheRipper", "CrackMapExec", "OWASP Zap",
    "Setoolkit", "Shodan", "Ettercap", "Haschat", "Nikto", "Hydra", "Aircrack-ng", "SQLmap", "BeEF", "Dirbuster",
    "Cewl", "TheFatRat", "Nessus"],
      backendDevelopment: ["SIEM", "Wazuh", "ELK", "pfsense", "Kibana", "Shodan", "Suricata", "GnuPG", "OpenSSL", "Snort", "Zabbix",
         "RADIUS Server", "Cisco Packet Tracer", "ElasticSearch", "Logstash", "Nginx", "PostgreSQL", "MariaDB", "Apache"],
      databaseAndStorage: ["Volatility", "Autopsy", "Registry Explorer", "iLEAPP", "ALEAPP", "FTK Imager",
    "Cellebrite UFED", "Log2Timeline", "HxD Editor"],
      cloudAndDevOps: ["GitHub", "Docker", "Google Dork"],
    },
  },
  es: {
    personalInfo: {
      name: "Andrés E. Sánchez García",
      location: "Santa Cruz de Tenerife, España",
      email: "andrestf99@gmail.com",
      github: "https://github.com/CodeEspu",
      linkedin: "https://www.linkedin.com/in/andres-s%C3%A1nchez-garc%C3%ADa/",
    },
    workExperience: [
      {
        company: "Sound Black SLU",
        location: "Santa Cruz de Tenerife, España",
        position: "🔊 Técnico Audiovisual",
        period: "Junio 2024 - Septiembre 2024",
        achievements: [
          "➜ Montaje de equipos de sonido, vídeo e iluminación para eventos.",
          "➜ Gestión técnica de proyectos, resolución de problemas y coordinación de equipos.",
        ],
      },
      {
        company: "Sonopluss SL",
        location: "Santa Cruz de Tenerife, Spain",
        position: "🔊 Prácticas como Técnico de Sonido",
        period: "Marzo 2024 - Junio 2024",
        achievements: [
          "➜ Montaje y organización de equipos de sonido y estructuras.",
          "➜ Atención al detalle, organización y trabajo en equipo.",
        ],
      },
      {
        company: "Eldorado.gg",
        location: "Remoto",
        position: "🎮 Freelance",
        period: "Enero 2016 - Enero 2023",
        achievements: [
          "➜ Pensamiento estratégico y Análisis del juego",
          "➜ Gestión de Relaciones con Clientes",
          "➜ Comunicación Efectiva y Mentorías",
          "➜ Gestión de la Marca & Marketing Personal (+500 clientes satisfechos al rededor del mundo)",
          "➜ Trabajo en Remoto y Gestión del Tiempo",
          "➜ Liderazgo y Coordinación de Equipo",
        ],
      },
      {
        company: "Villarreal C.F",
        location: "Remoto",
        position: "🎮 Jugador Profesional de Videojuegos",
        period: "Marzo 2019 - Mayo 2019",
        achievements: [
          "➜ Jugador de alto rendimiento a nivel nacional e internacional",
          "➜ Creación de contenido para redes sociales, gestión de streams y comunidades online",
          "➜ Desarrollo y gestión de marca personal",
          "➜ Liderazgo de equipo, coaching y mentoring",
        ],
      },
    ],
    projects: [
      {
        title: "Laboratorio Blue Team en Docker",
        github: "https://github.com/CodeEspu/Docker-BlueTeam",
        description: "Implementé un entorno de monitorización de seguridad en contenedores Docker\n\n. Usando Suricata (modo IDS) para análisis de tráfico en tiempo real. Integré Wazuh como SIEM para enriquecer y correlacionar logs, con Filebeat enviando eventos a Logstash. Las alertas y métricas se visualizaron mediante el stack ELK (Elasticsearch, Logstash, Kibana)."
      }
    ],
    education: [
      {
        institution: "Universidad de La Laguna",
        location: "Remoto",
        degree: "Programa Diginnova: Innovación, Transformación Digital y Sostenibilidad",
        period: "Abril 2025 - Junio 2026",
        achievements: [
          "➜ Programa de formación dual enfocado en la empleabilidad.",
          "➜ Incluye certificación universitaria y contenido práctico."
        ],
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, España",
        degree: "Curso de Especialización en Ciberseguridad IT",
        period: "Septiembre 2024 - Junio 2025",
        achievements: [
          "➜ Delegado de clase.",
          "➜ Desarrollo de proyectos prácticos.",
          "➜ Participación en eventos de Ciberseguridad (e.g Hackr0n)."
          ],
        
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, España",
        degree: "Técnico en Sistemas de Telecomunicaciones e Informáticos",
        period: "Sept 2022 - Jun 2024",
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, Spain",
        degree: "Desarrollo de Aplicaciones Web (DAW)",
        period: "Sept 2019 - Jun 2020",
      },
      {
        institution: "IES Puntalarga",
        location: "Santa Cruz de Tenerife, España",
        degree: "Bachillerato en Ciencias Tecnológicas",
        period: "Sept 2016 - Jun 2018",
      },
    ],
    skills: {
      programmingLanguages: ["Python", "C#", "Bash", "Powershell"],
      frontendDevelopment: ["Wireshark", "Burp Suite CE", "Metasploit", "JohnTheRipper", "CrackMapExec", "OWASP Zap",
        "Setoolkit", "Shodan", "Ettercap", "Haschat", "Nikto", "Hydra", "Aircrack-ng", "SQLmap", "BeEF", "Dirbuster",
        "Cewl", "TheFatRat", "Nessus"],
      backendDevelopment: ["SIEM", "Wazuh", "ELK", "pfsense", "Kibana", "Shodan", "Suricata", "GnuPG", "OpenSSL", "Snort", "Zabbix",
         "RADIUS Server", "Cisco Packet Tracer", "ElasticSearch", "Logstash", "Nginx", "PostgreSQL", "MariaDB", "Apache"],
      databaseAndStorage: ["Volatility", "Autopsy", "Registry Explorer"],
      cloudAndDevOps: ["GitHub", "Docker", "Google Dork"],
    },
  },
};

