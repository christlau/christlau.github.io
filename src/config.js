module.exports = {
  siteTitle: 'Christian Laurence | Security+ & AWS SAA | Lifelong learner',
  siteDescription:
    'Christian Laurence is a Security and cloud practitioner who loves learning new things.',
  siteKeywords:
    'Christian Laurence, Christlau, security, cloud architect, web developer',
  siteUrl: 'https://christlau.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-8H5EX6D3SV',
  googleVerification: 'ZXHz3JVDNfCMvmcZoWo-568zX9aZAH0ZvRKR9rBvC0M',
  name: 'Christian Laurence',
  location: 'Medan, Indonesia',
  email: 'lauchrisan@gmail.com',
  github: 'https://github.com/christlau',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/christlau/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/laurentianchris/',
    },
    
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chrislaurenc_/',
    },
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Certifications',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#ffb564',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
