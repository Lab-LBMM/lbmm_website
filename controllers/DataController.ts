import {
  PersonalInfo,
  Publication,
  Collaboration,
  Initiative,
  ProfessionalExperience,
  Education,
  Award,
  EducationInitiative,
  ProgrammingSkill,
  CurriculumLinks,
  LabInfo,
} from '@/models/DataModels'

export class DataController {
  static getLabInfo(): LabInfo {
    return {
      name: 'LBMM RACS',
      fullName: 'Laboratory of Bioinformatics and Microbial Multi-omics',
      acronym: 'LBMM',
      description: 'Research laboratory dedicated to bioinformatics and multi-omics analysis of microorganisms. We combine computational approaches with biological research to advance our understanding of microbial systems.',
    }
  }

  static getPersonalInfo(): PersonalInfo {
    return {
      name: 'Dr. Renato A. Corrêa dos Santos',
      title: 'Ph.D. in Sciences',
      bio: 'Researcher dedicated to advancing biological sciences through computational reproducibility. Working to promote the use of reproducible practices in scientific research in Brazil and Portuguese-speaking countries. My research focuses on developing methodologies and tools that ensure reproducibility and transparency in biological data analysis, contributing to the strengthening of open science in the region.',
      interests: [
        'Genomics, Transcriptomics, Metataxonomics, and Phylogenetics',
        'Bioinformatics Education',
        'Mental Health',
        'Microbiology and Plant Biology',
        'Research Ethics and Integrity',
        'Computer Science, Data Science, and Data Analysis',
        'Genetics and Molecular Biology',
      ],
      contact: {
        email: 'renatoacsantos@gmail.com',
        institutionalEmail: 'renatoacsantos@usp.br',
        phone: '+55 (19) 99722-5665',
        address: 'Brazil',
        socialMedia: {
          instagram: 'https://www.instagram.com/renato.correa.182/',
          facebook: 'https://www.facebook.com/renato.correa.182',
          linkedin: 'https://www.linkedin.com/in/renato-augusto-corr%C3%AAa-dos-santos-263202132/',
          orcid: 'https://orcid.org/0000-0003-0826-5479',
        },
      },
    }
  }

  static getInitiatives(): Initiative[] {
    return [
      {
        id: '1',
        title: 'Reprodutibilidade Computacional Bio',
        description: 'Initiative to promote the use of computational reproducibility in the biological sciences in Brazil and other Portuguese-speaking countries. We are also working in collaboration with the international community in Latin America to promote the awareness on the importance of this topic in the region. Find out more about our project on Instagram.',
        links: {
          instagram: 'https://www.instagram.com/reprodcomputbio/',
        },
      },
    ]
  }

  static getPublications(): Publication[] {
    return [
      {
        id: '1',
        title: 'In this manuscript, we describe the organization of the Brazilian Python Workshop for Biological Data',
        authors: ['Zuvanov', 'Garcia', 'Correr', 'Bizarria Jr', 'et al.', 'Santos'],
        journal: 'PLOS Computational Biology',
        year: 2021,
        link: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009534',
      },
      {
        id: '2',
        title: 'Identification of sites under positive selection in genes involved in antifungal resistance in Aspergillus section Fumigati',
        authors: ['Santos', 'et al.', 'Rokas'],
        journal: 'Frontiers in Fungal Biology',
        year: 2021,
        link: 'https://www.frontiersin.org/journals/fungal-biology/articles/10.3389/ffunb.2021.723051/full',
      },
      {
        id: '3',
        title: 'Analysis of genomic and phenotypic heterogeneity in three Aspergillus species, including two cryptic species',
        authors: ['Santos', 'et al.', 'Rokas'],
        journal: 'Frontiers in Genetics',
        year: 2020,
        link: 'https://www.frontiersin.org/articles/10.3389/fgene.2020.00459/full',
      },
      {
        id: '4',
        title: 'In this manuscript we describe ploidyNGS, a software to visually exploit ploidy using Next Generation Sequencing data',
        authors: ['Santos', 'et al.', 'Riaño-Pachón'],
        journal: 'Bioinformatics',
        year: 2017,
        link: 'https://academic.oup.com/bioinformatics/article/33/16/2575/3104472',
      },
    ]
  }

  static getProfessionalExperience(): ProfessionalExperience[] {
    return [
      {
        id: '1',
        position: 'Post-doctoral researcher',
        institution: 'Wallace Lab, University of Georgia',
        period: '2024 - January/2025',
        link: 'https://wallacelab.uga.edu/',
      },
      {
        id: '2',
        position: 'Post-doctoral researcher',
        institution: 'Center for Nuclear Energy in Agriculture, University of São Paulo',
        period: '2022 - current',
        link: 'https://www.cena.usp.br/',
      },
    ]
  }

  static getEducation(): Education[] {
    return [
      {
        id: '1',
        degree: 'Ph.D. in Genetics and Molecular Biology',
        institution: 'University of Campinas (UNICAMP)',
        period: '2021',
        link: 'https://www.rc.unesp.br/',
        thesisLink: 'https://santosrac.netlify.app/curriculum/pdf/tcc/000775487.pdf',
        thesisLanguage: 'English',
      },
      {
        id: '2',
        degree: 'M.Sc. in Genetics and Molecular Biology',
        institution: 'UNICAMP',
        period: '2018',
        thesisLink: 'https://santosrac.netlify.app/curriculum/pdf/dissertation/296898430.pdf',
        thesisLanguage: 'Portuguese',
      },
      {
        id: '3',
        degree: 'Bachelor in Biological Sciences',
        institution: 'São Paulo State University (UNESP)',
        period: '2015',
        thesisLink: 'https://santosrac.netlify.app/curriculum/pdf/tcc/000775487.pdf',
        thesisLanguage: 'Portuguese',
      },
    ]
  }

  static getAwards(): Award[] {
    return [
      {
        id: '1',
        title: 'Best poster presentation at the "Simpósio dos Pós-graduandos do CENA" (Biology)',
        year: 2022,
      },
      {
        id: '2',
        title: 'Member of team of winning contributors of 2018 ISCB Wikipedia Competition',
        year: 2018,
        description: 'International Society for Computational Biology (ISCB) and WikiProject Computational Biology',
      },
      {
        id: '3',
        title: 'Member of the eLife Community Ambassadors programme',
        year: 2022,
        description: '2022-2023',
      },
    ]
  }

  static getEducationInitiatives(): EducationInitiative[] {
    return [
      {
        id: '1',
        title: 'Brazilian Python Workshop for Biological Data',
        period: '2017 - 2022',
      },
      {
        id: '2',
        title: 'Python Workshop for Microbiology Data',
        period: '2021 - 2022',
      },
      {
        id: '3',
        title: 'Python Workshop for Plant Biology Data',
        period: '2022 - 2022',
      },
      {
        id: '4',
        title: 'Introduction to Python programming for bioscientists at the ISMB conference',
        period: '2022 - 2022',
        link: 'https://github.com/SantosRAC/intro_python_ismb2022',
      },
    ]
  }

  static getProgrammingSkills(): ProgrammingSkill[] {
    return [
      {
        language: 'Python',
        level: 'intermediary',
        years: 9,
        description: 'exploratory data analysis; numpy, pandas, matplotlib, seaborn, plotly',
      },
      {
        language: 'Perl',
        level: 'intermediary',
        description: 'data wrangling and regular expression',
      },
      {
        language: 'R',
        level: 'intermediary',
        description: 'exploratory data analysis',
      },
      {
        language: 'SQL',
        level: 'beginner',
      },
      {
        language: 'Julia',
        level: 'beginner',
      },
      {
        language: 'JavaScript',
        level: 'beginner',
      },
    ]
  }

  static getCurriculumLinks(): CurriculumLinks {
    return {
      googleScholar: 'https://scholar.google.com.br/citations?user=22CKgnIAAAAJ',
      lattes: 'https://lattes.cnpq.br/3339727232509001',
      orcid: 'https://orcid.org/0000-0003-0826-5479',
      publons: 'https://publons.com/researcher/1343305/renato-augusto-correa-dos-santos/',
      fapesp: 'https://bv.fapesp.br/en/pesquisador/164909/renato-augusto-correa-dos-santos/',
      github: 'https://github.com/SantosRAC',
      gitlab: 'https://gitlab.com/SantosRAC',
    }
  }

  static getCollaborations(): Collaboration[] {
    return [
      {
        id: 'active-1',
        name: 'Prof. Dr. rer. nat. Diego Mauricio Riaño-Pachón',
        institution: 'University of São Paulo (USP), SP, Brazil',
        lab: 'LabBCES',
        link: 'https://labbces.netlify.app/',
        type: 'active',
      },
      {
        id: 'active-2',
        name: 'Prof. Dr. Francisco Scaglia Linhares',
        institution: 'University of São Paulo (USP), SP, Brazil',
        type: 'active',
      },
      {
        id: 'active-3',
        name: 'Prof. Dr. Igor Cesarino',
        institution: 'University of São Paulo (USP), SP, Brazil',
        lab: 'Lignin Lab',
        link: 'https://sites.usp.br/ligninlab/',
        type: 'active',
      },
      {
        id: 'active-4',
        name: 'Prof. Dr. Marcos S. Buckeridge',
        institution: 'University of São Paulo (USP), SP, Brazil',
        link: 'https://www.ib.usp.br/telefones-ib/docentes-ib/124-marcos-silveira-buckeridge.html',
        type: 'active',
      },
      {
        id: 'active-5',
        name: 'Prof. Dr. Jason G. Wallace',
        institution: 'University of Georgia, Athens, GA, U.S.',
        lab: 'Wallace Lab, University of Georgia',
        link: 'https://wallacelab.uga.edu/',
        type: 'active',
      },
      {
        id: 'active-6',
        name: 'Prof. Dr. Alexandre Colato',
        institution: 'Federal University of São Carlos (UFSCar), SP, Brazil',
        type: 'active',
      },
      {
        id: 'active-7',
        name: 'Prof. Dr. Wagner Rodrigo de Souza',
        institution: 'Federal University of ABC (UFABC), SP, Brazil',
        type: 'active',
      },
      {
        id: 'active-8',
        name: 'Prof. Dr. Paul Rowley',
        institution: 'University of Idaho, Moscow, U.S.',
        lab: 'Rowley Lab',
        link: 'https://www.rowleylab.com/',
        type: 'active',
      },
      {
        id: 'active-9',
        name: 'Dr. Rodolfo Bizarria Jr.',
        institution: 'University of Idaho, Moscow, U.S.',
        type: 'active',
      },
      {
        id: 'active-10',
        name: 'Prof. Dr. Valeria Maia',
        institution: 'University of Campinas (UNICAMP)',
        lab: 'CPQBA',
        type: 'active',
      },
      {
        id: 'active-11',
        name: 'Dr. Kelly Johanna Hidalgo-Martinez',
        institution: 'University of Campinas (UNICAMP)',
        lab: 'CPQBA',
        type: 'active',
      },
      {
        id: 'worked-1',
        name: 'Prof. Dr. Flavia Vischi Winck',
        institution: 'CENA/USP',
        lab: 'LABIS',
        link: 'https://www.cena.usp.br/flavia-vischi-winck',
        type: 'worked_with',
      },
      {
        id: 'worked-2',
        name: 'Prof. Dr. Lucas Mendes',
        institution: 'CENA/USP',
        link: 'https://www.cena.usp.br/lucas-william-mendes',
        type: 'worked_with',
      },
      {
        id: 'worked-3',
        name: 'Dr. Thierry Pelegrinetti',
        institution: 'CENA/USP',
        type: 'worked_with',
      },
      {
        id: 'worked-4',
        name: 'Prof. Dr. Alberto José Arab Olavarrieta',
        institution: 'Federal University of ABC (UFABC)',
        type: 'worked_with',
      },
      {
        id: 'worked-5',
        name: 'Dr. Leticia Menezes',
        institution: 'Federal University of ABC (UFABC)',
        type: 'worked_with',
      },
      {
        id: 'worked-6',
        name: 'Luciana Campos Paulino',
        institution: 'Federal University of ABC (UFABC)',
        type: 'worked_with',
      },
      {
        id: 'worked-7',
        name: 'Prof. Dr. Yunrong Chai',
        institution: 'Northeastern University, Boston, MA, U.S.',
        type: 'worked_with',
      },
      {
        id: 'worked-8',
        name: 'Dr. Leticia Angelini',
        institution: 'Northeastern University, Boston, MA, U.S.',
        type: 'worked_with',
      },
      {
        id: 'worked-9',
        name: 'Prof. Dr. Gustavo Henrique Goldman',
        institution: 'University of São Paulo',
        type: 'worked_with',
      },
      {
        id: 'worked-10',
        name: 'Prof. Dr. Antonis Rokas',
        institution: 'Vanderbilt University, Nashville, TN, U.S.',
        type: 'worked_with',
      },
      {
        id: 'worked-11',
        name: 'Prof. Dr. Ricardo Cerri',
        institution: 'UFSCar',
        lab: 'BioMaL',
        link: 'http://www.biomal.ufscar.br/',
        type: 'worked_with',
      },
    ]
  }
}

