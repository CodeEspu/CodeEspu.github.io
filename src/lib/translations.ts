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
    ],
    education: [
      {
        institution: "University of La Laguna",
        location: "Remote",
        degree: "Diginnova Program: Innovation, Digital Transformation, and Sustainability",
        period: "Apr 2025 - Jun 2026",
        achievements: [
          "➜ Dual training program focused on employability, combining 7 months of online education in innovation, digitalization, and sustainability, followed by 4 months of paid internships in companies based in the Canary Islands.",
          "➜ Includes a university-issued certification and practical content aligned with the current professional landscape.",
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
        location: "Santa Cruz de Tenerife, España",
        position: "🔊 Prácticas como Técnico de Sonido",
        period: "Mar 2024 - Junio 2024",
        achievements: [
          "➜ Montaje y organización de equipos de sonido y estructuras.",
          "➜ Atención al detalle, organización y trabajo en equipo.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad de La Laguna",
        location: "Remoto",
        degree: "Programa Diginnova: Innovación, Transformación Digital y Sostenibilidad",
        period: "Abr 2025 - Jun 2026",
        achievements: [
          "➜ Formación dual orientada a la empleabilidad, con 7 meses de formación online en innovación, digitalización y sostenibilidad, seguida de 4 meses de prácticas remuneradas en empresas canarias.",
          "➜ Incluye certificación universitaria y contenidos aplicados a la realidad del entorno profesional actual",
          ],
      },
      {
        institution: "CIFP César Manrique",
        location: "Santa Cruz de Tenerife, España",
        degree: "Curso de Especialización en Ciberseguridad IT",
        period: "Sept 2024 - Jun 2025",
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
      databaseAndStorage: ["Volatility", "Autopsy", "Registry Explorer", "iLEAPP", "ALEAPP", "FTK Imager",
    "Cellebrite UFED", "Log2Timeline", "HxD Editor"],
      cloudAndDevOps: ["GitHub", "Docker", "Google Dork", "Genymotion"],
    },
  },
};







