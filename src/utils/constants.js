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
    description:
      'course provides foundational skills for managing and configuring Red Hat Enterprise Linux systems, preparing students for the RHCSA certification exam.',
    image: 'https://via.placeholder.com/300x140'
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
  [SLUGS.BCA_DEGREE_PROGRAM]: {
    name: 'BCA Degree Program',
    banner: '/assets/img/12.jpg',
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
    banner: '/assets/img/9.jpg',
    about:
      'The <strong>Certified Kubernetes Administrator (CKA)</strong> course is designed to equip IT professionals with the skills necessary to install, configure, and manage Kubernetes clusters. This certification validates your knowledge and hands-on expertise in managing Kubernetes environments, making you proficient in core concepts like deployment, networking, security, and troubleshooting in a production-grade Kubernetes setup. The CKA is highly sought after for administrators working with containerized applications and cloud-native environments.',
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
  [SLUGS.DEVOPS]: {
    name: 'D0188 Exam',
    banner: '/assets/img/1.jpg',
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
    banner: '/assets/img/3.jpg',
    about:
      'The <strong>DO188</strong> course focuses on developing and containerizing applications for deployment on Red Hat OpenShift. This course is designed to help developers build, deploy, and manage applications in containerized environments using OpenShift. By the end of this course, participants will gain the skills to containerize applications and deploy them on OpenShift, following modern DevOps practices.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['32 Hours (Classroom/Online)']
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
          'Introduction to containers',
          'Building and running containers with Podman',
          'Managing container images',
          'Deploying containers on OpenShift'
        ]
      },
      {
        heading: 'Exam Code:',
        content: ['EX188']
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'Fundamentals of Containers',
        clickable: false,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'DO188 Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Practical Labs',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'EX188 Certification Exam',
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
        question: 'Do I need prior experience with containers?',
        answer: 'Basic knowledge of Linux and web architecture is helpful.'
      },
      {
        question: 'Is there a certification for this course?',
        answer: 'Yes, the EX188 certification.'
      },
      {
        question: 'Can this course be applied to hybrid cloud environments?',
        answer: 'Yes, it integrates well with hybrid cloud platforms. '
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO280]: {
    name: COURSE_LABEL[SLUGS.DO280],
    banner: '/assets/img/4.jpg',
    about:
      'The <strong>DO280 (Red Hat OpenShift Administration II)</strong> course focuses on configuring and managing a production-grade OpenShift cluster using **OpenShift Container Platform 4.14**. This course teaches advanced administrative skills required for maintaining the security, scalability, and performance of OpenShift clusters in production environments. Participants will gain hands-on experience in configuring key components of a Kubernetes-based OpenShift infrastructure',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['4–5 Days']
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
          'Cluster installation and upgrades',
          'Security and authentication configuration',
          'Monitoring and troubleshooting OpenShift clusters',
          'Application deployment and scaling  '
        ]
      },
      {
        heading: 'Exam Code:',
        content: ['EX280']
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'DO180 (OpenShift Basics)',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'DO280 Training ',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Hands-on Labs',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'EX280 Certification Exam',
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
        question: 'Can I take this course without prior OpenShift knowledge?',
        answer: 'DO180 is a prerequisite for this course.'
      },
      {
        question: 'Is this course suitable for OpenShift 4.x?',
        answer: 'Yes, it is designed for OpenShift 4.x and above.'
      },
      {
        question: 'Does the course cover disaster recovery?',
        answer: 'Yes, basic disaster recovery concepts are included.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DO380]: {
    name: COURSE_LABEL[SLUGS.DO380],
    banner: '/assets/img/5.jpg',
    about:
      'The <strong>DO380 (Red Hat OpenShift Administration III)</strong> course is designed for administrators who need to scale and manage OpenShift clusters for enterprise workloads. This course covers advanced OpenShift cluster management, including scaling applications, automating tasks, implementing high availability (HA), and managing multi-cluster environments. It prepares participants to maintain highly available, scalable, and reliable OpenShift deployments in large-scale enterprise environments.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['5 Days']
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
          'Advanced cluster scaling',
          'GitOps workflows',
          'Enterprise security and authentication',
          'Centralized logging and monitoring'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'DO280 (Cluster Administration)',
        clickable: true,
        link: `/redhat/${SLUGS.DO280}`,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'DO380 Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Enterprise-level Practical Labs',
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
        question: 'Is this course only for large enterprises?',
        answer: 'No, it is suitable for anyone working with OpenShift clusters. '
      },
      {
        question: 'Does this course include real-world scenarios?',
        answer: ' Yes, the labs simulate enterprise challenges.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.DOCKER_CONTAINER_TRANING]: {
    name: 'Docker Container and Podman',
    banner: '/assets/img/10.jpg',
    about:
      'The <strong>Docker Container and Podman</strong> course provides a comprehensive introduction to containerization technologies, focusing on Docker and Podman. These tools are widely used for building, managing, and deploying containerized applications in both development and production environments. Participants will learn to work with containers, create container images, and understand the differences and similarities between Docker and Podman, preparing them for modern DevOps and cloud-native practices.',
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
  [SLUGS.MCA_DEGREE_PROGRAM]: {
    name: 'MCA Degree Program',
    banner: '/assets/img/13.jpg',
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
    banner: '/assets/img/1.jpg',
    about:
      'The Red Hat Certified Specialist in <strong>OpenShift AI Exam (EX267)</strong> is designed to validate the skills of IT professionals in deploying and managing AI/ML workloads using Red Hat OpenShift. This certification focuses on applying artificial intelligence (AI) and machine learning (ML) in a containerized environment, helping participants demonstrate their ability to build, scale, and manage AI models in a Kubernetes-based infrastructure. The course emphasizes using OpenShift’s powerful capabilities to accelerate the development and deployment of AI workloads.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['5 Days (Classroom/Online)']
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
          'AI/ML pipeline setup',
          'Using Jupyter and TensorFlow on OpenShift',
          'Scaling AI/ML workloads'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'OpenShift Basics',
        clickable: false,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'OpenShift AI Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'AI-focused Labs',
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
        question: 'Do I need prior AI/ML experience?',
        answer: 'Basic knowledge of AI/ML is recommended.  '
      },
      {
        question: 'What tools are used?',
        answer: 'Jupyter, TensorFlow, and OpenShift Pipelines.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.REDHAT_OPENSHIFT]: {
    name: COURSE_LABEL[SLUGS.REDHAT_OPENSHIFT],
    banner: '/assets/img/8.jpg',
    about:
      'The <strong>DO316 (Managing Virtual Machines with Red Hat OpenShift Virtualization)</strong> course is designed to equip system administrators and IT professionals with the skills to manage virtual machines (VMs) alongside containerized workloads on Red Hat OpenShift. This course focuses on integrating virtualization into Kubernetes environments, enabling seamless management of both VMs and containers in a hybrid infrastructure. Participants will learn how to deploy, configure, and manage VMs using OpenShift Virtualization.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['3 Days (Classroom/Online)']
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
          'Object, file, and block storage',
          'Data replication and disaster recovery',
          'Encryption and security'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'DO280 (Cluster Basics)',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.DO280}`
      },
      {
        title: 'Step 2',
        description: 'DO316 Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Hands-on Labs',
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
        question: 'Is knowledge of OpenShift mandatory?',
        answer: 'Yes, OpenShift basics are required. '
      },
      {
        question: 'Can this course be applied to hybrid cloud storage?',
        answer: 'Yes, ODF supports hybrid cloud environments.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH358]: {
    name: COURSE_LABEL[SLUGS.RH358],
    banner: '/assets/img/7.jpg',
    about:
      'The <strong>RH358 (Red Hat Services Management and Automation)</strong> course is designed to provide system administrators and DevOps professionals with the skills needed to manage and automate Red Hat Enterprise Linux services at scale. The course covers essential topics such as service management, automation with Ansible, and securing services in a Linux environment. By the end of this course, participants will be able to manage and automate key services on Red Hat systems efficiently.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['5 Days (Classroom/Online)']
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
          'Cluster setup and management',
          'Load balancing and failover',
          'Cluster troubleshooting'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'RHCSA (Recommended)',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'RH358 Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Hands-on Labs',
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
        question: 'Do I need clustering experience?',
        answer: 'No, but basic Linux administration skills are recommended. '
      },
      {
        question: 'Is this course applicable to cloud environments?',
        answer: 'Yes, clustering concepts are relevant to hybrid cloud setups.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RH415]: {
    name: COURSE_LABEL[SLUGS.RH415],
    banner: '/assets/img/6.jpg',
    about:
      'The <strong>RH415 (Red Hat Security: Linux in Physical, Virtual, and Cloud)</strong> course is designed for senior Linux administrators responsible for securing systems and managing compliance in physical, virtual, and cloud environments. This course focuses on advanced security techniques for Red Hat Enterprise Linux, enabling participants to address security vulnerabilities, implement access controls, and maintain system integrity across diverse infrastructure.',
    highlights: [],
    info: [
      {
        heading: 'Duration:',
        content: ['4 Days (Classroom/Online)']
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
          'SELinux and security policies',
          'Threat detection and response',
          'Secure networking and storage'
        ]
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'RHCSA',
        clickable: true,
        link: `/redhat/${SLUGS.RHCSA}`,
        isStart: true
      },
      {
        title: 'Step 2',
        description: 'RH415 Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Security-focused Labs',
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
        question: 'Is RH415 suitable for beginners?',
        answer: 'Basic Linux knowledge is required.'
      },
      {
        question: 'Does the course include compliance training?',
        answer: 'Yes, compliance and audit-related topics are covered.'
      }
    ],
    pdf: 'assets/courses-pdfs/RHCSA.pdf'
  },
  [SLUGS.RHCE]: {
    name: COURSE_LABEL[SLUGS.RHCE],
    banner: '/assets/img/2.jpg',
    about:
      'The <strong>RHCE</strong> course is designed for experienced Linux administrators who want to advance their skills and become proficient in automating Red Hat Enterprise Linux tasks using Ansible. This certification builds on RHCSA skills, focusing on automation, deployment, and management across multiple systems. The RHCE credential is highly regarded and helps professionals achieve higher-level administrative roles in the industry.',
    highlights: [],
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
          'Automating Linux tasks with Ansible',
          'Operating running systems (boot, reboot, shut down, and troubleshoot)',
          'Configuring local storage using partitions, LVM, and file systems',
          'Creating and configuring file systems (ext4, XFS)',
          'Managing users and groups, file permissions, and SELinux security',
          'Deploying and managing RHEL systems (installation and configuration)',
          'Managing system configurations and services',
          'Advanced networking and security',
          'System monitoring and troubleshooting'
        ]
      },
      {
        heading: 'Exam Code:',
        content: ['EX294']
      }
    ],
    learningPath: [
      {
        title: 'Step 1',
        description: 'RHCSA Certification',
        clickable: true,
        isStart: true,
        link: `/redhat/${SLUGS.RHCSA}`
      },
      {
        title: 'Step 2',
        description: 'RHCE Training',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 3',
        description: 'Hands-on Labs',
        clickable: false,
        isStart: false
      },
      {
        title: 'Step 4',
        description: 'RHCE Certification Exam',
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
        question: 'Is RHCSA mandatory for RHCE?',
        answer: 'Yes, RHCSA certification is a prerequisite'
      },
      {
        question: 'What is the exam format?',
        answer: 'The RHCE exam is a performance-based, hands-on test.'
      },
      {
        question: 'What roles can I pursue after RHCE?',
        answer: 'Senior Linux Administrator, DevOps Engineer, and System Architect.'
      }
    ],
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
    banner: '/assets/img/15.jpg',
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
