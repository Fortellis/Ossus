const color = {
  primary: '#82c600',
  secondary: '#000',
  grey: '#ccc',
  bg: '#fff',
  bgDark: '#202020',
  fg: '#333',
  fgOnPrimary: '#fff',
  fgOnDark: '#fff',
};

const font = {
  family: {
    title: 'sans-serif',
    body: 'sans-serif',
    mono: 'monospace',
  },
  size: {
    unit: 'rem',
    body: .95,
  },
  weight: {
    regular: 400,
    semibold: 500,
    bold: 600
  }
};

function generateDefaultTheme(color, font) {
  return {
    color,
    font,
    shadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);',
    header: {
      sticky: true,
      color: color.primary,
      title: {
        color: color.fgOnPrimary,
        font: {
          family: font.family.title,
          weight: font.weight.bold,
          size: 1.5 + font.size.unit,
          sizeMobile: 1.2 + font.size.unit,
        }
      },
      link: {
        color: color.fgOnPrimary,
        font: {
          family: font.family.body,
          weight: font.weight.regular,
          size: .9 + font.size.unit,
        }
      }
    },
    code: {
      font: {
        size: font.size.body + font.size.unit,
        family: font.family.mono,
      },
      color: {
        inlineBg: '#efefef',
        blockBg: color.bgDark,
      }
    },
    breadcrumbs: {
      spacing: '10px',
      color: {
        bg: color.bg,
        fg: color.fg,
        border: color.grey
      },
      font: {
        size: font.size.body + font.size.unit,
        family: font.family.body,
        weight: font.weight.regular
      },
      divider: {
        height: font.size.body + font.size.unit
      }
    },
    toc: {
      color: {
        bg: color.bg,
      },
      title: {
        space: {
          margin: '0',
          padding: '.25em 1em .25em 0em',
        },
        color: {
          fg: color.fg,
          bg: color.bg
        },
        font: {
          size: '1rem',
          family: font.family.body,
          weight: font.weight.regular
        }
      },
      item: {
        space: {
          margin: '.25em 0em',
          padding: '.75em 1em',
        },
        color: {
          bg: color.bg,
          fg: color.fg,
          fgHover: color.primary,
          fgActive: color.fgOnPrimary,
          fgActiveHover: color.fgOnPrimary,
          bgActive: color.primary
        },
        font: {
          size: font.size.body + font.size.unit,
          family: font.family.body,
          weight: font.weight.regular
        }
      }
    },
    menu: {
      borderRadius: '0px',
      space: {
        padding: '0px 0px 0px 12px',
        tab: 15
      },
      divider: {
        width: '2px'
      },
      color: {
        bg: color.bg,
        fg: color.fg,
        fgHover: color.primary,
        fgActive: color.primary,
        divider: color.fg
      },
      font: {
        size: font.size.body + font.size.unit,
        family: font.family.body,
        weight: font.weight.regular
      }
    },
    button: {
      borderRadius: '4px',
      borderWidth: '1.5px',
      color: {
        bg: color.bg,
        fg: color.primary,
        border: color.primary,
        bgHover: color.primary,
        fgHover: color.fgOnPrimary,
        borderHover: color.primary,
      },
      font: {
        size: font.size.body + font.size.unit,
        family: font.family.body,
        weight: font.weight.regular
      }
    },
    paging: {
      borderRadius: '4px',
      borderWidth: '1.5px',
      color: {
        bg: color.bg,
        fg: color.primary,
        border: color.grey,
        bgHover: color.primary,
        fgHover: color.fgOnPrimary,
        borderHover: color.primary,
      },
      font: {
        size: font.size.body + font.size.unit,
        family: font.family.body,
        weight: font.weight.regular
      }
    },
    type: {
      table: {
        borderRadius: '4px',
        color: {
          fg: color.fg,
          bg: color.bg,
          border: color.grey
        },
        font: {
          family: font.family.body,
          size: font.size.body + font.size.unit,
          weight: font.weight.regular,
        },
        space: {
          margin: '2em 0em',
          padding: '0em',
        },
        head: {
          color: {
            fg: color.fg,
          },
          font: {
            family: font.family.body,
            size: font.size.body + font.size.unit,
            weight: font.weight.regular,
          },
          border: false
        },
        cell: {
          space: {
            padding: '.5em'
          },
          border: {
            style: 'solid',
            width: '0px 0px 1px 0px'
          },
        }
      },
      frontmatter: {
        color: color.fg,
        borderColor: color.grey,
        font: {
          size: font.size.body + font.size.unit,
          family: font.family.body,
          weight: font.weight.regular
        }
      },
      list: {
        padLeft: '20px',
        color: color.fg,
        font: {
          size: font.size.body + font.size.unit,
          family: font.family.body,
          weight: font.weight.regular,
        },
      },
      a: {
        font: {
          size: font.size.body + font.size.unit,
          family: font.family.body,
          weight: font.weight.regular,
          lineHeight: '1.5'
        },
        color: color.primary,
      },
      p: {
        font: {
          size: font.size.body + font.size.unit,
          family: font.family.body,
          weight: font.weight.regular,
          lineHeight: '1.5',
          letterSpacing: '0'
        },
        color: color.fg,
      },
      heading: {
        one: {
          font: {
            size: 2 + font.size.unit,
            family: font.family.title,
            weight: font.weight.bold
          },
          color: color.fg,
        },
        two: {
          font: {
            size: 1.75 + font.size.unit,
            family: font.family.title,
            weight: font.weight.bold
          },
          color: color.fg,
        },
        three: {
          font: {
            size: 1.25 + font.size.unit,
            family: font.family.title,
            weight: font.weight.semibold
          },
          color: color.fg,
        },
        four: {
          font: {
            size: 1.1 + font.size.unit,
            family: font.family.title,
            weight: font.weight.bold
          },
          color: color.fg,
        }
      }
    },
    size: {
      unit: 'px',
      radius: '4',
      width: {
        page: 1360,
        toc: 260,
        menu: 160,
        blogSidebar: 250,
        blog: 900,
      },
      height: {
        header: 60,
        headerMobile: 90,
        breadcrumbs: 60
      },
      responsive: {
        unit: 'px',
        mobile: 720,
      }
    }
  };
}

function isObj(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

// Deep merge of the default and the given theme
function mergeThemes(def, theme) {
  let out = { ...def };
  // If both are objects
  if (isObj(def) && isObj(theme)) {
    Object.keys(theme).forEach(k => {
      const val = theme[k];
      if (isObj(val)) {
        const defObj = def[k] || {};
        out[k] = mergeThemes(defObj, val);
      } else {
        out[k] = val;
      }
    });
  }
  return out;
}

export {
  generateDefaultTheme,
  mergeThemes,
  color,
  font
};