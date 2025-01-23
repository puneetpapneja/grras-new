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

export const COURSE_DETAILS = {
  [SLUGS.AWS_Solutions_Architect_Associate]: {
    name: 'AWS Solutions Architect',
    banner: '/assets/images/aws-solution-architect.png',
    about: `The <strong>AWS Solutions Architect</strong> training program is designed to
equip professionals with the knowledge and skills needed to
design, deploy, and manage scalable, highly available, and
fault-tolerant systems on the Amazon Web Services (AWS)
platform. This training focuses on core AWS services,
architectural best practices, and real-world scenarios, ensuring
participants are well-prepared to meet the demands of cloudbased solutions. Whether you’re an aspiring cloud architect,
system administrator, or developer, this program provides a
solid foundation for mastering AWS architecture`,
    highlights: [
      `Hands-on training with real-world use cases and
scenarios.`,
      `Learn to design and deploy secure, robust, and costeffective AWS solutions.`,
      `Industry-recognized curriculum aligned with AWS best
practices.`,
      `Comprehensive preparation for AWS Solutions Architect
certifications.`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40–50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
offline.`,
          `<strong>Self-paced Learning:</strong> Flexible options for working
professionals.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `<strong>AWS Fundamentals:</strong> Overview of cloud computing,
AWS architecture, and core services.`,
          `<strong>Designing Resilient Architectures:</strong> High availability,
fault tolerance, and disaster recovery solutions.`,
          `<strong>AWS Compute Services:</strong> EC2 instances, Auto Scaling,
and Elastic Load Balancing.`,
          `<strong>Networking and Content Delivery:</strong> VPC, subnets,
Route 53, and CloudFront configurations.`,
          `<strong>Data Storage Solutions:</strong> S3, EBS, EFS, and Glacier
storage options with use cases.`,
          `<strong>Database Services:</strong> RDS, DynamoDB, and Redshift for
database management`,
          `<strong>Identity and Access Management (IAM):</strong> Configuring
users, roles, and policies securely.`,
          `<strong>Monitoring and Logging:</strong> CloudWatch, CloudTrail, and
AWS Cong for operational insights.`,
          `<strong>Cost Optimization:</strong> Strategies to manage AWS costs
effectively`,
          `<strong>Security and Compliance:</strong> Implementing best practices
for secure cloud solutions.`,
          `<strong>AWS Lambda and Serverless Architectures:</strong>
Introduction to building and managing serverless
applications.`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `<strong>Cloud Architects:</strong> Designing scalable and secure cloud
infrastructures.`,
          `<strong>System Administrators:</strong> Migrating and managing
workloads on AWS.`,
          `<strong>Developers:</strong> Building and deploying cloud-native
applications.`,
          `<strong>IT Professionals:</strong> Looking to transition into cloud
computing roles`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: `Gain foundational knowledge of AWS and cloud
computing concepts.`,
        clickable: true,
        isStart: true
      },
      {
        title: 'Step 2',
        description: `Enroll in the AWS Solutions Architect training
program.`,
        clickable: true,
        isStart: false
      },
      {
        title: 'Step 3',
        description: `Participate in hands-on labs to gain practical
experience with AWS services.`,
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: `Master architectural best practices and advanced
services.`,
        clickable: true,
        isStart: false
      },
      {
        title: 'Step 5',
        description: `Prepare for the AWS Solutions Architect
certication exam with mock tests and practice sessions.`,
        clickable: true,
        isStart: true
      }
    ],
    feedbacks: [
      {
        name: 'Priya Jain',
        start: 4.5,
        feedback: `This training gave me the condence to design and deploy
cloud solutions effectively. The practical labs were incredibly
helpful!`
      },
      {
        name: 'Rahul Verma',
        start: 5,
        feedback: `The training covered everything I needed to know about AWS
Solutions Architect certication. Highly recommended!`
      },
      {
        name: 'Sneha Sharma',
        start: 5,
        feedback: `I learned how to optimize costs and improve system
performance on AWS. This course is perfect for anyone in
IT!`
      }
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this training?',
        answer: `Basic understanding of IT infrastructure and cloud
computing concepts is recommended.`
      },
      {
        question: 'Is this training suitable for beginners?',
        answer: `Yes, the course starts with AWS fundamentals and
gradually covers advanced topics.`
      },
      {
        question: 'Does the training include practical labs?',
        answer: `Yes, the training includes hands-on labs and exercises for
real-world experience.`
      },
      {
        question: 'Does this training prepare for AWS certification?',
        answer: `Yes, the program is aligned with the AWS Solutions
Architect Associate and Professional certifications.`
      },
      {
        question: 'Are career opportunities available after completing this training?',
        answer: `Yes, roles such as AWS Solutions Architect, Cloud
Engineer, and Cloud Consultant are some of the career paths
available`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.BCA_DEGREE_PROGRAM]: {
    name: 'BCA Degree Program',
    banner: '/assets/images/bca-degree.png',
    about: '',
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
  [SLUGS.CKA]: {
    name: 'Certified Kubernetes Administrator (CKA) course',
    banner: '/assets/images/kubernetes.png',
    about: `The <strong>Certied Kubernetes Administrator (CKA)</strong> training
program is designed to help IT professionals master
Kubernetes cluster management. This comprehensive course
provides the skills required to deploy, maintain, and
troubleshoot Kubernetes clusters in real-world environments.
With hands-on labs and practical exercises, the training
ensures participants are prepared to handle Kubernetes
administration tasks with condence. Whether you are a
system administrator, DevOps engineer, or IT professional,
this program equips you with essential Kubernetes skills for
modern IT infrastructures`,
    highlights: [
      'Hands-on training with real-world scenario',
      `Comprehensive coverage of Kubernetes administration
topics.`,
      'Practical labs and exercises to build real-world skills.',
      `Industry-aligned curriculum for career advancement.`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40–50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
offline.`,
          `<strong>Self-paced Learning:</strong> Flexible options for busy
professionals.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `<strong>Kubernetes Fundamentals:</strong> Understanding Kubernetes
architecture, components, and cluster communication.`,
          `<strong>Cluster Setup and Conguration:</strong> Installing
Kubernetes clusters using kubeadm and conguring
highly available clusters.
`,
          `<strong>Workload Management:</strong> Deploying, scaling, and
managing Kubernetes workloads using Deployments,
StatefulSets, and DaemonSets.`,
          `<strong>Networking in Kubernetes:</strong> Conguring services,
managing Ingress, and setting up Kubernetes network
policies.`,
          `<strong>Persistent Storage:</strong> Understanding Persistent Volumes,
Persistent Volume Claims, and storage classes.`,
          `<strong>Security and Access Control:</strong> Implementing RBAC,
Secrets, CongMaps, and securing the cluster with best
practices`,
          `<strong>Monitoring and Logging:</strong> Conguring tools like
Prometheus and Grafana for cluster monitoring and
logging`,
          `<strong>Troubleshooting Kubernetes Clusters:</strong> Diagnosing and
resolving cluster issues, including application failures
and network problems`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `<strong>System Administrators:</strong> Looking to expand their
skillset to include Kubernetes management.`,
          `DevOps Engineers: Integrating Kubernetes into CI/CD
pipelines and workflows.`,
          `Cloud Administrators: Managing containerized
workloads in cloud environments.`,
          `IT Professionals: Seeking to enhance their career prospects in containerization and orchestration.`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Gain foundational knowledge of containerization and Docker (if required).',
        clickable: true,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'Enroll in the Certied Kubernetes Administrator (CKA) training program.',
        clickable: true,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Participate in hands-on labs and practical exercises to build skills.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: `Master advanced topics like troubleshooting,
monitoring, and security`,
        clickable: true,
        isStart: false
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
        question: 'What are the prerequisites for this training?',
        answer: `Basic knowledge of Linux, networking, and
containerization is recommended`
      },
      {
        question: 'Is this training suitable for beginners?',
        answer:
          'Yes, the program starts with Kubernetes fundamentals and gradually covers advanced topics.'
      },
      {
        question: 'What resources are provided during the training?',
        answer: `Participants receive course materials, hands-on labs, and
access to practice environments.`
      },
      {
        question: 'Does this training include preparation for the CKA certication?',
        answer: `Yes, the training is aligned with the CKA certication
objectives and includes practice exercises based on the exam
syllabus.`
      },
      {
        question: 'What tools are used during the training?',
        answer:
          'Tools like kubeadm, kubectl, and monitoring solutions (Prometheus, Grafana) are covered in depth.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DEVOPS]: {
    name: 'D0188 Exam',
    banner: '/assets/images/devops.png',
    about:
      'The <strong>DevOps and Cloud Computing</strong> course is designed to equip IT professionals with the skills necessary to deploy, manage, and automate cloud infrastructure using modern DevOps tools and practices. This course covers the core principles of DevOps—collaboration, automation, and continuous delivery—while integrating hands-on experience with cloud platforms like AWS, Azure, or Google Cloud. Participants will learn to build scalable cloud environments, automate infrastructure with tools like Terraform and Ansible, and manage CI/CD pipelines for seamless software delivery.',
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
  [SLUGS.DO188]: {
    name: COURSE_LABEL[SLUGS.DO188],
    banner: '/assets/images/redhat-openshift-development-1.png',
    about: `The <strong>DO188</strong> certication course is designed to provide
developers with a foundational understanding of container
technology and its application in building, deploying, and
managing containerized applications using Podman. As an
entry-level course in the OpenShift learning path, DO188 is
globally recognized and provides essential skills for
developers transitioning to cloud-native application
development and container orchestration.`,
    highlights: [
      'Introduction to container architecture and technologies',
      `Hands-on training with Podman for building and
managing containers`,
      `Preparing developers to use Red Hat OpenShift for
application orchestration`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['32 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
ofine, with live sessions led by certied instructors.`,
          `<strong>Self-paced Learning:</strong> Flexible learning options with
access to recorded sessions and additional resources.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `Understanding container architecture and its benets`,
          `Running, managing, and building containers using
Podman`,
          `Creating custom container images and containerized
applications`,
          `Managing persistent storage in containers`,
          `Basic container networking concepts`,
          `Deploying containerized applications to Red Hat
OpenShift`,
          `Orchestrating multi-container applications using
Kubernetes/OpenShift`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `Application developers transitioning to container-based
development workflows`,
          `IT professionals seeking to understand container
technology and OpenShift basics`,
          `Students and professionals aiming to build a career in
cloud-native application development`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Gain basic knowledge of Linux and containers.',
        clickable: false,
        isStart: true
      },
      {
        title: 'Step 2',
        description: `Enroll in DO188 to learn container technology
using Podman`,
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: `Practice building, deploying, and managing
containers in hands-on labs.`,
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: `Advance to OpenShift-specic courses like
DO280 (Administration) or DO288 (Development).`,
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Rajesh Kumar',
        start: 4.5,
        feedback:
          'The course gave me a clear understanding of containerization and its practical applications in modern development'
      },
      {
        name: 'Sneha Gupta',
        start: 5,
        feedback:
          'DO188 is perfect for developers starting with containers. The hands-on labs made learning easy.'
      }
    ],
    faqs: [
      {
        question: `Do I need prior experience with containers for DO188?`,
        answer: `No prior experience is required, but basic knowledge of
Linux and application architecture is recommended.
`
      },
      {
        question: `What tools will I learn in this course?`,
        answer: `The course focuses on Podman for container management
and introduces OpenShift for application orchestration.`
      },
      {
        question: `Can I take this course as a beginner in cloud-native
technologies?`,
        answer: `Yes, this course is ideal for beginners transitioning to
container-based development.`
      },
      {
        question: `Is there a certication exam associated with DO188?`,
        answer: `Yes, after completing the course, you can take the EX188
certication exam to validate your skills.`
      },
      {
        question: `Will this course help me in the OpenShift learning path?
`,
        answer: `Absolutely! DO188 serves as the foundational course for
advanced OpenShift certications like DO280
(Administration) and DO288 (Development).`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO280]: {
    name: COURSE_LABEL[SLUGS.DO280],
    banner: '/assets/images/redhat-openshift-admin.png',
    about: `The <strong>DO280</strong> course focuses on teaching IT professionals how
to congure, deploy, and manage Red Hat OpenShift clusters
in production environments. As part of the Red Hat OpenShift
learning path, this certication builds essential skills for
deploying containerized applications and managing OpenShift
environments. It is globally recognized and designed for
system administrators, DevOps professionals, and IT
specialists aiming to master OpenShift administration.`,
    highlights: [
      `Learn to install and congure production-ready
OpenShift clusters`,
      `Manage authentication, networking, and application
security`,
      `Gain practical skills for troubleshooting and monitoring
OpenShift environments`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
ofine with interactive, live sessions by certfied
instructors`,
          `<strong>Self-paced Learning:</strong> Flexible learning modules with
access to recorded lectures and resources.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `Installation and conguration of OpenShift clusters`,
          `Managing users, authentication, and authorization`,
          `Conguring networking and network policies`,
          `Securing OpenShift applications and environments`,
          `Monitoring and troubleshooting OpenShift clusters`,
          `Upgrading and maintaining OpenShift clusters`,
          `Application deployment and scaling`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `System administrators managing containerized
applications and Kubernetes clusters`,
          `IT professionals seeking advanced knowledge of
OpenShift for production use`,
          `DevOps engineers aiming to enhance their deployment
and orchestration skills`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: ' Gain foundational knowledge with DO180 (RedHat OpenShift I)',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'Enroll in DO280 to learn production-level OpenShift administration',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Practice in hands-on labs to solidify your skills',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'Appear for the EX280 certication exam to validate your expertise',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Ankit Sharma',
        start: 4.5,
        feedback:
          'DO280 gave me the confidence to manage OpenShift clusters in a production environment efficiently.'
      },
      {
        name: 'Neha Verma',
        start: 5,
        feedback:
          'This course covers all the practical aspects of OpenShift cluster administration. Highly recommended!'
      }
    ],
    faqs: [
      {
        question: 'What are the prerequisites for DO280?',
        answer: ` Completion of DO180 (Red Hat OpenShift I) or
equivalent experience with container and Kubernetes concepts
is required`
      },
      {
        question: 'Is the course focused on OpenShift 4.x?',
        answer: ` Yes, DO280 is designed to cover the latest features and
capabilities of OpenShift 4.x`
      },
      {
        question: 'What career roles can I pursue after completing DO280?',
        answer: ` You can pursue roles such as OpenShift Administrator,
Kubernetes Engineer, or DevOps Specialist`
      },
      {
        question: 'Does this course include practical lab sessions?',
        answer: `Yes, the course includes extensive hands-on labs
simulating real-world scenarios for OpenShift administration`
      },
      {
        question: 'Is there a certication exam after the course?',
        answer: `Yes, the EX280 exam is the associated certication for
DO280, validating your OpenShift administration skills.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO380]: {
    name: COURSE_LABEL[SLUGS.DO380],
    banner: '/assets/images/redhat-openshift.png',
    about: `The <strong>DO380</strong> course is an advanced certication designed for
IT professionals who manage large-scale OpenShift clusters
in enterprise environments. This course equips you with the
skills to scale and manage OpenShift deployments, implement
advanced automation, and ensure enterprise-grade security. It
is recognized globally and is essential for professionals
handling critical OpenShift environments in DevOps, cloud,
and IT infrastructure roles.`,
    highlights: [
      `Master advanced OpenShift administration techniques`,
      `Learn to scale OpenShift clusters and manage complex
deployments`,
      `Gain practical knowledge of GitOps workows,
enterprise logging, and monitoring`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
ofine with live, interactive sessions.`,
          `Self-paced Learning: Flexible modules with recorded
lectures and comprehensive study materials.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          'Advanced cluster management techniques',
          'Implementing GitOps workows for application management',
          'Enterprise authentication and authorization',
          'Logging and monitoring OpenShift clusters at scale',
          'Automating infrastructure management tasks',
          'Disaster recovery and backup strategies',
          'Advanced security configurations'
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          'OpenShift administrators managing large-scale clusters',
          'IT professionals working in enterprise DevOps or cloud environments',
          'Experienced system administrators seeking to specialize in OpenShift'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description:
          'Complete foundational OpenShift courses like DO280 (Production Cluster Administration).',
        clickable: true,
        link: `/redhat/${SLUGS.DO280}`,
        isStart: true
      },
      {
        title: 'Step 2',
        description: ' Enroll in DO380 for advanced OpenShift skills.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Practice scaling and managing OpenShift clusters through hands-on labs.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'Demonstrate your expertise in enterprise OpenShift environments.',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Rahul Singh',
        start: 4.5,
        feedback:
          'DO380 is a must for anyone managing large OpenShift deployments. It’s comprehensive and practical.'
      },
      {
        name: 'Anjali Joshi  ',
        start: 5,
        feedback:
          'The course’s focus on GitOps and security was extremely valuable for our enterprise environment.'
      }
    ],
    faqs: [
      {
        question: 'What are the prerequisites for DO380?',
        answer: `Completion of DO280 or equivalent experience with
OpenShift and Kubernetes is required`
      },
      {
        question: 'Does this course focus on OpenShift 4.x?',
        answer: `Yes, the course is tailored for OpenShift 4.x and its latest
features.`
      },
      {
        question: 'What career opportunities are available after completing DO380?',
        answer: `You can pursue roles like OpenShift Specialist,
Enterprise Kubernetes Administrator, or Cloud DevOps
Engineer.`
      },
      {
        question: 'Is there a certication exam for DO380?',
        answer: `Currently, DO380 focuses on advanced skills validation,
but there is no specfic exam tied to this course.`
      },
      {
        question: 'What practical skills will I gain from this course?',
        answer: `You will learn advanced OpenShift cluster scaling,
GitOps integration, disaster recovery, and enterprise-grade
logging and monitoring.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DOCKER_CONTAINER_TRANING]: {
    name: 'Docker Container and Podman',
    banner: '/assets/images/docker.png',
    about: `<strong>Docker</strong> is the leading platform for containerizing applications,
enabling developers and system administrators to build, ship,
and run applications efciently. This comprehensive Docker
training program equips you with the foundational and
advanced skills needed to deploy, manage, and scale
containerized applications in real-world environments.
Whether you're a developer, DevOps engineer, or IT
professional, this course provides hands-on experience with
Docker, making it an essential step for mastering
containerization and modern application delivery.`,
    highlights: [
      `Comprehensive, hands-on training with real-world
scenarios.`,
      `Learn to build, deploy, and manage containerized
applications.`,
      `Industry-relevant curriculum designed for career
advancement.`,
      `Coverage of advanced Docker features and best
practices.`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40–50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available both online and
offline.`,
          `Self-paced Learning: Flexible options for professionals`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `<strong>Introduction to Docker:</strong> Overview of containers,
images, and the Docker architecture`,
          `<strong>Installing Docker:</strong> Step-by-step guide to installing
Docker on Linux and Windows.`,
          `<strong>Working with Docker Images:</strong> Building, managing, and
optimizing Docker images using Dockerfiles.`,
          `<strong>Container Management:</strong> Running, stopping, and
managing containers effectively.`,
          `<strong>Docker Networking:</strong> Conguring container
communication with networks and custom bridge
networks.`,
          `<strong>Docker Volumes:</strong> Managing persistent storage for
containers with volumes and bind mounts.`,
          `<strong>Docker Compose:</strong> Orchestrating multi-container
applications using Docker Compose.`,
          `<strong>Advanced Docker Concepts:</strong> Multi-stage builds, image
optimization, and managing private Docker registries.`,
          `<strong>Docker Security:</strong> Implementing best practices to secure
Docker containers and images.`,
          `<strong>Monitoring and Logging:</strong> Setting up Docker monitoring
and logging with tools like Prometheus and ELK stack.`,
          `<strong>Docker Swarm:</strong> Introduction to Docker Swarm for
container orchestration.`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `<strong>Developers:</strong> Looking to streamline application
deployment and testing.`,
          `<strong>System Administrators:</strong> Managing containerized
applications in production.`,
          `<strong>DevOps Engineers:</strong> Automating and optimizing
workows with Docker.`,
          `<strong>IT Professionals:</strong> Seeking a career in containerization
and modern IT infrastructures.`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: `Introduction to Docker and understanding
containerization concepts.`,
        clickable: true,
        isStart: true
      },
      {
        title: 'Step 2',
        description: `Hands-on practice with Docker commands,
images, and containers`,
        clickable: true,
        isStart: false
      },
      {
        title: 'Step 3',
        description: `Master Docker Compose and advanced Docker
features.`,
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: `Learn Docker Swarm for container orchestration`,
        clickable: true,
        isStart: false
      },
      {
        title: 'Step 5',
        description: `Advanced security, monitoring, and logging
practices.`,
        clickable: true,
        isStart: true
      }
    ],
    feedbacks: [
      {
        name: 'Arjun Sharma',
        start: 4.5,
        feedback: `This Docker training was a game-changer for me. I now feel
condent managing containers in production environments!"`
      },
      {
        name: 'Sneha Gupta',
        start: 5,
        feedback: `The hands-on labs were excellent. I learned how to deploy
multi-container applications using Docker Compose.`
      },
      {
        name: 'Vikram Singh',
        start: 5,
        feedback: `I highly recommend this course for anyone looking to master
Docker. The advanced topics like multi-stage builds and
private registries were incredibly useful.`
      }
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this training?',
        answer: 'Basic knowledge of Linux and system administration is recommended'
      },
      {
        question: 'Is this course suitable for beginners?',
        answer: `Yes, the course covers Docker from the basics to
advanced topics, making it ideal for beginners and
experienced professionals alike.`
      },
      {
        question: 'What tools are covered in this training?',
        answer: `Docker CLI, Docker Compose, Docker Swarm, and
monitoring/logging tools like Prometheus and ELK.`
      },
      {
        question: 'Does this training include real-world projects?',
        answer: `Yes, the course includes practical exercises and projects
based on real-world scenarios.`
      },
      {
        question: 'Is this training aligned with Docker certifications?',
        answer: `Yes, the training prepares participants for Docker
certifications and real-world challenges.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.MCA_DEGREE_PROGRAM]: {
    name: 'MCA Degree Program',
    banner: '/assets/images/',
    about: '',
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
  [SLUGS.OPENSHIFT_AI]: {
    name: COURSE_LABEL[SLUGS.OPENSHIFT_AI],
    banner: '/assets/images/openshift-ai.png',
    about: `The <strong>OpenShift AI</strong> course is designed to help IT professionals
and developers build, train, and deploy AI/ML models on Red
Hat OpenShift. This certication empowers individuals to
leverage OpenShift's enterprise-grade infrastructure to
streamline articial intelligence and machine learning (AI/
ML) workows. With its global recognition and integration
with cutting-edge AI/ML tools, this course is ideal for
professionals seeking to work in AI-driven industries or
enhance their cloud-native application development skills.`,
    highlights: [
      `Learn to integrate AI/ML workflows into OpenShift`,
      `Deploy scalable AI/ML pipelines using Kubernetesnative tools`,
      `Gain hands-on experience with Jupyter, TensorFlow, and
OpenShift Pipelines`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40-50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Live, interactive training
sessions delivered online or ofine by certified
instructors`,
          `Self-paced Learning: Flexible options with access to recorded sessions, study materials, and virtual labs.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          'Introduction to AI/ML workflows in OpenShift',
          'Setting up and managing Jupyter Notebooks for data exploration',
          'Training and deploying machine learning models using TensorFlow',
          `Automating AI/ML pipelines with OpenShift Pipelines`,
          `Scaling AI/ML workloads across hybrid cloud
environments`,
          `Securing and monitoring AI/ML workows on
OpenShift`,
          `Best practices for AI/ML model lifecycle management`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          'Developers and data scientists working on AI/ML projects',
          'IT professionals managing OpenShift or hybrid cloud environments',
          'Cloud-native application developers seeking to integrate AI into their workflows'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description:
          'Gain foundational knowledge of OpenShift and Kubernetes (e.g., DO188 or DO280).',
        clickable: false,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'Enroll in the OpenShift AI course to learn AI/ML workflows and tools.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Practice deploying and managing AI/ML workloads in hands-on labs.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description:
          'Apply the knowledge to real-world AI/ML projects or take advanced AI/ML certification courses.',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Karan Singh',
        start: 4.5,
        feedback:
          'OpenShift AI simplified deploying AI models for our team. The course is excellent.'
      },
      {
        name: 'Rhea Agarwal',
        start: 5,
        feedback: 'The focus on scalability and practical AI applications was invaluable'
      }
    ],
    faqs: [
      {
        question: 'Do I need prior knowledge of AI/ML to enroll in this course?',
        answer: `Basic knowledge of AI/ML concepts is recommended but
not mandatory. OpenShift knowledge is essential.`
      },
      {
        question: 'What tools will I learn in this course?',
        answer: `You will work with Jupyter Notebooks, TensorFlow, and
OpenShift Pipelines for AI/ML workflows.`
      },
      {
        question: 'What career opportunities can I pursue after this course?',
        answer: `Roles like AI/ML Engineer, Data Scientist, and Cloud-Native Application Developer are ideal career paths.`
      },
      {
        question: 'Is this course suitable for hybrid cloud environments?',
        answer: `Yes, the course covers deploying and managing AI/ML
workloads in hybrid cloud setups using OpenShift.`
      },
      {
        question: 'Does the course include hands-on labs?',
        answer: `Absolutely! The course includes extensive labs to provide
real-world experience in deploying AI/ML workflows.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.REDHAT_OPENSHIFT]: {
    name: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    banner: '/assets/images/redhat-virtual.png',
    about: `The <strong>DO316</strong> certication course focuses on integrating and
managing virtualization environments using Red Hat
OpenShift. It equips IT professionals with the skills required
to deploy, congure, and optimize Red Hat Virtualization as
part of containerized workloads. With a global demand for
professionals adept at managing hybrid cloud environments,
this course is ideal for system administrators and DevOps
engineers looking to enhance their expertise in virtualization
and container orchestration.`,
    highlights: [
      `Learn to integrate Red Hat Virtualization with OpenShift
environments`,
      `Manage and optimize containerized workloads in hybrid
cloud infrastructures`,
      `Gain hands-on experience with real-world virtualization
challenges`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40-50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Live, interactive sessions
available both online and ofine, led by certied
instructors.
`,
          `Self-paced Learning: Flexible learning options with
access to recorded sessions, detailed guides, and handson labs`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          'Overview of Red Hat Virtualization and OpenShift integration',
          'Managing virtual machines within OpenShift environments',
          'Scaling and optimizing containerized workloads using virtualization',
          'Automating virtualization tasks using Red Hat Ansible Automation',
          'Securing virtualization and containerized environments',
          'Troubleshooting virtualization and container workloads',
          'Performance monitoring and optimization of hybrid workloads'
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `System administrators managing virtualization and
container platforms`,
          `IT professionals working in hybrid cloud environments
with OpenShift`,
          `DevOps engineers seeking expertise in managing
virtualized workloads with OpenShift`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Obtain foundational knowledge through RHCSA',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description:
          'Gain containerization skills by completing DO188 (Introduction to Containers).',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Enroll in DO316 to specialize in virtualization with OpenShift.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: ': Practice with hands-on labs and real-world projects.',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Tarun Mehta',
        start: 4.5,
        feedback: 'DO316 made managing data storage in OpenShift much easier for us.'
      },
      {
        name: 'Anita Jain',
        start: 5,
        feedback: 'The course is ideal for understanding containerized storage systems.'
      }
    ],
    faqs: [
      {
        question: 'Do I need prior experience with virtualization to enroll in DO316?',
        answer: `Basic knowledge of Red Hat Virtualization or equivalent
experience is recommended, but not mandatory.`
      },
      {
        question: 'Does this course focus on OpenShift 4.x?',
        answer: `Yes, DO316 is specically designed for OpenShift 4.x
and its integration with Red Hat Virtualization`
      },
      {
        question: 'What career opportunities are available after completing DO316?',
        answer: `Roles such as Virtualization Engineer, Hybrid Cloud
Specialist, and OpenShift Administrator are ideal career paths
after completing this course.`
      },
      {
        question: 'Does the course include automation using Ansible?',
        answer: `Yes, the course covers automating virtualization tasks
and workloads using Red Hat Ansible Automation`
      },
      {
        question: 'What practical skills will I gain from this course?',
        answer: `You will learn to manage and optimize virtual machines
and containerized workloads, secure hybrid cloud
environments, and troubleshoot performance issues.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH358]: {
    name: COURSE_LABEL[SLUGS.RH358],
    banner: '/assets/images/redhat-service-automation.png',
    about: `The <strong>RH358</strong> course focuses on automating and managing Red
Hat services in Linux environments. It equips system
administrators and IT professionals with the skills to deploy,
congure, and manage critical Red Hat services efciently.
This certication emphasizes automation, scalability, and
enterprise-level management, making it globally recognized
for enhancing career opportunities in DevOps, system
administration, and IT operations.`,
    highlights: [
      `Master service management using advanced Red Hat
tools`,
      `Automate critical system services for improved
efficiency`,
      `Gain expertise in managing services across physical,
virtual, and cloud infrastructures`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40-50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Live sessions available online
and ofine, delivered by certied trainers.`,
          `<strong>Self-paced Learning:</strong> Flexible modules with access to
recorded content, resources, and labs.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `Deploying and managing Red Hat services`,
          `Conguring and automating common services like DNS,
HTTP, and FTP`,
          `Securing and auditing service configurations`,
          `Managing and optimizing service performance`,
          `Automating service deployment using Ansible`,
          `Troubleshooting common service-related issues`,
          `Scaling services across hybrid cloud environments`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `System administrators managing Red Hat environments
and services`,
          `IT professionals seeking to automate service
management tasks`,
          `DevOps engineers looking to enhance service
deployment and configuration skills`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Gain foundational skills with RHCSA or equivalent knowledge.',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'Enroll in RH358 to specialize in service management and automation.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Participate in hands-on labs to gain real-world experience',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description:
          'Apply your skills in enterprise environments or pursue advanced certifications.',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Manish Kapoor',
        start: 4.5,
        feedback: 'RH358 helped us reduce downtime significantly with high-availability clusters.'
      },
      {
        name: 'Deepa Sharma',
        start: 5,
        feedback: 'The course covers all critical aspects of clustering in great detail.'
      }
    ],
    faqs: [
      {
        question: 'Do I need prior Red Hat certication to enroll in RH358?',
        answer:
          'While RHCSA is not mandatory, it is recommended for understanding foundational concepts.'
      },
      {
        question: 'Does RH358 cover automation with Ansible?',
        answer: `Yes, the course includes automating service deployments
and configurations using Ansible.`
      },
      {
        question: 'What career opportunities can I explore after RH358?',
        answer: `You can pursue roles like Linux System Administrator,
DevOps Engineer, and Service Automation Specialist.`
      },
      {
        question: 'Is the course suitable for hybrid cloud environments?',
        answer: `Yes, RH358 covers managing and scaling services across
physical, virtual, and cloud platforms`
      },
      {
        question: 'Does the course include troubleshooting techniques?',
        answer: `Absolutely! RH358 includes detailed modules on
troubleshooting and optimizing service performance.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH415]: {
    name: COURSE_LABEL[SLUGS.RH415],
    banner: '/assets/images/redhat-security.png',
    about: `The <strong>RH415</strong> course, also known as Red Hat Security: Linux in
Physical, Virtual, and Cloud, is designed to equip IT
professionals with the skills required to secure Red Hat
Enterprise Linux (RHEL) environments across physical,
virtual, and cloud platforms. This certication focuses on
advanced security concepts such as access controls, SELinux
policies, and threat detection, making it a highly sought-after
credential for security professionals. RH415 ensures that you
are prepared to handle real-world challenges in securing
Linux systems in diverse environments.`,
    highlights: [
      `Learn to secure Linux systems in physical, virtual, and
cloud infrastructures`,
      `Master advanced SELinux congurations and access
controls`,
      `Implement threat detection and response strategie`
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          `<strong>Instructor-led Training:</strong> Available online and ofine
with live sessions conducted by certified instructors.`,
          `Self-paced Learning: Flexible learning with access to
recorded lectures, resources, and practical labs.`
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          `Implementing advanced SELinux policies and
configurations`,
          `Managing le system encryption and securing storage`,
          `Securing network services and trafc using rewalls and
VPNs`,
          `Detecting and responding to threats in Linux
environments`,
          `Conguring access controls and managing authentication`,
          `Ensuring compliance with security and audit standards`,
          `Securing Linux systems in cloud and virtualized
environments`
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          `Security professionals responsible for securing Linux
systems`,
          `System administrators managing RHEL environments in
diverse platforms`,
          `IT professionals seeking to specialize in Linux security`
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Gain foundational Linux skills (RHCSA or equivalent).',
        clickable: true,
        link: `/redhat/${SLUGS.RHCSA}`,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'Complete RHCE for advanced system administration knowledge (recommended).',
        clickable: true,
        link: `/redhat/${SLUGS.RHCE}`,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Enroll in RH415 to specialize in securing Linux systems.',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'Apply your knowledge in hands-on labs and realworld scenarios.',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Vikarm Rahtore',
        start: 4.5,
        feedback: 'RH415 provided me with the skills to secure Linux environments effectively.'
      },
      {
        name: 'Pooja Sinha',
        start: 5,
        feedback: 'The SELinux deep dive was incredibly helpful. Excellent course!'
      }
    ],
    faqs: [
      {
        question: 'Do I need to complete RHCE before enrolling in RH415?',
        answer: `While RHCE is not mandatory, it is highly recommended
as it provides the foundational knowledge needed for this
advanced course.`
      },
      {
        question: 'Does RH415 cover security for cloud environments?',
        answer: `Yes, the course includes securing RHEL in cloud
platforms like AWS and Azure.`
      },
      {
        question: 'What career roles can I pursue after completing RH415?',
        answer: `You can explore roles like Linux Security Engineer, Cybersecurity Analyst, and Infrastructure Security Specialist.`
      },
      {
        question: 'Is there a certication exam for RH415?',
        answer: `No specic certication exam is tied to this course, but
the skills gained are applicable to Red Hat Certied Specialist
tracks in security.`
      },
      {
        question: 'Does the course include compliance and audit topics?',
        answer: `Yes, the course covers compliance standards and auditing
to ensure your Linux systems meet regulatory requirements.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RHCE]: {
    name: COURSE_LABEL[SLUGS.RHCE],
    banner: '/assets/images/redhat-certified-engineer.png',
    about: `The <strong>Red Hat Certied Engineer (RHCE)</strong> certication is a
globally recognized credential that validates your expertise in
automating Red Hat Enterprise Linux (RHEL) tasks using
Ansible and scripting. Building on the foundational skills of a
Red Hat Certied System Administrator (RHCSA), RHCE
certication equips IT professionals with advanced skills for
enterprise-level automation, making it highly valued in the IT
industry. Whether you're pursuing a career in system
administration, DevOps, or IT automation, RHCE is a vital
step toward mastering these domains.`,
    highlights: [
      'Hands-on training focused on real-world scenarios',
      'Industry-recognized certication for career advancement',
      'Automation-focused skills for enterprise IT environments'
    ],
    info: [
      {
        heading: 'Duration:',
        content: ['40–50 Hours (Classroom/Online)']
      },
      {
        heading: 'Mode:',
        content: [
          '<strong>Instructor-led Training:</strong> Available both online and offline',
          '<strong>Self-paced Learning:</strong> Flexible options for busy professionals'
        ]
      },
      {
        heading: 'Key Topics Covered:',
        content: [
          'Automating Linux system administration tasks with Ansible',
          'Writing and managing Ansible Playbooks and roles',
          'Conguring systems using advanced Ansible features',
          'Managing network services and security policies',
          'System monitoring and troubleshooting',
          'Conguring storage with LVM, partitions, and file systems',
          'Advanced security management with SELinux'
        ]
      },
      {
        heading: 'Who Should Enroll?',
        content: [
          'IT professionals with RHCSA certication aiming to enhance their automation skills',
          'System administrators looking to advance to enterpriselevel roles',
          'DevOps professionals integrating Linux automation into their workows',
          'Individuals seeking career opportunities in automation, DevOps, and cloud computing'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Red Hat Certied System Administrator (RHCSA) Certication',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'Red Hat Certied Engineer (RHCE) Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Hands-on Labs for Automation and Troubleshooting',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'RHCE Certication Exam (EX294)',
        clickable: false,
        isStart: false
      }
    ],
    feedbacks: [
      {
        name: 'Akshay Patel  ',
        start: 5,
        feedback:
          'RHCE certification helped me automate my tasks and increase my productivity as a system administrator. The hands-on labs were excellent!'
      },
      {
        name: 'Priya Mehra',
        start: 4.5,
        feedback:
          'The course helped me understand advanced Linux automation concepts, which boosted my confidence and career prospects.'
      }
    ],
    faqs: [
      {
        question: 'Is RHCSA certication mandatory before pursuing RHCE?',
        answer:
          'Yes, RHCSA certication is a prerequisite for RHCE as it builds on foundational Linux skills'
      },
      {
        question: 'What is the format of the RHCE exam?',
        answer: `The RHCE exam (EX294) is a performance-based,
hands-on test that assesses your ability to automate Linux
system tasks using Ansible.`
      },
      {
        question: `How long is the RHCE certication valid?`,
        answer: `The RHCE certication is valid for three years.`
      },
      {
        question: `What career opportunities can I pursue after RHCE?`,
        answer: `RHCE certication can lead to roles such as Senior Linux
Administrator, Automation Engineer, DevOps Engineer, and
IT Infrastructure Specialist.`
      },
      {
        question: `What tools are used in RHCE training?`,
        answer: `RHCE focuses primarily on Red Hat Ansible Automation
for automating Linux system tasks.`
      },
      {
        question: `Does RHCE cover advanced security concepts?`,
        answer: `Yes, the course includes advanced security features like
SELinux, rewalls, and system monitoring.`
      },
      {
        question: `What resources are available for RHCE preparation?`,
        answer: `Red Hat offers the RH294 course, which provides
comprehensive training on automation and scripting with
Ansible.`
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RHCSA]: {
    name: COURSE_LABEL[SLUGS.RHCSA],
    banner: '/assets/images/redhat-system-admin.png',
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
    banner: '/assets/images/summer-internship.png',
    about: `Get ahead of the competition by utilizing your summer break to gain hands-on experience with our Summer Internship Program. Tailored for college students, this internship is designed to help you develop real-world skills in DevOps, cloud computing, Python, data science, and more. Whether you're a beginner or looking to enhance your knowledge, this program is perfect for all levels.`,
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
    ]
  },
  [SLUGS.WINTER_INTERNSHIP_TRANING]: {
    name: 'Winter Internship Traning',
    banner: '/assets/images/winter-internship.png',
    about:
      'Make the most of your winter break by enrolling in our Winter Internship Program, specifically tailored for students looking to upskill during their holidays. This program offers a mix of theoretical learning and practical exposure in the latest technologies like DevOps, Python, and Red Hat certifications. Boost your career prospects with hands-on experience and industry-recognized certifications.',
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
    ]
  }
};

export const REDHAT = [
  {
    label: COURSE_LABEL[SLUGS.RHCSA],
    link: `/redhat/${SLUGS.RHCSA}`,
    title: COURSE_LABEL[SLUGS.RHCSA],
    description:
      'course provides foundational skills for managing and configuring Red Hat Enterprise Linux systems, preparing students for the RHCSA certification exam.',
    image: '/assets/images/'
  },
  {
    label: COURSE_LABEL[SLUGS.RHCE],
    link: `/redhat/${SLUGS.RHCE}`,
    title: COURSE_LABEL[SLUGS.RHCE],
    description:
      'This course is ideal for system administrators and DevOps professionals who want to advance their automation skills and enhance career opportunities.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO188],
    link: `/redhat/${SLUGS.DO188}`,
    title: COURSE_LABEL[SLUGS.DO188],
    description:
      ' introduces developers to building, managing, and deploying containerized applications using Podman. It also covers orchestration using OpenShift.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO280],
    link: `/redhat/${SLUGS.DO280}`,
    title: COURSE_LABEL[SLUGS.DO280],
    description:
      'equips administrators with the skills to configure, troubleshoot, and manage OpenShift clusters in production environments.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.DO380],
    link: `/redhat/${SLUGS.DO380}`,
    title: COURSE_LABEL[SLUGS.DO380],
    description:
      'focuses on managing and scaling OpenShift clusters for enterprise deployments, addressing advanced challenges in production environments.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.RH415],
    link: `/redhat/${SLUGS.RH415}`,
    title: COURSE_LABEL[SLUGS.RH415],
    description:
      'designed for security professionals to secure Red Hat Linux systems in physical, virtual, and cloud environments.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.RH358],
    link: `/redhat/${SLUGS.RH358}`,
    title: COURSE_LABEL[SLUGS.RH358],
    description:
      'trains administrators to configure and manage high-availability clusters using Red Hat technologies.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    link: `/redhat/${SLUGS.REDHAT_OPENSHIFT}`,
    title: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    description:
      'teaches administrators how to deploy and manage OpenShift Data Foundation (ODF) for containerized storage solutions.',
    image: 'https://via.placeholder.com/300x140'
  },
  {
    label: COURSE_LABEL[SLUGS.OPENSHIFT_AI],
    link: `/redhat/${SLUGS.OPENSHIFT_AI}`,
    title: COURSE_LABEL[SLUGS.OPENSHIFT_AI],
    description:
      'enables AI/ML professionals to build, train, and deploy AI/ML models on OpenShift.',
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
        children: [{ label: COURSE_LABEL[SLUGS.CKA], link: `course/${SLUGS.CKA}` }]
      },
      {
        label: COURSE_LABEL.DOCKER,
        children: [
          {
            label: COURSE_LABEL[SLUGS.DOCKER_CONTAINER_TRANING],
            link: `course/${SLUGS.DOCKER_CONTAINER_TRANING}`
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
