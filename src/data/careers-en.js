const careers = {
  bigImage: {
    title: 'Be Part of Our Team!',
    description: ''
  },
  recruitment: {
    title: "Our Recruitment Process",
  },
  join: {
    title: "Join Us!",
    emailLabel: "Email",
    positionLabel: "Position",
    whyLabel: "Why do you want to work with us?",
    reminder: "Make sure to share a link to your CV, Linkedin, Github or whatever shows your work",
    submitLabel: "Apply Now",
    noFieldError: "This field is required",
    emailError: "Please enter a valid email",
    successTitle: "Message sent",
    successBody: "We'll be in touch with you very soon",
    errorTitle: "Oh no!",
    errorBody: "Something went wrong. Try to email us directly: recruitment@sancrisoft.com",
  },
  benefits: {
    title: "Benefits",
    salary: {
      title: "Competitive Salary",
      description: "Great salary according to experience",
    },
    vacations: {
      title: "Vacations",
      description: "15 days of paid vacations",
    },
    remote: {
      title: "Remote Work",
      description: "Work from home or from your favorite coffee shop when needed",
    },
    environment: {
      title: "Work Environment",
      description: "Great environment just like a family",
    },
    bonus: {
      title: "Bonuses",
      description: "Bonuses for outstanding performes",
    },
    snack: {
      title: "Snacks & Beers",
      description: "Free coffee, snacks, healthy food and beers",
    },
    happy: {
      title: "Happy Hours",
      description: "Social events to celebrate and integrate as a team",
    },
    workstation: {
      title: "Workstation",
      description: "A dream workstation to keep you comfortable"
    },
    support: {
      title: "Team Support",
      description: "Collaborative environment to growht professionally"
    }
  },
  recruitmentProcess: {
    application: {
      title: "Application",
      description: "Fill the form below of write us an email saying why do you want to work with us",
    },
    assigment: {
      title: "Assignment",
      description: "We'll send you a little task so we can review your skills and match with our needs",
    },
    interview: {
      title: "Interview",
      description: "Once assignment is passed we'll set a time for a interview to know you better",
    },
    offer: {
      title: "Offer",
      description: "If all looks good we'll make a formal offer to you to join our team",
    },
  },
  openPositions: {
    title: "Open Positions",
    positionDescriptionTitle: "Position Description",
    technicalSkillsTitle: "Technical Skills",
    responsabilitiesTitle: "Responsabilities",
    positions: [
      {
        friendlyId: 'react-developer',
        title: "React Semi Senior Developer",
        mode: "Full Time",
        moreLink: 'View More',
        positionDescription: "<p>We’re looking for semi senior developers to join our team. You will work on front-end and back-end tasks to build top-notch products. We look for talented people who want to solve real life problems with good attitude and striving for the quality of their work.</p>",
        technicalSkills: "<p>You must be proficient on most of these areas or technologies:</p><ul><li>Node.js and Yarn/NPM</li><li>Knowledge on ES6</li><li>ReactJS, Redux and Webpack</li><li>React Native, Sagas, React Navigation</li><li>Solid knowledge on HTML5 and CSS3 to create responsive interfaces for web</li><li>Styled-components (desirable)</li><li>Git version control</li><li>Knowledge on REST services and GraphQL (desirable)</li><li>Relational databases and NoSQL</li><li>General understanding of UI/UX design principles and best practices</li><li>Be able to read and write in english. Verbal communication skills are optional but desirable</li></ul>",
        responsabilities: "<ul><li>Help to create elegant, efficient and maintainable web applications</li><li>Engage in development of new projects and extending existing ones</li><li>Collaborate with other team members and stakeholders</li><li>Estimate projects together with other coworkers</li></ul>",
        extraTitle: "And the most important!",
        extraContent: "<ul><li>Goodwill to create great products with high quality</li><li>Passionate in web development, takes ownership and pride in their job</li><li>Self-taught and highly motivated</li><li>Be willing to help your teammates, share your knowledge with them, and learn from them</li><li>Proactive and problem solver</li><li>Always open to give and receive feedback</li></ul>",
      },
      {
        friendlyId: 'manager',
        title: 'Office Manager',
        mode: 'Part time',
        moreLink: 'View More',
        positionDescription: '<p>We’re looking for an Office Manager able to do operative tasks for Sancrisoft and manage the human resources of our team.</p>',
        technicalSkills: '<p>You must have knowledge on these areas:</p><ul><li>Administration</li><li>Accounting</li></ul>',
        responsabilities: '<ul><li>Payroll payments</li><li>Billing</li><li>Make payments to suppliers</li><li>Bank reconciliation</li><li>Paper work</li><li>Tax payments</li><li>Organize monthly happy hours and birthday celebrations</li></ul>',
        extraTitle: 'And the most important!',
        extraContent: '<ul><li>Hight proficiency on writing and verbal communications</li><li>Creative</li><li>Proactive</li><li>Always open to give and receive feedback</li></ul>',
      },
    ],
  },
};

export default careers;
