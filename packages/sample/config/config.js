const site = {
  name: "Ossus",
  tagline: "Simple customizable documentation sites fast",
  trademark: <span> &#x24B8; 2018. CDK Open Source </span>,
  headerLinks: [
    {
      route: "docs",
      params: {
        page: "overview",
        section: "getting-started",
        doc: "installation"
      },
      label: "Docs"
    },
    {
      route: "docs",
      params: {
        page: "api",
        section: "intro",
        doc: "basics"
      },
      label: "API"
    },
    {
      href: "https://github.com",
      label: "Github"
    }
  ],
  socialLinks: [
    {
      route: "https://github.com/ossus",
      label: "Github"
    }
  ],
  footerLinks: [
    {
      title: "Docs",
      links: [
        {
          route: "docs",
          params: {
            page: "overview",
            section: "getting-started",
            doc: "installation"
          },
          label: "Getting Started"
        },
        {
          route: "docs",
          params: {
            page: "overview",
            section: "getting-started",
            doc: "basics"
          },
          label: "Basics"
        },
        {
          route: "docs",
          params: {
            page: "overview",
            section: "getting-started",
            doc: "configuration"
          },
          label: "Configuration"
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          href: "https://github.com/cdkOpensource",
          label: "Github"
        }
      ]
    }
  ]
};

const theme = {
  color: {
    primary: '#000',
    fg: 'rgba(0,0,0,.87)'
  },
  font: {
    family: {
      title: 'Montserrat, sans-serif',
      body: 'Raleway, sans-serif',
    }
  },
  size: {
    unit: 'px',
    width: {
      page: 1200,
      menu: 180
    },
    height: {
      breadcrumbs: 50,
    }
  },
  breadcrumbs: {
    spacing: '.25em',
    color: {
      fg: 'rgba(0,0,0, 0.54)',
    },
    font: {
      family: 'Montserrat, sans-serif',
      weight: 600,
      size: '.9rem'
    }
  },
  header: {
    sticky: false
  },
  menu: {
    divider: false,
    borderRadius: '4px',
    color: {
      fg: 'rgba(0,0,0,.54)',
      bg: 'rgb(243, 243, 243)'
    },
    font: {
      size: '.8rem',
    },
    space: {
      padding: '1em',
      tab: 10
    }
  },
  toc: {
    title: {
      color: {
        fg: 'rgba(0,0,0,.87)',
      },
      font: {
        weight: 600,
        size: '16px'
      },
      space: {
        padding: '0em 0em .6em 0em'
      }
    },
    item: {
      color: {
        fg: 'rgba(0,0,0,.54)',
      },
      font: {
        size: '14px'
      }
    }
  },
  type: {
    table: {
      cell: {
        space: {
          padding: '1em'
        }
      },
      head: {
        font: {
          weight: 600
        }
      }
    },
    frontmatter: {
      color: 'rgba(0,0,0,.54)',
      borderColor: 'transparent',
      font: {
        size: '12px',

      }
    },
    p: {
      color: 'rgba(0,0,0,.54)',
      font: {
        weight: '500',
        size: '14px',
        family: 'Raleway, sans-serif',
        lineHeight: '24px'
      }
    }
  }
};

export default {
  site,
  theme
};
