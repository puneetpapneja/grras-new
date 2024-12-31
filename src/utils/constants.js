export const SLUGS = {
  RHCSA: 'rhcsa-training',
  RHCE: 'rhce-training',
  DO188: 'openshift-development-do188',
  DO280: 'openshift-administration-do280',
  DO380: 'advanced-openshift-do380',
  RH415: 'red-hat-security-rh415',
  RH358: 'red-hat-virtualization-rh358',
  REDHAT_OPENSHIFT: 'red-hat-openshift',
  OPENSHIFT_AI: 'openshift-ai',
  CKA: 'kubernetes-cka',
  DOCKER_CONTAINER_TRANING: 'docker-training',
  AWS_Solutions_Architect_Associate: 'aws-solution-architect',
  DEVOPS: 'devops-training',
  BCA_DEGREE_PROGRAM: 'bca-training',
  MCA_DEGREE_PROGRAM: 'mca-traning',
  SUMMER_INTERNSHIP_TRANING: 'summer-internship',
  WINTER_INTERNSHIP_TRANING: 'winter-internship'
};

export const COURSE_LABEL = {
  REDHAT: 'Red Hat',
  [SLUGS.RHCSA]: 'RHCSA (Red Hat Certified System Administrator)',
  [SLUGS.RHCE]: 'RHCE (Red Hat Certified Engineer)',
  [SLUGS.DO188]: 'DO188 (Red Hat OpenShift Development I)',
  [SLUGS.DO280]: 'DO280 (Red Hat OpenShift Administration I)',
  [SLUGS.DO380]: 'DO380 (Red Hat OpenShift Administration II)',
  [SLUGS.RH415]: 'RH415 (Red Hat Security: Linux in Physical, Virtual, and Cloud)',
  [SLUGS.RH358]: 'RH358 (Red Hat Services Management and Automation)',
  [SLUGS.REDHAT_OPENSHIFT]: 'DO316 (Red Hat Virtualization with OpenShift)',
  [SLUGS.OPENSHIFT_AI]: 'OpenShift AI',
  KUBERNETES: 'Kubernetes',
  [SLUGS.CKA]: 'Certified Kubernetes Administrator (CKA)',
  DOCKER: 'Docker',
  [SLUGS.DOCKER_CONTAINER_TRANING]: 'Docker Container Training',
  AWS: 'AWS',
  [SLUGS.AWS_Solutions_Architect_Associate]: 'AWS Solutions Architect – Associate',
  DEVOPS: 'DevOps',
  [SLUGS.DEVOPS]: 'DevOps Traning',
  DEGREE_PROGRAMS: 'Degree Programs',
  [SLUGS.BCA_DEGREE_PROGRAM]: 'BCA Degree Program',
  INTERNSHIP: 'Internships',
  [SLUGS.SUMMER_INTERNSHIP_TRANING]: 'Summer Internship',
  [SLUGS.WINTER_INTERNSHIP_TRANING]: 'Winter Internship'
};

export const REDHAT = [
  {
    label: COURSE_LABEL[SLUGS.RHCSA],
    link: `/redhat/${SLUGS.RHCSA}`,
    title: COURSE_LABEL[SLUGS.RHCSA],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.RHCE],
    link: `/redhat/${SLUGS.RHCE}`,
    title: COURSE_LABEL[SLUGS.RHCE],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO188],
    link: `/redhat/${SLUGS.DO188}`,
    title: COURSE_LABEL[SLUGS.DO188],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO280],
    link: `/redhat/${SLUGS.DO280}`,
    title: COURSE_LABEL[SLUGS.DO280],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO380],
    link: `/redhat/${SLUGS.DO380}`,
    title: COURSE_LABEL[SLUGS.DO380],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.RH415],
    link: `/redhat/${SLUGS.RH415}`,
    title: COURSE_LABEL[SLUGS.RH415],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.RH358],
    link: `/redhat/${SLUGS.RH358}`,
    title: COURSE_LABEL[SLUGS.RH358],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    link: `/redhat/${SLUGS.REDHAT_OPENSHIFT}`,
    title: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.OPENSHIFT_AI],
    link: `/redhat/${SLUGS.OPENSHIFT_AI}`,
    title: COURSE_LABEL[SLUGS.OPENSHIFT_AI],
    description: 'Learn the basics of React, including components, hooks, and more.',
    image: 'https://via.placeholder.com/300x140'
  }
];

export const MENUES = [
  {
    label: 'Training & Certifications',
    children: [
      {
        label: COURSE_LABEL.REDHAT,
        children: REDHAT
      },
      {
        label: COURSE_LABEL.KUBERNETES,
        children: [{ label: COURSE_LABEL[SLUGS.CKA], link: SLUGS.CKA }]
      },
      {
        label: COURSE_LABEL.DOCKER,
        children: [
          {
            label: COURSE_LABEL[SLUGS.DOCKER_CONTAINER_TRANING],
            link: SLUGS.DOCKER_CONTAINER_TRANING
          }
        ]
      },
      {
        label: COURSE_LABEL.AWS,
        children: [
          {
            label: COURSE_LABEL[SLUGS.AWS_Solutions_Architect_Associate],
            link: `AWS/${SLUGS.AWS_Solutions_Architect_Associate}`
          }
        ]
      },
      {
        label: COURSE_LABEL.DEVOPS,
        children: [{ label: COURSE_LABEL[SLUGS.DEVOPS], link: SLUGS.DEVOPS }]
      }
    ]
  },
  {
    label: COURSE_LABEL.DEGREE_PROGRAMS,
    children: [{ label: COURSE_LABEL[SLUGS.BCA_DEGREE_PROGRAM], link: SLUGS.BCA_DEGREE_PROGRAM }]
  },
  {
    label: COURSE_LABEL.INTERNSHIP,
    children: [
      {
        label: COURSE_LABEL[SLUGS.SUMMER_INTERNSHIP_TRANING],
        link: SLUGS.SUMMER_INTERNSHIP_TRANING
      },
      {
        label: COURSE_LABEL[SLUGS.WINTER_INTERNSHIP_TRANING],
        link: SLUGS.WINTER_INTERNSHIP_TRANING
      }
    ]
  },
  { label: 'About Grras', link: '/about' }
];

export const COURSE_DETAILS = {
  [SLUGS.AWS_Solutions_Architect_Associate]: {
    name: 'AWS Solutions Architect',
    banner: '/assets/img/11.jpg',
    about:
      'The <strong>AWS Solutions Architect</strong> course is designed to equip IT professionals with the skills and knowledge necessary to design, deploy, and manage applications and infrastructure on Amazon Web Services (AWS). This course covers essential AWS services, best practices for cloud architecture, and how to leverage AWS for building scalable, secure, and cost-efficient solutions. By the end of this course, participants will be ready to design and deploy robust applications in the AWS cloud and prepare for the <strong>AWS Certified Solutions Architect - Associate</strong> exam.',
    highlights: [
      {
        heading: '',
        content: 'Comprehensive coverage of AWS services and architecture best practices'
      },
      {
        heading: '',
        content: 'Hands-on labs to build, deploy, and manage AWS cloud infrastructure'
      },
      {
        heading: '',
        content: 'Focus on scalability, security, and cost optimization in AWS '
      },
      {
        heading: '',
        content: 'Real-world use cases and solutions for designing cloud architectures'
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have a basic understanding of cloud computing concepts and some experience with networking, storage, and general IT architecture. Prior exposure to AWS services or other cloud platforms is beneficial but not mandatory.'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of training, available in both weekday and weekend batches, with self-paced learning options.',
    outlines: [
      'Introduction to AWS Cloud and Global Infrastructure',
      'Designing AWS Architectures for High Availability and Scalability',
      'Managing Compute Resources with EC2, Lambda, and Auto Scaling',
      'Networking in AWS: VPCs, Route 53, and Elastic Load Balancing',
      'AWS Storage Services: S3, EBS, and Glacier',
      'Implementing Security Best Practices with IAM, KMS, and CloudTrail',
      'Managing Databases with RDS, DynamoDB, and Redshift',
      'AWS Cost Management and Optimization Strategies',
      'Monitoring and Troubleshooting with CloudWatch and CloudTrail',
      'Preparing for the AWS Certified Solutions Architect - Associate Exam'
    ],
    certification:
      'Upon completion of this course, participants will be fully prepared to take the <strong>AWS Certified Solutions Architect - Associate</strong> exam. This certification validates the ability to design and deploy scalable, secure, and highly available applications on AWS. <strong>Accreditation</strong>: AWS Certified Training Partner',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.BCA_DEGREE_PROGRAM]: {
    name: 'BCA Degree Program',
    banner: '/assets/img/12.jpg',
    about: '',
    highlights: [],
    prerequisites: [],
    duration: '',
    outlines: [],
    certification: '',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.CKA]: {
    name: 'Certified Kubernetes Administrator (CKA) course',
    banner: '/assets/img/9.jpg',
    about:
      'The <strong>Certified Kubernetes Administrator (CKA)</strong> course is designed to equip IT professionals with the skills necessary to install, configure, and manage Kubernetes clusters. This certification validates your knowledge and hands-on expertise in managing Kubernetes environments, making you proficient in core concepts like deployment, networking, security, and troubleshooting in a production-grade Kubernetes setup. The CKA is highly sought after for administrators working with containerized applications and cloud-native environments.',
    highlights: [
      {
        heading: '',
        content: 'Hands-on labs focused on managing Kubernetes clusters'
      },
      {
        heading: '',
        content: 'Comprehensive training on Kubernetes networking, storage, and security'
      },
      {
        heading: '',
        content: 'Real-world scenarios and exercises for troubleshooting Kubernetes environments'
      },
      {
        heading: '',
        content: 'Preparation for the <strong>CKA certification exam</strong>'
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have a strong understanding of containers, specifically Docker'
      },
      {
        heading: '',
        content:
          'Experience with Linux system administration, basic networking, and cloud environments is recommended'
      },
      {
        heading: '',
        content: 'Familiarity with YAML configuration files and DevOps practices is beneficial.'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of in-depth training on Kubernetes, available in both weekday and weekend batches, with flexible self-paced learning options.',
    outlines: [
      'Introduction to Kubernetes Architecture',
      'Installing and Configuring Kubernetes Clusters',
      'Managing Kubernetes Pods, Deployments, and Services',
      'Kubernetes Networking and DNS Configuration',
      'Managing Persistent Storage in Kubernetes',
      'Security and Access Control for Kubernetes Clusters',
      'Monitoring and Logging in Kubernetes',
      'Kubernetes Troubleshooting Techniques',
      'Preparing for Certified Kubernetes Administrator (CKA) Exam'
    ],
    certification:
      'Upon completion of this course, participants will be fully prepared to take the <strong>Certified Kubernetes Administrator (CKA) Exam</strong>, which is administered by the Cloud Native Computing Foundation (CNCF). This certification is essential for professionals looking to manage Kubernetes clusters and demonstrate their proficiency in container orchestration.  ',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DEVOPS]: {
    name: 'D0188 Exam',
    banner: '/assets/img/1.jpg',
    about:
      'The <strong>DevOps and Cloud Computing</strong> course is designed to equip IT professionals with the skills necessary to deploy, manage, and automate cloud infrastructure using modern DevOps tools and practices. This course covers the core principles of DevOps—collaboration, automation, and continuous delivery—while integrating hands-on experience with cloud platforms like AWS, Azure, or Google Cloud. Participants will learn to build scalable cloud environments, automate infrastructure with tools like Terraform and Ansible, and manage CI/CD pipelines for seamless software delivery.',
    highlights: [
      {
        heading: '',
        content: 'Comprehensive coverage of DevOps tools and cloud platforms'
      },
      {
        heading: '',
        content: 'Hands-on labs focused on automation, infrastructure as code, and CI/CD pipelines'
      },
      {
        heading: '',
        content: 'Learn cloud services on AWS, Azure, or Google Cloud'
      },
      {
        heading: '',
        content: 'Focus on tools like Docker, Kubernetes, Jenkins, Terraform, and Ansible '
      },
      {
        heading: '',
        content: 'Real-world case studies and projects for building automated cloud infrastructure'
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content: 'Basic knowledge of Linux and scripting is recommended'
      },
      {
        heading: '',
        content:
          'Familiarity with cloud platforms like AWS or Azure is beneficial, but no prior experience is required'
      },
      {
        heading: '',
        content:
          'This course is suitable for both beginners and professionals looking to enhance their DevOps and cloud skills.'
      }
    ],
    duration:
      'Approximately <strong>60-80 hours</strong> of in-depth training, available in both weekday and weekend batches, with flexible self-paced learning options.',
    outlines: [
      'Introduction to DevOps and Cloud Computing',
      'Linux and Scripting for DevOps',
      'Cloud Computing Fundamentals: AWS, Azure, and Google Cloud',
      'Infrastructure as Code (IaC) with Terraform and Ansible',
      'Containerization with Docker and Orchestration with Kubernetes',
      'Continuous Integration/Continuous Deployment (CI/CD) with Jenkins',
      'Monitoring and Logging in Cloud Environments',
      'Automation and Configuration Management with Ansible and Chef',
      'Security and Compliance in Cloud and DevOps',
      'Final Project: Building a Fully Automated Cloud Infrastructure'
    ],
    certification:
      'Upon completion, participants will receive a course completion certificate and be well-prepared for roles such as DevOps Engineer, Cloud Architect, or Cloud Operations Engineer. Participants can also pursue relevant certifications from cloud providers like AWS (AWS Certified Solutions Architect) or Google Cloud (Google Cloud Professional DevOps Engineer).  ',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO188]: {
    name: 'D0188',
    banner: '/assets/img/3.jpg',
    about:
      'The DO188 course focuses on developing and containerizing applications for deployment on Red Hat OpenShift. This course is designed to help developers build, deploy, and manage applications in containerized environments using OpenShift. By the end of this course, participants will gain the skills to containerize applications and deploy them on OpenShift, following modern DevOps practices.',
    highlights: [
      {
        heading: '',
        content: 'Hands-on experience with containerizing applications using Red Hat OpenShift '
      },
      {
        heading: '',
        content: 'Learn to build, test, and deploy containers in a cloud-native environment'
      },
      {
        heading: '',
        content: 'Practical labs and real-world scenarios'
      },
      {
        heading: '',
        content: 'Instructor-led training and expert mentorship'
      },
      {
        heading: '',
        content: 'Career support: Resume building and job placement assistance'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have a basic understanding of Linux containers, and DevOps practices'
      },
      {
        heading: '',
        content:
          'Prior knowledge of developing applications in languages such as Python, Java, or Node.js is helpful.'
      }
    ],
    duration:
      'Approximately 40 hours of immersive learning, available in both weekday and weekend options, with flexible scheduling for self-paced learners.',
    outlines: [
      'Introduction to OpenShift and Containers',
      'Containerizing Applications',
      'Managing and Deploying Containers on OpenShift',
      'Creating Containerized Services and Applications',
      'Scaling Applications in OpenShift',
      'Securing Containerized Applications',
      'Automating Application Deployment with OpenShift Pipelines',
      'Monitoring and Troubleshooting in OpenShift',
      'Preparing for Red Hat Certified Specialist in Containers Exam (EX188)'
    ],
    certification:
      'Upon successful completion of this course, students will be prepared to take the Red Hat Certified Specialist in Containers Exam (EX188). This certification validates their ability to develop and deploy containerized applications using OpenShift, a critical skill for modern developers.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO280]: {
    name: 'DO280 Exam',
    banner: '/assets/img/4.jpg',
    about:
      'The <strong>DO280 (Red Hat OpenShift Administration II)</strong> course focuses on configuring and managing a production-grade OpenShift cluster using **OpenShift Container Platform 4.14**. This course teaches advanced administrative skills required for maintaining the security, scalability, and performance of OpenShift clusters in production environments. Participants will gain hands-on experience in configuring key components of a Kubernetes-based OpenShift infrastructure',
    highlights: [
      {
        heading: '',
        content: 'Hands-on training with <strong>OpenShift Container Platform 4.14</strong>'
      },
      {
        heading: '',
        content: 'Configure and manage a production-grade OpenShift cluster '
      },
      {
        heading: '',
        content: 'Advanced cluster scaling, security, and automation techniques'
      },
      {
        heading: '',
        content: 'Real-world labs for deploying and managing production workloads '
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have completed <strong>Red Hat OpenShift Administration I (DO180)</strong> or have equivalent experience in OpenShift basics'
      },
      {
        heading: '',
        content:
          'Having <strong>RHCSA</strong> or equivalent knowledge is also highly recommended for this course'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of comprehensive training, available through both weekday and weekend sessions. Self-paced learning options are also available.',
    outlines: [
      'Installing and Configuring a Production OpenShift Cluster',
      'Managing Cluster Operators and Infrastructure Nodes',
      'Scaling Cluster Resources for Production Workloads',
      'Configuring OpenShift Networking and Persistent Storage',
      'Advanced Security Configuration for OpenShift Components',
      'Monitoring, Logging, and Troubleshooting in Production',
      'Cluster Health Checks, Failover, and Backup Management',
      'Implementing Automation and GitOps Practices in OpenShift',
      'Preparing for the Red Hat Certified Specialist in OpenShift Administration Exam (EX280)'
    ],
    certification:
      'Upon successful completion of this course, participants will be ready to take the **Red Hat Certified Specialist in OpenShift Administration Exam (EX280)**. This certification confirms the skills necessary to configure and manage a production OpenShift environment using OCP 4.14',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO380]: {
    name: 'DO380 Exam',
    banner: '/assets/img/5.jpg',
    about:
      'The <strong>DO380 (Red Hat OpenShift Administration III)</strong> course is designed for administrators who need to scale and manage OpenShift clusters for enterprise workloads. This course covers advanced OpenShift cluster management, including scaling applications, automating tasks, implementing high availability (HA), and managing multi-cluster environments. It prepares participants to maintain highly available, scalable, and reliable OpenShift deployments in large-scale enterprise environments.',
    highlights: [
      {
        heading: '',
        content: 'Focus on advanced OpenShift cluster management and scaling'
      },
      {
        heading: '',
        content: 'Hands-on labs with real-world enterprise scenarios '
      },
      {
        heading: '',
        content: 'High availability (HA) and disaster recovery implementation '
      },
      {
        heading: '',
        content: 'Automation of cluster management with GitOps and CI/CD'
      },
      {
        heading: 'Career support:',
        content: 'Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have completed <strong>DO280 (Red Hat OpenShift Administration II)</strong> or have equivalent OpenShift experience'
      },
      {
        heading: '',
        content:
          'A good understanding of Kubernetes, containers, and Linux system administration is also required'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of intensive training, with both weekday and weekend batches available. Flexible self-paced learning options are also offered.',
    outlines: [
      'Managing and Scaling OpenShift Clusters in Enterprise Environments',
      'Implementing High Availability (HA) and Disaster Recovery',
      'Multi-Cluster Management and Federation',
      'Securing and Hardening OpenShift Clusters',
      'Automation with Ansible, GitOps, and CI/CD Pipelines',
      'Managing OpenShift in Hybrid and Multi-Cloud Environments',
      'Monitoring, Logging, and Troubleshooting at Scale',
      'Implementing Advanced OpenShift Networking and Storage Solutions',
      'Preparing for the Red Hat Certified Specialist in OpenShift Administration III Exam (EX380)'
    ],
    certification:
      'Upon completion of the course, participants will be prepared to take the **Red Hat Certified Specialist in OpenShift Administration III Exam (EX380)**. This certification is essential for administrators working in large-scale, production-grade OpenShift environments, validating their ability to manage and scale OpenShift clusters for enterprise workloads.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DOCKER_CONTAINER_TRANING]: {
    name: 'Docker Container and Podman',
    banner: '/assets/img/10.jpg',
    about:
      'The <strong>Docker Container and Podman</strong> course provides a comprehensive introduction to containerization technologies, focusing on Docker and Podman. These tools are widely used for building, managing, and deploying containerized applications in both development and production environments. Participants will learn to work with containers, create container images, and understand the differences and similarities between Docker and Podman, preparing them for modern DevOps and cloud-native practices.',
    highlights: [
      {
        heading: '',
        content: 'Learn containerization fundamentals with Docker and Podman '
      },
      {
        heading: '',
        content: 'Hands-on labs to create, manage, and deploy containers '
      },
      {
        heading: '',
        content: 'Understand container networking, storage, and security'
      },
      {
        heading: '',
        content: 'Best practices for managing containerized applications in production'
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content: 'Participants should have a basic understanding of Linux and command-line tools'
      },
      {
        heading: '',
        content: 'Prior knowledge of virtualization concepts is helpful but not mandatory.'
      }
    ],
    duration:
      'Approximately <strong>30-40 hours</strong> of training, available through weekday and weekend batches, with flexible self-paced learning options',
    outlines: [
      'Introduction to Containers and Containerization',
      'Installing and Configuring Docker and Podman',
      'Building and Managing Container Images',
      'Managing Containers: Start, Stop, Restart, and Remove',
      'Container Networking and Storage',
      'Working with Docker Compose and Podman Pods',
      'Securing Docker and Podman Containers',
      'Deploying and Orchestrating Containers in Production',
      'Monitoring and Logging in Docker and Podman Environments',
      'Troubleshooting Common Issues with Containers'
    ],
    certification:
      'While there is no official certification for Podman, participants will be well-prepared to manage both Docker and Podman environments. For Docker, the <strong>Docker Certified Associate (DCA)</strong> exam is recommended for those seeking formal certification.  ',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.MCA_DEGREE_PROGRAM]: {
    name: 'MCA Degree Program',
    banner: '/assets/img/13.jpg',
    about: '',
    highlights: [],
    prerequisites: [],
    duration: '',
    outlines: [],
    certification: '',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.OPENSHIFT_AI]: {
    name: 'OpenShift AI',
    banner: '/assets/img/1.jpg',
    about:
      'The Red Hat Certified Specialist in OpenShift AI Exam (EX267) is designed to validate the skills of IT professionals in deploying and managing AI/ML workloads using Red Hat OpenShift. This certification focuses on applying artificial intelligence (AI) and machine learning (ML) in a containerized environment, helping participants demonstrate their ability to build, scale, and manage AI models in a Kubernetes-based infrastructure. The course emphasizes using OpenShift’s powerful capabilities to accelerate the development and deployment of AI workloads.',
    highlights: [
      {
        heading: '',
        content: 'Validate your skills in managing AI/ML workloads on OpenShift'
      },
      {
        heading: '',
        content: 'Learn to deploy and scale AI models using Kubernetes'
      },
      {
        heading: '',
        content: 'Demonstrate proficiency in managing AI pipelines and tools'
      },
      {
        heading: '',
        content: 'Showcase skills in integrating AI workloads into production environments'
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have experience with **Red Hat OpenShift** and basic AI/ML concepts'
      },
      {
        heading: '',
        content:
          'Familiarity with container orchestration, Kubernetes, and machine learning frameworks like TensorFlow, PyTorch, or Scikit-learn is recommended'
      },
      {
        heading: '',
        content: 'Prior knowledge of **RHCSA** or equivalent skills is beneficial.'
      }
    ],
    duration:
      'While this certification exam does not have an official course requirement, participants are encouraged to have a strong understanding of deploying and managing AI workloads on OpenShift. Preparation courses may take approximately 40-50 hours, depending on prior knowledge.',
    outlines: [
      'Introduction to AI/ML Workloads in OpenShift',
      'Deploying Machine Learning Models on OpenShift',
      'Scaling AI Models and Workflows in Kubernetes',
      'Managing AI Pipelines and Tools in OpenShift',
      'Configuring OpenShift for AI and Data Science Workloads',
      'Monitoring and Optimizing AI Workloads in OpenShift',
      'Integrating AI Workloads into Production Environments',
      'Managing Security and Compliance for AI Pipelines',
      'Preparing for Red Hat Certified Specialist in OpenShift AI Exam (EX267)'
    ],
    certification:
      'Upon passing the EX267 exam, participants will become Red Hat Certified Specialists in OpenShift AI, demonstrating their expertise in deploying and managing AI/ML workloads using OpenShift. This certification is essential for professionals looking to work at the intersection of AI and Kubernetes-based environments.  ',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.REDHAT_OPENSHIFT]: {
    name: 'DO316 (Red Hat Virtualization with OpenShift)',
    banner: '/assets/img/8.jpg',
    about:
      'The <strong>DO316 (Managing Virtual Machines with Red Hat OpenShift Virtualization)</strong> course is designed to equip system administrators and IT professionals with the skills to manage virtual machines (VMs) alongside containerized workloads on Red Hat OpenShift. This course focuses on integrating virtualization into Kubernetes environments, enabling seamless management of both VMs and containers in a hybrid infrastructure. Participants will learn how to deploy, configure, and manage VMs using OpenShift Virtualization.',
    highlights: [
      {
        heading: '',
        content: 'Comprehensive training on managing VMs within Red Hat OpenShift'
      },
      {
        heading: '',
        content: 'Hands-on labs focused on integrating VMs with containers in Kubernetes'
      },
      {
        heading: '',
        content: 'Learn to deploy, configure, and secure VMs using OpenShift Virtualization'
      },
      {
        heading: '',
        content: 'Best practices for managing hybrid workloads (VMs and containers) '
      },
      {
        heading: '',
        content: 'Career support: Resume building, job placement, and interview preparation '
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have experience with <strong>Red Hat OpenShift</strong> and container orchestration'
      },
      {
        heading: '',
        content:
          'Familiarity with virtualization technologies (such as KVM, VMware, etc.) and <strong>RHCSA</strong> or equivalent knowledge is recommended.'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of training, available through weekday and weekend sessions. Flexible self-paced learning options are also offered',
    outlines: [
      'Introduction to Red Hat OpenShift Virtualization',
      'Deploying and Managing Virtual Machines in OpenShift',
      'Integrating VMs with Containerized Workloads',
      'Configuring Networking and Storage for Virtual Machines',
      'Implementing Security for OpenShift Virtualization',
      'Monitoring, Logging, and Troubleshooting VMs in OpenShift',
      'Scaling Virtual Machines and Hybrid Workloads',
      'Managing Lifecycle of VMs in OpenShift Environments',
      'Preparing for Red Hat Certified Specialist in OpenShift Virtualization Exam (EX316)'
    ],
    certification:
      'Upon completion, participants will be prepared to take the **Red Hat Certified Specialist in OpenShift Virtualization Exam (EX316)**. This certification validates the ability to manage virtual machines and containers together in a hybrid cloud environment using Red Hat OpenShift Virtualization.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH358]: {
    name: 'RH358 Exam',
    banner: '/assets/img/7.jpg',
    about:
      'The <strong>RH358 (Red Hat Services Management and Automation)</strong> course is designed to provide system administrators and DevOps professionals with the skills needed to manage and automate Red Hat Enterprise Linux services at scale. The course covers essential topics such as service management, automation with Ansible, and securing services in a Linux environment. By the end of this course, participants will be able to manage and automate key services on Red Hat systems efficiently.',
    highlights: [
      {
        heading: '',
        content: 'Learn advanced service management techniques for Red Hat systems'
      },
      {
        heading: '',
        content: 'Automate service configuration and management using Ansible'
      },
      {
        heading: '',
        content: 'Hands-on labs with real-world examples of service automation'
      },
      {
        heading: '',
        content: 'Learn to secure, monitor, and troubleshoot Linux services'
      },
      {
        heading: 'Career support:',
        content: 'Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have **RHCSA** or equivalent experience with Red Hat Enterprise Linux'
      },
      {
        heading: '',
        content: 'Familiarity with Linux services and basic automation concepts is recommended.'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of intensive training, with both weekday and weekend batches available. Self-paced learning options are also offered.',
    outlines: [
      'Introduction to Red Hat Services Management',
      'Managing and Automating Services Using Systemd',
      'Automating Services Configuration with Ansible',
      'Securing Red Hat Services with SELinux and Firewalld',
      'Monitoring and Logging Linux Services',
      'Implementing Load Balancing and High Availability for Services',
      'Automating Service Backups and Disaster Recovery',
      'Troubleshooting Common Service Issues',
      'Preparing for the Red Hat Certified Specialist in Services Management and Automation Exam (EX358)'
    ],
    certification:
      'Upon successful completion, participants will be prepared to take the <strong>Red Hat Certified Specialist in Services Management and Automation Exam (EX358)</strong>. This certification validates the skills required to manage, secure, and automate Red Hat services in an enterprise environment.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH415]: {
    name: 'RH415 Exam',
    banner: '/assets/img/6.jpg',
    about:
      'The <strong>RH415 (Red Hat Security: Linux in Physical, Virtual, and Cloud)</strong> course is designed for senior Linux administrators responsible for securing systems and managing compliance in physical, virtual, and cloud environments. This course focuses on advanced security techniques for Red Hat Enterprise Linux, enabling participants to address security vulnerabilities, implement access controls, and maintain system integrity across diverse infrastructure.',
    highlights: [
      {
        heading: '',
        content: 'Advanced security strategies for physical, virtual, and cloud environments'
      },
      {
        heading: '',
        content: 'Hands-on labs focused on real-world security challenges'
      },
      {
        heading: '',
        content: 'Practical implementation of SELinux, firewalls, and authentication mechanisms '
      },
      {
        heading: '',
        content: 'Tools and techniques for system auditing and compliance management'
      },
      {
        heading: 'Career support:',
        content: 'Resume building, job placement, and interview preparation'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have <strong>RHCSA</strong> or <strong>RHCE</strong> certification or equivalent experience with Red Hat Enterprise Linux'
      },
      {
        heading: '',
        content:
          'A solid understanding of Linux system administration and security basics is essential.'
      }
    ],
    duration:
      'Approximately <strong>40-50 hours</strong> of advanced security training, available through weekday and weekend batches. Self-paced learning options are also available.',
    outlines: [
      'Security Control Implementation Using SELinux and Firewalls',
      'Managing Security Across Virtual and Cloud Environments',
      'Configuring Advanced Authentication and Identity Management',
      'Auditing Systems for Compliance and Security Hardening',
      'Securing Data with Encryption and Key Management',
      'Identifying and Addressing Security Vulnerabilities in Linux Systems',
      'Implementing Network Security and Intrusion Detection',
      'Performing Regular Security Audits and Vulnerability Assessments',
      'Preparing for the Red Hat Certified Specialist in Security Exam (EX415)'
    ],
    certification:
      'Upon completion, students will be prepared to take the **Red Hat Certified Specialist in Security: Linux in Physical, Virtual, and Cloud Exam (EX415)**. This certification validates their ability to secure Red Hat Enterprise Linux environments and manage security and compliance across diverse infrastructures.  ',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RHCE]: {
    name: COURSE_LABEL[SLUGS.RHCE],
    banner: '/assets/img/2.jpg',
    about:
      'The RHCE course is designed for experienced Linux administrators who want to advance their skills and become proficient in automating Red Hat Enterprise Linux tasks using Ansible. This certification builds on RHCSA skills, focusing on automation, deployment, and management across multiple systems. The RHCE credential is highly regarded and helps professionals achieve higher-level administrative roles in the industry.',
    highlights: [
      {
        heading: '',
        content: 'Learn advanced system administration skills with a focus on automation'
      },
      {
        heading: '',
        content: 'Master Ansible for configuration management and task automation'
      },
      {
        heading: '',
        content: 'Hands-on labs to work with real-world scenarios'
      },
      {
        heading: '',
        content: 'Prepare for the RHCE EX294 certification exam'
      },
      {
        heading: '',
        content: 'Career support, including resume-building and interview prep'
      }
    ],
    prerequisites: [
      {
        heading: '',
        content:
          'Participants should have obtained the RHCSA certification or have equivalent knowledge'
      },
      {
        heading: '',
        content:
          'This course is designed for those with experience in Linux system administration who want to expand their skillset, particularly in automation using Ansible.'
      }
    ],
    duration:
      'Approximately 40-50 hours of training, spread over weekdays or weekends, with flexible options for self-paced learning.',
    outlines: [
      'Introduction to Automation with Ansible',
      'Installing and Configuring Ansible',
      'Automating Administrative Tasks Using Ansible Playbooks',
      'Managing Inventories and Hosts',
      'Implementing Task Control, Handlers, and Variables',
      'Creating and Managing Templates in Ansible',
      'Using Ansible for System Maintenance',
      'Troubleshooting and Debugging Ansible Configurations',
      'Preparing for the RHCE EX294 Exam'
    ],
    certification:
      'Upon successful completion, students will be prepared to take the **RHCE EX294** certification exam, which verifies expertise in managing multiple systems using Ansible. RHCE certification is highly regarded in the industry and opens the door to senior administrative and DevOps roles.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RHCSA]: {
    name: COURSE_LABEL[SLUGS.RHCSA],
    banner: '/assets/img/1.jpg',
    about: `<strong>Red Hat Certified System Administrator (RHCSA)</strong> is a globally recognized certification that validates your expertise in Linux system administration. This certification is designed to build a strong foundation for managing Red Hat Enterprise Linux (RHEL) systems and is highly sought after by IT professionals and organizations worldwide. Whether you're aiming for a career in DevOps, cloud computing, or IT infrastructure management, RHCSA is your first step toward mastering Linux system administration.`,
    highlights: [
      'Hands-on training with real-world scenario',
      'Industry-recognized credentials for career advancement',
      'Foundational skills for DevOps and Cloud Computing roles'
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40–50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          'Instructor-led training (Online/Offline)',
          'Self-paced learning options available'
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          'Understanding and using essential tools (file management, text editing, and shell scripting)',
          'Operating running systems (boot, reboot, shut down, and troubleshoot)',
          'Configuring local storage using partitions, LVM, and file systems',
          'Creating and configuring file systems (ext4, XFS)',
          'Managing users and groups, file permissions, and SELinux security',
          'Deploying and managing RHEL systems (installation and configuration)',
          'Automating administrative tasks with cron jobs',
          'Configuring basic networking and firewalls '
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          'IT professionals looking to enhance their Linux skills',
          'Fresh graduates aspiring to enter the IT field',
          'Existing system administrators planning to validate their knowledge'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Fundamentals',
        description:
          'Gain a basic understanding of Linux and its file system, commands, and architecture. This forms the foundation for the RHCSA course.',
        clickable: true,
        isStart: true
      },
      {
        title: 'RHCSA Training',
        description:
          'Learn the core system administration tasks in detail, covering topics like user management, storage configuration, SELinux, and troubleshooting.',
        clickable: true,
        isStart: false
      },
      {
        title: 'Practical Labs',
        description:
          'Engage in hands-on labs designed to simulate real-world scenarios. These labs help you build confidence and readiness for the RHCSA exam.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Certification Exam',
        description:
          'Attempt the <strong>EX200</strong> exam to earn the prestigious RHCSA certification. The exam focuses on practical tasks performed in a live environment.',
        clickable: true,
        isStart: false
      },
      {
        title: 'Advanced Learning',
        description:
          'After RHCSA, expand your expertise with advanced certifications like RHCE (Red Hat Certified Engineer) and specialized RHEL courses.',
        clickable: true,
        isStart: true
      }
    ],
    feedbacks: [
      {
        name: 'Arjun Sharma',
        start: 4.5,
        feedback:
          'The RHCSA course at Grras Solutions helped me land my first Linux administrator job. The hands-on labs and experienced instructors made learning easy and fun!'
      },
      {
        name: 'Sneha Gupta',
        start: 5,
        feedback:
          'This is the best RHCSA training I’ve attended! The instructor explained concepts in such a practical way that even complex topics felt simple. Highly recommended!'
      },
      {
        name: 'Vikram Singh',
        start: 5,
        feedback:
          'The practical approach during the training ensured I was fully prepared for the RHCSA exam. I cleared it on my first attempt. Thanks, Grras!'
      }
    ],
    faqs: [
      {
        question: 'What is RHCSA certification, and why is it important?',
        answer:
          'RHCSA is a globally recognized certification that validates your Linux administration skills. It is the first step toward building a career in IT infrastructure, cloud computing, and DevOps.'
      },
      {
        question: 'Do I need any prerequisites to take the RHCSA course?',
        answer:
          'Basic knowledge of computers is sufficient. However, familiarity with command-line interfaces and operating systems can be an added advantage.'
      },
      {
        question: 'What is the format of the RHCSA certification exam?',
        answer:
          'The RHCSA exam (EX200) is a performance-based test that requires candidates to complete real-world tasks on a live system within a specified time.'
      },
      {
        question: 'Will I get hands-on practice during the training?',
        answer:
          'Absolutely! Our training includes intensive hands-on labs to ensure you are well-prepared for both real-world scenarios and the RHCSA exam.'
      },
      {
        question: 'What career opportunities can I pursue after RHCSA certification?',
        answer:
          'With RHCSA certification, you can explore roles like Linux System Administrator, IT Administrator, DevOps Engineer, Cloud Support Engineer, and more.'
      },
      {
        question: 'Can I take the course online?',
        answer:
          'Yes! We offer instructor-led online classes that provide the same interactive experience as classroom training.'
      },
      {
        question: 'How long is the RHCSA certification valid?',
        answer: 'The RHCSA certification is valid for three years from the date of issue.'
      },
      {
        question: 'What is the cost of the certification exam?',
        answer:
          'The RHCSA exam fee depends on your region. Contact us for the latest fee details and discounts.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.SUMMER_INTERNSHIP_TRANING]: {
    name: 'Summer Internship Traning',
    banner: '/assets/img/14.jpg',
    about: `Get ahead of the competition by utilizing your summer break to gain hands-on experience with our Summer Internship Program. Tailored for college students, this internship is designed to help you develop real-world skills in DevOps, cloud computing, Python, data science, and more. Whether you're a beginner or looking to enhance your knowledge, this program is perfect for all levels.`,
    highlights: [
      {
        heading: 'Duration:',
        content: '45 days, 3 months, or 6 months (flexible options based on your availability)  '
      },
      {
        heading: 'Projects:',
        content: 'Real-world scenarios with hands-on projects and certification opportunities  '
      },
      {
        heading: 'Technologies:',
        content:
          'DevOps (Docker, Kubernetes, Jenkins, Ansible), Cloud Computing (AWS, Azure, Google Cloud), Python and Data Science, Red Hat Certifications (RHCSA, RHCE, OpenShift)'
      },
      {
        heading: 'Career Support:',
        content: 'Resume building, job placement assistance, and interview prep'
      }
    ],
    prerequisites: [],
    duration: '',
    outlines: [],
    certification: '',
    exam: {},
    programs: [
      {
        heading: '45 Days DevOps Basics',
        content: 'Learn Docker, Ansible, and Jenkins with cloud platforms like AWS or Google Cloud.'
      },
      {
        heading: '3-Month Full Stack Python Developer',
        content: 'Frontend and backend development with Python, Flask/Django, and MySQL'
      },
      {
        heading: '6-Month Data Science and Machine Learning Track',
        content:
          'Master data science and machine learning with Python, TensorFlow, and Scikit-learn'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.WINTER_INTERNSHIP_TRANING]: {
    name: 'Winter Internship Traning',
    banner: '/assets/img/15.jpg',
    about:
      'Make the most of your winter break by enrolling in our Winter Internship Program, specifically tailored for students looking to upskill during their holidays. This program offers a mix of theoretical learning and practical exposure in the latest technologies like DevOps, Python, and Red Hat certifications. Boost your career prospects with hands-on experience and industry-recognized certifications.',
    highlights: [
      {
        heading: 'Duration:',
        content: '45 days, 3 months, or 6 months (flexible options for winter break)  '
      },
      {
        heading: 'Projects:',
        content:
          'Gain practical skills with projects and certifications designed for industry relevance '
      },
      {
        heading: 'Technologies:',
        content:
          'DevOps (Docker, Kubernetes, Terraform, Jenkins), Cloud Computing (AWS, Azure, Google Cloud), Red Hat Linux (RHCSA, RHCE, OpenShift) and Python and Automation'
      },
      {
        heading: 'Career Support:',
        content: 'Career SupportResume building, job placement assistance, and interview prep'
      }
    ],
    prerequisites: [],
    duration: '',
    outlines: [],
    certification: '',
    exam: {},
    programs: [
      {
        heading: '45 Days Python and Data Analysis',
        content:
          'Learn Python fundamentals and how to analyze and visualize data with Pandas and Excel'
      },
      {
        heading: '3-Month DevOps and Cloud Computing',
        content: 'Get hands-on with CI/CD pipelines, Docker, Kubernetes, and cloud platforms'
      },
      {
        heading: '6-Month Red Hat Certification Track',
        content:
          'Earn RHCSA and RHCE certifications while mastering Linux administration and OpenShift.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  }
};
