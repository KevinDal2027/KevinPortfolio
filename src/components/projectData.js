// projectData.js
const projects = [
  {
  id: 'homeServer',
  title: 'Home Server Infrastructure',
  thumbnail: './assets/projectThumbnails/homeserver.png',
  tag: 'Server / Infrastructure',
  date: '2025-10',
  description: 'A personal Linux-based home server designed to host self-deployed projects on the domain kevinqh.com. Built for reliability, security, and local control using Docker, Nginx, and Cloudflare tunneling.',
  details: {
    inspiration: 'I wanted a single reliable machine to host all my personal projects without depending on external cloud services. This home server lets me control deployment, networking, and automation in my own environment.',
    timeline: 'Ongoing project started in 2025 to experiment with infrastructure management, service hosting, and network configuration.',
    learning: 'I learned how to set up and maintain a local Linux server, configure Nginx reverse proxy with SSL, and deploy containerized apps using Docker Compose. It gave me hands-on experience with DNS routing, security hardening, and uptime management.'
  },
  links: {
  },
  skills: [
    { alt: 'Linux icon', src: './assets/skills/Linux.svg' },
    { alt: 'Docker icon', src: './assets/skills/docker.png' },
    { alt: 'Nginx icon', src: './assets/skills/nginx.svg' },
    { alt: 'Cloudflare icon', src: './assets/skills/cloudflare.png' },
    { alt: 'Bash icon', src: './assets/skills/Bash.svg' },
    { alt: 'DNS icon', src: './assets/skills/dns.png' }
  ]
},
  {
  id: 'selfHostedAI',
  title: 'Self-Hosted AI Assistant',
  thumbnail: './assets/projectThumbnails/kevinai.png',
  tag: 'DevOps / Infrastructure',
  date: '2025-10',
  description: 'A fully self-hosted AI assistant deployed on a home server (an old 2014 ThinkPad) with Docker, Node.js, FastAPI, and Ollama. The system allows real-time local inference through a custom frontend and backend.',
  details: {
    inspiration: 'I wanted to build my own AI system that runs entirely on local hardware — no external API or cloud dependency. It’s a personal assistant I can control, modify, and deploy myself. This project started as an experiment in containerization and quickly became a full self-hosted setup.',
    timeline: 'Developed in October 2025 as a personal DevOps project to explore container orchestration, backend integration, and self-hosted AI deployment.',
    learning: 'I learned how to containerize full-stack services using Docker, configure model backends with Ollama, and integrate FastAPI and Node.js for real-time communication. It deepened my understanding of local infrastructure management, network routing, and deployment automation.'
  },
  links: {
    website: 'https://ai.kevinqh.com',
    github: 'https://github.com/KevinDal2027/SelfHosted-AI-Kevin'
  },
  skills: [
    { alt: 'Docker icon', src: './assets/skills/docker.png' },
    { alt: 'NodeJS icon', src: './assets/skills/NodeJS.svg' },
    { alt: 'FastAPI icon', src: './assets/skills/fastapi.png' },
    { alt: 'Ollama icon', src: './assets/skills/ollama.png' },
    { alt: 'Linux icon', src: './assets/skills/Linux.svg' },
    { alt: 'NGINX icon', src: './assets/skills/nginx.svg' },
    { alt: 'Bash icon', src: './assets/skills/Bash.svg' }
  ]
},
  {
    id: 'wifiChannelScanner',
    title: 'WiFi Channel Scanner',
    thumbnail: './assets/projectThumbnails/WifiScanner.png',
    tag: 'Network Tools',
    date: '2025-02',
    description: 'A Linux-based web application that scans nearby WiFi networks, analyzes channel usage, and suggests optimal channels for better network performance. Built with Flask and Python, it provides real-time network analysis with a clean web interface for network administrators and power users.',
    details: {
      inspiration: 'I built this WiFi Channel Scanner to solve the common problem of WiFi interference and poor network performance. Living in an apartment building with many overlapping networks, I wanted a tool that could quickly analyze the WiFi environment and suggest the best channels to use. The goal was to create something that network administrators and tech-savvy users could rely on for optimizing their WiFi setup.',
      timeline: 'Developed in February 2025 as a personal project to improve WiFi network performance and learn more about network analysis and Linux system programming.',
      learning: 'I learned how to interact with Linux networking tools (iw, iwlist) through Python subprocess calls, implement real-time network scanning with proper error handling, create a Flask web application with form handling and flash messages, and work with Linux permissions and sudo requirements. The project taught me about WiFi channel allocation, signal analysis, and building system-level tools with web interfaces.'
    },
    links: {
      github: 'https://github.com/KevinDal2027/WIFICHANNELSCANNER'
    },
    skills: [
      { alt: 'Python icon', src: './assets/skills/Python.svg' },
      { alt: 'Flask icon', src: './assets/skills/Flask.svg' },
      { alt: 'Linux icon', src: './assets/skills/Linux.svg' },
      { alt: 'HTML icon', src: './assets/skills/HTML.svg' },
      { alt: 'CSS icon', src: './assets/skills/CSS.svg' },
      { alt: 'JavaScript icon', src: './assets/skills/JavaScript.svg' },
      { alt: 'Bash icon', src: './assets/skills/Bash.svg' }
    ]
  },
    {
    id: 'ettWorkshop',
    title: 'Empower Tech Tutor Workshop',
    thumbnail: './assets/projectThumbnails/ETTLogo.svg',
    tag: 'Client Project',
    date: '2025-09',
    description: 'A modern, mobile-first web application for Empower Tech Tutor to manage workshop posts and schedules. Built with React and Firebase, it provides a clean interface for both admins and visitors with secure authentication and real-time data management.',
    details: {
      inspiration: 'I built the EmpowerTech Tutor Workshop web app to give Empower Tech Tutor a cleaner and more reliable way to handle workshop posts and schedules. The goal was to make something that is both easy for visitors to use and powerful enough for admins to manage content. I didn\'t want this to feel like a clunky CMS — instead, it\'s lightweight, mobile-first, and actually pleasant to use.',
      timeline: 'Developed in September 2025 as a client project for Empower Tech Tutor, focusing on creating a modern, accessible platform for workshop management.',
      learning: 'I learned how to build a complete full-stack application with React and Firebase, implement secure authentication with email-based admin access, create responsive mobile-first designs, and structure a modular codebase with separate services for Firestore operations. The project taught me client communication, requirements gathering, and delivering production-ready applications.'
    },
    links: {
      website: 'https://empower-tech-tutor-workshop.vercel.app/',
      github: 'https://github.com/KevinDal2027/EmpowerTechTutorWorkshop'
    },
    skills: [
      { alt: 'React icon', src: './assets/skills/React.js.svg' },
      { alt: 'JavaScript icon', src: './assets/skills/JavaScript.svg' },
      { alt: 'CSS icon', src: './assets/skills/CSS.svg' },
      { alt: 'HTML icon', src: './assets/skills/HTML.svg' },
      { alt: 'Firebase icon', src: './assets/skills/firebase.svg' },
      { alt: 'REST icon', src: './assets/skills/REST.svg' },
      { alt: 'JSON icon', src: './assets/skills/JSON.svg' }
    ]
  },
  {
    id: 'fcsVM',
    title: 'Dalhousie University FCS Virtual Machines',
    thumbnail: './assets/projectThumbnails/fcsVM.png',
    tag: 'Cloud',
    date: '2025-06',
    description: 'A GPU-powered and securely administered virtual infrastructure for Dalhousie CS students and researchers, integrating AD authentication, VMware Horizon access, and controlled sudo privileges.',
    details: {
      inspiration: 'The project was initiated to provide Dalhousie CS students with a high-performance virtual environment that supports computational tasks and deep learning, while ensuring administrative control and seamless access.',
      timeline: 'From May to June 2025, I worked as a Systems Technician Co-op under Dal ITS, collaborating with the FCS infrastructure team and server admins.',
      learning: 'I learned how to integrate Linux VMs into an enterprise infrastructure using VMware Horizon, troubleshoot domain authentication issues, configure GPU drivers, and deploy secure access policies and sudo restrictions.'
    },
    links: {
      website: '',
    },
    skills: [
      { alt: 'Ubuntu icon', src: './assets/skills/Ubuntu.svg' },
      { alt: 'Linux icon', src: './assets/skills/Linux.svg' },
      { alt: 'Bash icon', src: './assets/skills/Bash.svg' },
      { alt: 'Systemd icon', src: './assets/skills/Systemd.svg' },
      { alt: 'VMware icon', src: './assets/skills/VMware.svg' },
      { alt: 'vSphere icon', src: './assets/skills/vSphere.svg' },
      { alt: 'Horizon icon', src: './assets/skills/Horizon.svg' },
      { alt: 'Active Directory icon', src: './assets/skills/AD.svg' },
      { alt: 'GPO icon', src: './assets/skills/GPO.svg' },
      { alt: 'SSSD icon', src: './assets/skills/SSSD.svg' },
      { alt: 'OpenSSL icon', src: './assets/skills/OpenSSL.svg' },
    ]
  },
  {
    id: 'chemAR',
    title: 'ChemAR',
    thumbnail: './assets/projectThumbnails/ChemAR.gif',
    tag: 'Education Software',
    date: '2024-12',
    description: 'An AR-based chemistry education platform built to help visualize complex molecules in 3D, enhancing engagement and learning for Dalhousie Chemistry students.',
    details: {
      inspiration: 'ChemAR was created to make chemistry interactive and engaging by visualizing molecules in 3D, helping students explore complex structures intuitively.',
      timeline: 'From September to December 2024, I collaborated as a junior developer with a team of senior and junior developers, guided by our Development Director.',
      learning: 'This project enhanced my technical skills and taught me valuable collaboration and communication techniques for future endeavors.'
    },
    links: {
      website: 'https://archemapp.azurewebsites.net'
    },
    skills: [
      { alt: 'NodeJS icon', src: './assets/skills/NodeJS.svg' },
      { alt: 'ThreeJS icon', src: './assets/skills/ThreeJS.svg' },
      { alt: 'EJS icon', src: './assets/skills/EJS.svg' },
      { alt: 'jQuery icon', src: './assets/skills/jQuery.svg' },
      { alt: 'Agile icon', src: './assets/skills/Agile.svg' },
      { alt: 'REST icon', src: './assets/skills/REST.svg' },
      { alt: 'JIRA icon', src: './assets/skills/JIRA.svg' }
    ]
  },
  {
    id: 'vision',
    title: 'Emission Vision (Algae Correlation)',
    thumbnail: './assets/projectThumbnails/CO2Vision.gif',
    tag: 'Climate Change',
    date: '2024-10',
    description: 'This project maps algal growth against CO2 emissions in Alberta to identify spatial correlations and trends.',
    details: {
      inspiration: 'Emission Vision was inspired by the urgent need to explore innovative ways to mitigate CO2 emissions in Alberta.',
      timeline: 'Developed in October 2024 during the intense 48-hour NASA Space Apps Hackathon.',
      learning: 'Gained valuable insights into geospatial analysis and the power of collaboration under pressure.'
    },
    links: {
      website: 'https://algaeandco2.vercel.app/',
      github: 'https://github.com/KevinDal2027/communitymappingNASAHackathon2024'
    },
    skills: [
      { alt: 'Python icon', src: './assets/skills/Python.svg' },
      { alt: 'Flask icon', src: './assets/skills/Flask.svg' },
      { alt: 'Folium icon', src: './assets/skills/Folium.svg' },
      { alt: 'mySQL icon', src: './assets/skills/mySQL.svg' },
      { alt: 'Bootstrap icon', src: './assets/skills/Bootstrap.svg' },
      { alt: 'JSON icon', src: './assets/skills/JSON.svg' }
    ]
  },
  {
    id: 'clearCal',
    title: 'ClearCal AI (Lesser Stress for Best)',
    thumbnail: './assets/projectThumbnails/ClearCal.gif',
    tag: 'Generative AI',
    date: '2025-01',
    description: 'ClearCal AI is an intelligent task manager that automates scheduling with AI and Google Calendar integration, reducing user\'s stress by helping them manage their time more effectively. It features speech-to-text input to generate detailed action plans to streamline productivity.',
    details: {
      inspiration: 'As university students, we face some of the most stressful challenges: applying for jobs, studying for exams, and managing tight assignment deadlines. These pressures made us resonate with the topic of stress. We wanted to create something that could make our lives easier by saving us time, helping us structure our days, and ultimately reducing stress as much as possible.',
      timeline: 'Developed in January 2025 during the 48-hour GenAI Hackathon and collaborated in a team of 5.',
      learning: 'Implemented speech-to-text, detailed subtasks, and Google Calendar integration with OAuth. We learned prompt engineering, data cleaning, React, and API usage.'
    },
    links: {
      website: 'https://clearcalai.vercel.app',
      github: 'https://github.com/KevinDal2027/genaihackathon'
    },
    skills: [
      { alt: 'React icon', src: './assets/skills/React.js.svg' },
      { alt: 'NodeJS icon', src: './assets/skills/NodeJS.svg' },
      { alt: 'Bootstrap icon', src: './assets/skills/Bootstrap.svg' },
      { alt: 'JavaScript icon', src: './assets/skills/JavaScript.svg' },
      { alt: 'Vite icon', src: './assets/skills/Vite.svg' },
      { alt: 'GeminiAI icon', src: './assets/skills/gemini.svg' },
      { alt: 'GoogleCalendar icon', src: './assets/skills/GoogleCal.svg' }
    ]
  },
  {
    id: 'taskManager',
    title: 'Task Manager – ASP.NET Core & EF Core',
    thumbnail: './assets/projectThumbnails/taskManager.png',
    tag: 'API Development',
    date: '2025-01',
    description: 'This is a lightweight and efficient task management app built with ASP.NET Core and EF Core, designed to help users organize and prioritize their tasks effortlessly. It features a clean API for seamless task creation, updates, and deletion, with automatic sorting by due date and priority.',
    details: {
      inspiration: 'I started this project to get hands-on experience with C# and explore the .NET ecosystem, specifically ASP.NET Core and Entity Framework Core. Building a Task Manager allowed me to understand backend development, API design, and database management while working with a structured framework. This project served as a practical way to apply my learning and improve my development skills in a real-world scenario.',
      timeline: 'Developed in January 2025 as a part of a personal learning initiative to enhance skills in ASP.NET Core, EF Core, and API development.',
      learning: 'Built a Minimal API for seamless task management. Implemented task sorting by due date and priority. Strengthened knowledge of database management (EF Core) and backend development.'
    },
    links: {
      github: 'https://github.com/KevinDal2027/TaskManager-.NET-Framework'
    },
    skills: [
      { alt: 'C# icon', src: './assets/skills/CSharp.svg' },
      { alt: 'ASP.NET icon', src: './assets/skills/ASP.svg' },
      { alt: 'SQL icon', src: './assets/skills/SQL.svg' },
      { alt: 'HTML icon', src: './assets/skills/HTML.svg' },
      { alt: 'CSS icon', src: './assets/skills/CSS.svg' },
      { alt: 'JS icon', src: './assets/skills/JavaScript.svg' }
    ]
  },
  {
    id: 'emotion',
    title: 'Emotion Analysis and Prediction',
    thumbnail: './assets/projectThumbnails/Emotion.svg',
    tag: 'Machine Learning',
    date: '2024-12',
    description: 'This emotion analysis and prediction project uses NLP techniques to analyze text and predict emotions with machine learning models. It uses spaCy for processing, Matplotlib and pandas for visualization, and evaluates models like Linear Regression and Decision Trees for accuracy.',
    details: {
      inspiration: 'I was in class with my friend when I heard the person next to me talking about Alexithymia. So I searched it up, Alexithymia is when a person has difficulty experiencing, identifying, and expressing emotions. Then I thought of an application that can detect what the emotion is based on the text.',
      timeline: 'Developed in December 2024 during one week as my side project.',
      learning: 'Implemented machine learning models (Linear Regression and DecisionTreeClassifier) to predict models, using NLP technique through spaCy.'
    },
    links: {
      website: 'https://text-to-emotion-prediction-website.onrender.com/',
      github: 'https://github.com/KevinDal2027/TextToEmotionPredictionModel'
    },
    skills: [
      { alt: 'Python icon', src: './assets/skills/Python.svg' },
      { alt: 'Flask icon', src: './assets/skills/Flask.svg' },
      { alt: 'Matplotlib icon', src: './assets/skills/matplotlib.svg' },
      { alt: 'Pandas icon', src: './assets/skills/Pandas.svg' },
      { alt: 'Scikit-learn icon', src: './assets/skills/scikit.svg' },
      { alt: 'Spacy icon', src: './assets/skills/Spacy.svg' }
    ]
  },
  // {
  //   id: 'weather',
  //   title: 'Weather App',
  //   thumbnail: './assets/projectThumbnails/Weather.gif',
  //   tag: 'First Project',
  //   date: '2024-05',
  //   description: 'A Java Swing GUI app that retrieves and displays real-time weather data from OpenWeatherAPI. It integrates JSON parsing and HTTP connection handling to ensure accurate and reliable weather updates, providing users with a seamless experience.',
  //   details: {
  //     inspiration: 'It was the summer of 2024, on a hot sunny day. I was not going to go outside in that heat. So I told myself "let\'s just stay inside". Then I realized I was literally doing nothing. So I thought, "Stop sitting still and make a project". And as a first-year, I thought making a project is going to be so fun, so a simple Weather App it was.',
  //     timeline: 'Developed in May 2024 during the 2 weeks.',
  //     learning: 'That was my first time actually making a project in Java. I learned so much about different types of Java Framework and having to play around with Java.net for HTTP Connection was really fascinating.'
  //   },
  //   links: {
  //     github: 'https://github.com/KevinDal2027/WeatherAppJava'
  //   },
  //   skills: [
  //     { alt: 'Java icon', src: './assets/skills/Java.svg' },
  //     { alt: 'Java Swing icon', src: './assets/skills/Swing.svg' },
  //     { alt: 'Java Net icon', src: './assets/skills/Net.svg' },
  //     { alt: 'JSON icon', src: './assets/skills/JSON.svg' },
  //     { alt: 'OpenWeatherAPI icon', src: './assets/skills/openAPI.svg' },
  //     { alt: 'REST icon', src: './assets/skills/REST.svg' }
  //   ]
  // },
  {
    id: 'escape',
    title: 'Escape Room (Global Game Jam 2025)',
    thumbnail: './assets/projectThumbnails/buble.gif',
    tag: 'Game Development',
    date: '2025-01',
    description: 'Escape Michael Bublé\'s bubble gum factory in this quirky Unity game! Use bubble gum to float, dodge hazards, and reach the exit before running out or getting caught.',
    details: {
      inspiration: 'In the Global Game Jam 2025, when the theme was published that we had to make a game based on "Bubble". And it was snowing outside, so our plan was made. We executed the plan and made a game where you have to escape Michael Buble\'s bubble gum factory.',
      timeline: 'Developed in January 2025 during the 48 hours Global Game Jam in a team of 3.',
      learning: 'That was my first time actually making a game. Although, I had to learn C# to make game mechanic scripts, it was very easy to pick up since it is so similar to Java. I had so much fun designing meshes and animations.'
    },
    links: {
      website: 'https://perfectoctogon.itch.io/escape-michael-bubles-bubblegum-factory',
      github: 'https://github.com/KevinDal2027/GlobalGamejam2025'
    },
    skills: [
      { alt: 'Unity icon', src: './assets/skills/unity.svg' },
      { alt: 'C# icon', src: './assets/skills/CSharp.svg' }
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    thumbnail: './K.png',
    tag: 'Portfolio',
    date: '2025-02',
    description: 'Well... You are on it right now!!! I don\'t think I need description for this one. Check it out for yourself!!! Click on About to find out more about me, Projects to see my work, and maybe checkout my LinkedIn and GitHub.',
    details: {
      inspiration: 'Literally everyone had a website to show off their projects. So I thought, "I should make one too". And here we are.',
      timeline: 'I started February 6, 2025.',
      learning: 'Making a website about yourself professionally is kinda fun! I get to be so creative!!!'
    },
    links: {
      github: 'https://github.com/KevinDal2027/KevinPortfolio'
    },
    skills: [
      { alt: 'React JS icon', src: './assets/skills/React.js.svg' },
      { alt: 'Bootstrap icon', src: './assets/skills/Bootstrap.svg' },
      { alt: 'Vite icon', src: './assets/skills/Vite.svg' },
      { alt: 'HTML icon', src: './assets/skills/HTML.svg' },
      { alt: 'CSS icon', src: './assets/skills/CSS.svg' },
      { alt: 'JavaScript icon', src: './assets/skills/JavaScript.svg' }
    ]
  }
];

export default projects; 