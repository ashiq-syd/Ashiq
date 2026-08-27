import { Project, CapabilityCategory, ExperienceItem, CredentialItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'SYED ASHIQ',
  identifier: 'SYED_ASHIQ',
  title: 'CLOUD & DEVOPS ENGINEER',
  subtitle: 'AWS | DEVOPS | TERRAFORM | PYTHON',
  status: 'AVAILABLE FOR OPPORTUNITIES',
  email: 'syedashiqar51@gmail.com',
  phone: '+91 82209 81125',
  phoneRaw: '+918220981125',
  heroTagline: 'Building secure cloud systems, automating infrastructure, and turning ideas into deployable software.',
  aboutP1: "I'm Syed Ashiq, an Information Technology undergraduate focused on AWS cloud computing, infrastructure automation, DevOps, and secure application architecture.",
  aboutP2: "My hands-on work spans AWS EC2, S3, VPC, IAM and Bedrock, alongside Terraform, Linux, Git, Docker and Python. I enjoy working where software meets infrastructure, with an emphasis on security, reliability and practical automation.",
  terminalObject: `const SYED_ASHIQ = {
  focus: ["AWS", "DevOps", "Terraform"],
  builds: ["Cloud Infrastructure", "AI Applications"],
  principles: ["Security", "Reliability", "Automation"]
};`,
};

export const STATS = [
  { label: 'EDUCATION', value: '2023–27', sub: 'B.Tech in Information Technology' },
  { label: 'CORE EXPERTISE', value: 'AWS', sub: 'Cloud & Infrastructure Focus' },
  { label: 'FEATURED PROJECTS', value: '05', sub: 'Practical Cloud Systems' },
  { label: 'INTERNSHIP', value: '1 MO', sub: '8Queens Software & Tech' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LINKEDIN',
    handle: 'syed-a-7a4306361',
    url: 'https://www.linkedin.com/in/syed-a-7a4306361',
    category: 'PROFESSIONAL NETWORK',
  },
  {
    platform: 'GITHUB',
    handle: 'ashiq-syd',
    url: 'https://github.com/ashiq-syd',
    category: 'CODE REPOSITORIES',
  },
  {
    platform: 'LEETCODE',
    handle: 'syd-ash',
    url: 'https://leetcode.com/u/syd-ash',
    category: 'PROBLEM SOLVING',
  },
];

export const CAPABILITIES: CapabilityCategory[] = [
  {
    number: '01',
    category: 'CLOUD',
    tag: 'CORE',
    technologies: 'AWS EC2 · S3 · VPC · IAM · Bedrock',
    techList: ['AWS EC2', 'AWS S3', 'AWS VPC', 'AWS IAM', 'AWS Bedrock'],
    description: 'Engineering resilient cloud instances, object storage lifecycle management, isolated virtual private networks, least-privilege identity access management, and enterprise foundation model integrations.',
  },
  {
    number: '02',
    category: 'INFRASTRUCTURE',
    tag: 'TOOLS',
    technologies: 'Terraform · Security Groups · NACLs · Auto Scaling · Application Load Balancer',
    techList: ['Terraform', 'Security Groups', 'NACLs', 'Auto Scaling', 'Application Load Balancer'],
    description: 'Infrastructure as Code automation via declarative Terraform state management, stateless network security filtering at subnet and instance layers, and elastic traffic balancing.',
  },
  {
    number: '03',
    category: 'DEVOPS & SYSTEMS',
    tag: 'BUILD',
    technologies: 'Linux · Git · Docker · Shell · Deployment Workflows',
    techList: ['Linux', 'Git', 'Docker (Basics)', 'Shell Scripting', 'Deployment Workflows'],
    description: 'Unix server administration, version control branching strategies, containerized environments, Bash automation pipelines, and continuous delivery deployment setups.',
  },
  {
    number: '04',
    category: 'PROGRAMMING',
    tag: 'BUILD',
    technologies: 'Python · Shell · APIs · Databases · Excel',
    techList: ['Python', 'Shell Scripting', 'REST APIs', 'Databases', 'Excel Automation', 'TypeScript'],
    description: 'Backend script development, data ingestion pipelines, automated ETL workflows, quantitative analysis, and API orchestration.',
  },
  {
    number: '05',
    category: 'ARCHITECTURE',
    tag: 'DESIGN',
    technologies: 'High Availability · Security · Cost Optimization · Secure Application Architecture',
    techList: ['High Availability', 'Security Hardening', 'Cost Optimization', 'Secure Application Architecture'],
    description: 'Architecting multi-AZ fault tolerance, zero-trust cloud network topologies, compute right-sizing, and production-ready system designs.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'bedrock-genai',
    number: '01',
    title: 'AWS BEDROCK GENERATIVE AI APPLICATION',
    category: 'GENERATIVE AI · AWS',
    categoryTag: 'AI & CLOUD',
    description: 'Built a generative AI application using AWS Bedrock foundation models.',
    additionalDetails: [
      'Configured IAM roles and policies to provide secure access to AWS resources.',
      'Leveraged Bedrock serverless API endpoints to orchestrate intelligent AI generation workflows.',
    ],
    technologies: ['AWS Bedrock', 'IAM', 'Generative AI', 'Python', 'Cloud Security'],
    githubUrl: 'https://github.com/ashiq-syd',
    diagramType: 'bedrock',
    architectureHighlights: [
      {
        title: 'Foundation Model Integration',
        description: 'Orchestrated prompt pipelines directly via AWS Bedrock native API without managing underlying GPU clusters.',
      },
      {
        title: 'Granular IAM Security',
        description: 'Enforced least-privilege access policies ensuring API invocations are strictly authenticated and audited.',
      },
    ],
  },
  {
    id: 'transaction-monitoring',
    number: '02',
    title: 'TRANSACTION MONITORING SYSTEM',
    category: 'PYTHON · CLOUD',
    categoryTag: 'DATA & WORKLOAD',
    description: 'Developed a Python-based system to process transaction data and flag anomalies.',
    additionalDetails: [
      'Stored transaction data in AWS S3 and processed workloads using EC2.',
      'Applied IAM policies and logging to simulate fintech compliance requirements.',
    ],
    technologies: ['Python', 'AWS S3', 'AWS EC2', 'IAM', 'Logging', 'Data Processing'],
    githubUrl: 'https://github.com/ashiq-syd',
    diagramType: 'monitoring',
    architectureHighlights: [
      {
        title: 'S3 Data Lake & Workload Worker',
        description: 'Decoupled batch transaction logs in S3 buckets with scheduled EC2 compute workers for anomaly evaluation.',
      },
      {
        title: 'Audit & Compliance Logging',
        description: 'Structured IAM role-based data isolation paired with granular logging to mimic enterprise fintech governance.',
      },
    ],
  },
  {
    id: 'terraform-iac',
    number: '03',
    title: 'TERRAFORM INFRASTRUCTURE AUTOMATION',
    category: 'INFRASTRUCTURE AS CODE · AWS',
    categoryTag: 'DEVOPS & IAC',
    description: 'Provisioned AWS EC2, VPC, and Security Group resources using Terraform.',
    additionalDetails: [
      'Managed infrastructure lifecycle through Terraform plan, apply, and destroy workflows.',
      'Structured modular HCL code for reproducible and idempotent cloud resource deployments.',
    ],
    technologies: ['Terraform', 'AWS EC2', 'AWS VPC', 'Security Groups', 'IaC', 'HCL'],
    githubUrl: 'https://github.com/ashiq-syd',
    diagramType: 'terraform',
    architectureHighlights: [
      {
        title: 'Declarative State Control',
        description: 'Managed complete cloud topologies declaratively, preventing configuration drift across staging and test tiers.',
      },
      {
        title: 'Network & Compute Orchestration',
        description: 'Automated VPC subnets, internet gateways, route tables, and EC2 launch configs in unified code blocks.',
      },
    ],
  },
  {
    id: 'scalable-web-app',
    number: '04',
    title: 'SECURE SCALABLE WEB APPLICATION ON AWS',
    category: 'AWS · CLOUD ARCHITECTURE',
    categoryTag: 'HIGH AVAILABILITY',
    description: 'Designed a highly available web application using EC2, Application Load Balancer, and Auto Scaling.',
    additionalDetails: [
      'Implemented VPC public/private subnets and configured IAM roles, Security Groups, and NACLs.',
      'Automated AWS infrastructure provisioning using Terraform.',
    ],
    technologies: ['EC2', 'Application Load Balancer', 'Auto Scaling', 'VPC', 'IAM', 'Security Groups', 'NACLs', 'Terraform'],
    githubUrl: 'https://github.com/ashiq-syd',
    diagramType: 'ha-web',
    architectureHighlights: [
      {
        title: 'Multi-AZ Auto Scaling & ALB',
        description: 'Balanced incoming web traffic across redundant EC2 instances dynamically scaling based on CPU threshold metrics.',
      },
      {
        title: 'Tiered Network Isolation',
        description: 'Placed app servers in private subnets behind internet-facing ALBs, safeguarded with dual-layer SG & NACL filters.',
      },
    ],
  },
  {
    id: 'ai-design-website',
    number: '05',
    title: 'AI DESIGN WEBSITE',
    category: 'WEB · TYPESCRIPT',
    categoryTag: 'FRONTEND & WEB',
    description: 'Built a web application with Next.js and TypeScript, demonstrating modern frontend development and deployment-ready project structure.',
    additionalDetails: [
      'Engineered clean component hierarchy, robust TypeScript interfaces, and responsive layout systems.',
      'Optimized asset delivery, modern styling, and deployment workflows for production hosting.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Modern Frontend'],
    githubUrl: 'https://github.com/ashiq-syd',
    diagramType: 'nextjs',
    architectureHighlights: [
      {
        title: 'Type-Safe Modular Architecture',
        description: 'Structured typed state models, composable UI patterns, and efficient page hydration.',
      },
      {
        title: 'Production Build Pipeline',
        description: 'Optimized bundle footprints, responsive design breakpoints, and deployment-ready architecture.',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: '8QUEENS SOFTWARE AND TECHNOLOGIES',
    role: 'INTERN',
    duration: 'ONE MONTH',
    description: 'Gained hands-on experience in software development and cloud-based project workflows.',
    responsibilities: [
      'Worked with basic cloud infrastructure concepts and real-time project workflows.',
      'Assisted with application deployment, testing, troubleshooting, and task delivery.',
      'Collaborated with the team to understand requirements and complete assigned work on time.',
      'Developed practical knowledge of cloud computing, automation, and software development practices.',
    ],
    techTags: ['Cloud Infrastructure', 'Software Deployment', 'Testing & QA', 'Team Collaboration', 'Workflow Automation'],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    type: 'EDUCATION',
    title: 'SRM INSTITUTE OF SCIENCE AND TECHNOLOGY',
    subtitle: 'B.Tech. in Information Technology',
    periodOrDetail: '2023 — 2027',
    description: 'Rigorous coursework in computer networks, operating systems, cloud computing, database management systems, data structures, and software engineering principles.',
    badgeCode: 'SRM-IT-2327',
  },
  {
    type: 'CERTIFICATION',
    title: 'AWS CERTIFIED SOLUTIONS ARCHITECT - ASSOCIATE',
    subtitle: 'Cloud Solutions Architect Certification',
    periodOrDetail: 'VALIDATION: 8aba81942ba741778b5eef95d900aaae',
    description: 'Certified in designing secure, scalable, and reliable cloud architectures across AWS compute, networking, storage, IAM security, and cost optimization vectors.',
    validationNumber: '8aba81942ba741778b5eef95d900aaae',
    validationUrl: 'https://aws.amazon.com/verification',
    badgeCode: 'AWS-SAA-VERIFIED',
  },
];

export const RESUME_RAW = {
  name: 'SYED ASHIQ',
  phone: '8220981125',
  phoneFormatted: '+91 82209 81125',
  email: 'syedashiqar51@gmail.com',
  linkedin: 'linkedin.com/in/syed-a-7a4306361',
  github: 'github.com/ashiq-syd',
  leetcode: 'leetcode.com/u/syd-ash',
  summary: 'Information Technology undergraduate focused on AWS cloud computing, infrastructure automation, DevOps, and secure application architecture. Hands-on experience with AWS EC2, S3, VPC, IAM, Bedrock, Terraform, Linux, Git, Docker, and Python. Built cloud-based projects covering generative AI, transaction monitoring, infrastructure provisioning, and highly available web applications.',
  education: {
    institution: 'SRM Institute of Science and Technology',
    period: '2023 - 2027',
    degree: 'B.Tech. in Information Technology',
  },
  experience: {
    company: '8Queens Software and Technologies',
    role: 'Intern',
    duration: 'One Month',
    bullets: [
      'Gained hands-on experience in software development and cloud-based project workflows.',
      'Worked with basic cloud infrastructure concepts and real-time project workflows.',
      'Assisted with application deployment, testing, troubleshooting, and task delivery.',
      'Collaborated with the team to understand requirements and complete assigned work on time.',
      'Developed practical knowledge of cloud computing, automation, and software development practices.',
    ],
  },
  skills: {
    programming: ['Python', 'Shell'],
    cloud: ['AWS (EC2, S3, VPC, IAM, Bedrock)'],
    iac: ['Terraform'],
    devops: ['Git', 'Linux', 'Docker (Basics)'],
    architecture: ['High Availability', 'Security', 'Cost Optimization'],
    analytics: ['Quantitative Analysis', 'Problem Solving', 'Data Workflow Automation', 'Excel', 'APIs', 'Databases'],
  },
  certification: 'Cloud Solutions Architect Certification | Certified in designing secure, scalable, and reliable cloud architectures.',
};
