const color = {
    primary: '#82c600',
    secondary: '#000',
    grey: '#ccc',
    bg: '#fff',
    bgDark: '#202020',
    fg: '#333',
    fgOnPrimary: '#fff',
    fgOnDark: '#fff',
}

const font = {
    family: {
        title: 'Montserrat, sans-serif',
        body: 'Raleway, sans-serif',
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
}

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
                fg: color.fg
            },
            font: {
                size: font.size.body + font.size.unit,
                family: font.family.body,
                weight: font.weight.regular
            }
        },
        type: {
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
                    weight: font.weight.regular
                },
                color: color.primary,
            },
            p: {
                font: {
                    size: font.size.body + font.size.unit,
                    family: font.family.body,
                    weight: font.weight.regular
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
                breadcrumbs: 0
            },
            responsive: {
                unit: 'px',
                mobile: 720,
            }
        }
    }
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
}