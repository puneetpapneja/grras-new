import { link } from "d3";

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
  WINTER_INTERNSHIP_TRANING: 'winter-internship',
}

export const MENUES = [
  { label: "About", link: "#" },
  {
    label: "Training & Certifications",
    children: [
      { label: "Kubernetes",
        children: [
          { label: "Certified Kubernetes Administrator (CKA)", link: SLUGS.CKA },
        ]
       },
      { label: "Kubernetes",
        children: [
          { label: "Certified Kubernetes Administrator (CKA)", link: SLUGS.CKA },
        ]
       },
      { label: "Kubernetes",
        children: [
          { label: "Certified Kubernetes Administrator (CKA)", link: SLUGS.CKA },
        ]
       },
       {
        label: "DevOps",
        link:""
      },
      {
        label: "Red Hat",
        children: [
          { label: "RHCSA (Red Hat Certified System Administrator)", link: SLUGS.RHCSA },
          { label: "RHCE (Red Hat Certified Engineer)", link: SLUGS.RHCE },
          { label: "DO188 (Red Hat OpenShift Development I)", link: SLUGS.DO188 },
          { label: "DO280 (Red Hat OpenShift Administration I)", link: SLUGS.DO280 },
          
        ],
      },
      {
        label: "",
        children: [
          { label: "DO380 (Red Hat OpenShift Administration II)", link: SLUGS.DO380 },
          { label: "RH415 (Red Hat Security: Linux in Physical, Virtual, and Cloud)", link: SLUGS.RH415 },
          { label: "RH358 (Red Hat Services Management and Automation)", link: SLUGS.RH358 },
          { label: "DO316 (Red Hat Virtualization with OpenShift)", link: SLUGS.REDHAT_OPENSHIFT },
          { label: "OpenShift AI", link: SLUGS.OPENSHIFT_AI },
          
        ],
      },
      
    ],
  },
];