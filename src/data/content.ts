export type LinkItem = {
  label: string;
  href: string;
  type?: string;
  description?: string;
  thumbnail?: string;
};

export type ResearchArea = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  status: "current" | "past";
  period: string;
  organisation: string;
  mark: string;
  summary: string;
  details: string[];
  tags: string[];
  image?: string;
  imageAlt: string;
  links: LinkItem[];
};

export type Publication = {
  year: number;
  type: string;
  title: string;
  authors: string;
  venue: string;
  note?: string;
  links: LinkItem[];
};

export const socialLinks: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/CosmicElysium",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandersivitilli/",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-2563-4793",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=k4nToxcAAAAJ&hl=en",
  },
  {
    label: "IDIA VisLab",
    href: "https://vislab.idia.ac.za/",
  },
];

export const currentResearch: ResearchArea[] = [
  {
    title: "Immersive scientific environments",
    description:
      "I develop virtual reality, digital-dome and spatial-computing environments for exploring complex astronomical and Earth-observation data, including connected systems for collaborative analysis.",
  },
  {
    title: "Human-centred AI interaction",
    description:
      "I investigate natural-language interfaces, AI-assisted navigation and human-in-the-loop workflows that keep researchers actively involved in interpreting data and steering scientific systems.",
  },
  {
    title: "Planetary science and machine learning",
    description:
      "I develop and validate neural-network methods for identifying asteroid families, while using immersive visualisation to inspect real and synthetic training data and model behaviour.",
  },
];

export const projects: Project[] = [
  {
    slug: "asteroid-family-machine-learning",
    title: "Asteroid-family machine learning",
    status: "current",
    period: "January 2025 - Present",
    organisation: "Armagh Observatory & Planetarium",
    mark: "ML / AST",
    summary:
      "Machine-learning methods for identifying asteroid families formed through disruptive events over the history of the Solar System.",
    details: [
      "The project develops, optimises and validates artificial neural networks designed to identify groups of asteroids that share a common origin.",
      "Alongside the machine-learning work, I am exploring immersive visualisation methods for interrogating both real and synthetic training data, with the aim of making model behaviour and classification structure easier to inspect.",
      "This creates a human-in-the-loop workflow in which statistical methods and visual reasoning support one another rather than operating as separate stages of the analysis.",
    ],
    tags: [
      "Planetary science",
      "Artificial neural networks",
      "Asteroid families",
      "Synthetic data",
      "Immersive analytics",
    ],
    image: "/images/projects/ann.png",
    imageAlt:
      "A visualisation of asteroid-family structure and machine-learning classification",
    links: [
      {
        label: "EPSC-DPS 2025 abstract",
        type: "Conference abstract",
        href: "https://doi.org/10.5194/epsc-dps2025-1601",
        description:
          "Supporting Machine Learning-Based Asteroid Family Classification with Immersive Visualisation.",
      },
    ],
  },
  {
    slug: "vr2dome",
    title: "VR2Dome",
    status: "current",
    period: "June 2019 - Present",
    organisation: "Armagh Observatory & Planetarium",
    mark: "VR ↔ DOME",
    summary:
      "A research and development programme joining the intuitive navigation of virtual reality with the shared, collaborative environment of a digital dome theatre.",
    details: [
      "VR2Dome builds on my doctoral work in digital-planetarium interaction and my professional experience in immersive data visualisation. It explores new methods for interacting with large-scale immersive data environments, with a focus on accessibility, collaboration, scientific utility and digital-twin approaches for immersive facilities.",
      "The concept bridges the strengths of VR and the dome: a researcher can navigate and select data through an intuitive individual interface while a group shares the resulting view and analysis inside the theatre. This lowers barriers to scientific use without losing the dome's value for education and public engagement.",
      "The current phase is exploring how VR2Dome could develop into a human-in-the-loop digital twin of a planetarium, linking a virtual representation of the dome to live or simulated system state and, potentially, bidirectional control for monitoring, rehearsal, operation and collaborative analysis.",
      "Early proof-of-concept demonstrations were developed with IDIA and Iziko Planetarium in Cape Town and presented at data-visualisation workshops. A live demonstration at the 2019 Data to Dome Workshop was later highlighted in the President's Message of The Planetarian.",
    ],
    tags: [
      "Collaborative immersion",
      "Digital domes",
      "Virtual reality",
      "Digital twins",
      "Human-in-the-loop systems",
    ],
    image: "/images/projects/vr2dome.png",
    imageAlt:
      "A virtual-reality interface controlling scientific content inside a digital dome theatre",
    links: [
      {
        label: "The Planetarian, December 2019",
        type: "Editorial",
        href: "https://cdn.ymaws.com/www.ips-planetarium.org/resource/resmgr/planetarian/201912planetarian.pdf",
        description:
          "The issue whose President's Message highlighted the VR-to-dome demonstration at the Data to Dome Workshop.",
      },
      {
        label: "Data to Dome workshop report",
        type: "Workshop coverage",
        href: "https://www.colgate.edu/news/stories/colgate-hosts-data-dome-planetarium-conference",
        description:
          "Coverage of the 2019 workshop and its experiments with VR interfaces and planetarium audiences.",
      },
    ],
  },
  {
    slug: "idavie",
    title: "iDaVIE",
    status: "current",
    period: "May 2018 - Present",
    organisation:
      "IDIA — Inter-University Institute for Data Intensive Astronomy",
    mark: "iDaVIE",
    summary:
      "An open-source virtual-reality software suite for interactive exploration and analysis of volumetric data cubes and multidimensional catalogues.",
    details: [
      "As lead developer, I work across the iDaVIE software suite. Its principal tools render scientific datasets in a room-scale immersive environment where users can navigate, select, inspect and edit structures directly in three dimensions.",
      "The interaction model is designed to reduce the additional mental work involved in reasoning about 3D structures through conventional 2D interfaces, allowing researchers to focus more directly on scientific relationships and anomalies.",
      "I also lead the iDaVIE-d prototype, which brings the rendering and interaction capabilities of the VR environment into the digital planetarium.",
      "Although astronomy remains the primary application, the platform has also supported exploratory work with datasets from neuroscience, chemical engineering and astrobiology. iDaVIE-v is developed in collaboration with INAF-OAC.",
    ],
    tags: [
      "Scientific software",
      "Volumetric rendering",
      "Virtual reality",
      "Radio astronomy",
      "Multidimensional data",
    ],
    image: "/images/projects/idavie.png",
    imageAlt:
      "A researcher exploring a three-dimensional astronomical data cube inside iDaVIE",
    links: [
      {
        label: "iDaVIE on GitHub",
        type: "Source code",
        href: "https://github.com/idia-astro/iDaVIE/",
        description:
          "Open-source code, releases and issue tracking for the iDaVIE software suite.",
      },
      {
        label: "iDaVIE documentation",
        type: "Documentation",
        href: "https://idavie.readthedocs.io/",
        description:
          "Installation guidance, tutorials and reference material for iDaVIE 1.0.",
      },
      {
        label: "iDaVIE v1.0 paper",
        type: "Journal article",
        href: "https://doi.org/10.1016/j.ascom.2026.101109",
        description:
          "The 2026 Astronomy and Computing article presenting the version 1.0 software and its scientific workflows.",
      },
    ],
  },
  {
    slug: "spacedome",
    title: "SpaceDome",
    status: "current",
    period: "March 2026 - Present",
    organisation: "Armagh Observatory & Planetarium",
    mark: "EO / DOME",
    summary:
      "An ESA-funded immersive platform for exploring Copernicus Earth-observation data through connected virtual-reality and digital-dome environments.",
    details: [
      "SpaceDome combines real-time geospatial data, AI orchestration and spatial computing to support intuitive interaction with large Earth-observation datasets.",
      "My role covers technical direction across the platform, including system architecture, data pipelines, visualisation workflows and the integration of individual VR exploration with collaborative digital-dome experiences.",
      "The work also explores natural-language interfaces and AI-assisted navigation so that users can interrogate complex scientific information without losing the human role in directing and interpreting the analysis.",
    ],
    tags: [
      "Earth observation",
      "Copernicus data",
      "Spatial computing",
      "AI orchestration",
      "VR and digital domes",
    ],
    image: "/images/projects/spacedome.png",
    imageAlt:
      "Earth-observation data displayed across virtual-reality and digital-dome environments",
    links: [],
  },
  {
    slug: "digital-planetarium-learning",
    title: "Characterising the Digital Planetarium as a Teaching and Learning Space",
    status: "past",
    period: "PhD project · 2018 - 2023",
    organisation: "University of Cape Town",
    mark: "MCDiP",
    summary:
      "Doctoral research investigating how students engage with a digital planetarium, what shapes the learning environment and how those findings can guide curriculum design.",
    details: [
      "The study combined student responses from two university planetarium visits with detailed observational data. I designed the response instrument, created show content for the second visit and analysed both datasets using the Grounded Theory Method.",
      "The student data produced a localised model centred on a spectrum of attentiveness that strongly influenced engagement. The observational data produced a second model describing the contextual factors that shape the planetarium teaching and learning space.",
      "I then connected the localised models with Working Memory and Cognitive Load Theory to develop the Model for Curriculum Design in the Planetarium, or MCDiP: a systematic framework for shaping the digital planetarium as an effective teaching and learning environment.",
    ],
    tags: [
      "Astronomy education research",
      "Grounded Theory Method",
      "Cognitive Load Theory",
      "Digital planetariums",
      "Curriculum design",
    ],
    image: "/images/projects/digital-planetarium/iziko-planetarium.webp",
    imageAlt:
      "Students taking part in an astronomy learning experience inside a digital planetarium",
    links: [
      {
        label: "Doctoral thesis",
        type: "Thesis",
        href: "https://open.uct.ac.za/handle/11427/40358",
        description:
          "The complete study and the Model for Curriculum Design in the Planetarium.",
      },
      {
        label: "Investigating how students engage with a digital planetarium",
        type: "Peer-reviewed proceedings",
        href: "https://doi.org/10.1119/perc.2023.pr.Sivitilli",
        description:
          "The first peer-reviewed publication from the project, presented in the 2023 PERC proceedings.",
      },
    ],
  },
  {
    slug: "laser-alignment-telescope",
    title: "Laser Alignment Telescope at the Large Binocular Telescope",
    status: "past",
    period: "Master's project · May 2015 - June 2016",
    organisation: "Max Planck Institute for Astronomy · Heidelberg University",
    mark: "LAT / LBT",
    summary:
      "A purpose-built telescope and open-source image-analysis system for automatically locating and aligning the ARGOS laser guide stars.",
    details: [
      "As part of the Advanced Rayleigh Guided Ground Layer Adaptive Optics System, I led development of the Laser Alignment Telescope used to detect the initial positions of the guide lasers on sky and align them with the optical axis.",
      "The work combined instrument design, construction, programming, installation and commissioning at the Large Binocular Telescope Observatory in Arizona.",
      "The automated alignment approach was released as the open-source Collimating Smart Laser Alignment Algorithm, or ColSLAA, which uses LAT images to determine the pointing directions of the guide stars.",
    ],
    tags: [
      "Adaptive optics",
      "Astronomical instrumentation",
      "Computer vision",
      "Laser guide stars",
      "Open-source software",
    ],
    image: "/images/projects/laser-alignment/argos-lasers.webp",
    imageAlt:
      "The ARGOS laser guide stars and Laser Alignment Telescope at the Large Binocular Telescope",
    links: [
      {
        label: "Master's thesis",
        type: "Thesis",
        href: "/documents/sivitilli_masters_thesis.pdf",
        description:
          "The written report describing the design, construction and commissioning of the Laser Alignment Telescope and its software.",
      },
      {
        label: "Smart Laser Alignment algorithm",
        type: "Source code",
        href: "https://github.com/CosmicElysium/SLAAlgorithm",
        description:
          "Open-source image-analysis software for locating and aligning the ARGOS guide stars.",
      },
      {
        label: "ARGOS project",
        type: "Project website",
        href: "https://www.mpe.mpg.de/ir/argos",
        description:
          "Background on the laser-guide-star adaptive-optics system at the Large Binocular Telescope.",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    year: 2026,
    type: "Journal article",
    title:
      "iDaVIE v1.0: A virtual reality tool for interactive analysis of astronomical data cubes",
    authors:
      "Alexander Sivitilli, Lucia Marchetti, Angus Comrie, P. Cilliers Pretorius, Thijs J. M. van der Hulst, Fabio Vitello, D. J. Pisano, Ugo Becciani, A. Russell Taylor, Paolo Serra, Mayhew Steyn and Michaela van Zyl",
    venue: "Astronomy and Computing, 56, 101109",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.ascom.2026.101109",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2603.15490",
      },
      {
        label: "Code",
        href: "https://github.com/idia-astro/iDaVIE/",
      },
    ],
  },
  {
    year: 2025,
    type: "Conference abstract",
    title:
      "Supporting Machine Learning-Based Asteroid Family Classification with Immersive Visualisation",
    authors: "Alexander Sivitilli, Andrew Marshall-Lee and Apostolos Christou",
    venue: "EPSC-DPS Joint Meeting 2025, EPSC-DPS2025-1601",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.5194/epsc-dps2025-1601",
      },
    ],
  },
  {
    year: 2023,
    type: "Peer-reviewed conference proceeding",
    title: "Investigating how students engage with a digital planetarium",
    authors: "Alexander Sivitilli and Saalih Allie",
    venue: "2023 Physics Education Research Conference Proceedings",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1119/perc.2023.pr.Sivitilli",
      },
      {
        label: "Open PDF",
        href: "https://www.per-central.org/items/perc/5781.pdf",
      },
    ],
  },
  {
    year: 2023,
    type: "Doctoral thesis",
    title:
      "Characterizing the digital planetarium as a teaching and learning space",
    authors: "Alexander Sivitilli",
    venue: "University of Cape Town",
    links: [
      {
        label: "OpenUCT",
        href: "https://open.uct.ac.za/handle/11427/40358",
      },
    ],
  },
  {
    year: 2021,
    type: "Journal article",
    title: "Exploring and interrogating astrophysical data in virtual reality",
    authors:
      "Thomas H. Jarrett, Angus Comrie, Lucia Marchetti, Alexander Sivitilli, Sally Macfarlane, Fabio Vitello, Ugo Becciani, A. Russell Taylor, Jan M. van der Hulst, Paolo Serra, Neil Katz and Michelle E. Cluver",
    venue: "Astronomy and Computing, 37, 100502",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.ascom.2021.100502",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2012.10342",
      },
    ],
  },
  {
    year: 2021,
    type: "Conference proceeding",
    title:
      "iDaVIE-v: Immersive Data Visualisation Interactive Explorer for Volumetric Rendering",
    authors:
      "Lucia Marchetti, Thomas H. Jarrett, Angus Comrie, Alexander K. Sivitilli, Fabio Vitello, Ugo Becciani and A. R. Taylor",
    venue:
      "Astronomical Data Analysis Software and Systems XXX, ASP Conference Series 532, 85-88",
    links: [
      {
        label: "Open PDF",
        href: "https://www.aspbooks.org/publications/532/085.pdf",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2012.11553",
      },
    ],
  },
  {
    year: 2020,
    type: "Conference proceeding",
    title:
      "Virtual Reality and Immersive Collaborative Environments: the New Frontier for Big Data Visualisation",
    authors:
      "Alexander K. Sivitilli, Angus Comrie, Lucia Marchetti and Thomas H. Jarrett",
    venue:
      "Astronomical Data Analysis Software and Systems XXIX, ASP Conference Series 527, 221",
    links: [
      {
        label: "Publisher",
        href: "https://www.aspbooks.org/a/volumes/article_details/?paper_id=39824",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2103.14397",
      },
    ],
  },
];
