---
title: Configuration
author: Jared Jones
last updated: today
---

The site is built in such a way that it can be customized and configured without writing any code. The styles, links, and some of the layout is configurable through the `config/config.js` file.

## Site Variables

Certain global variables can be set through the site configuration object:

- Site name
- Site tagline

```js
const site = {
    name: 'Ossus',
    tagline: 'Simple yet customizable documentation sites fast'
}
```

### Header Links

You can define the links that appear in the header nav. If you just want to link to a non-docs page all you have to give is the route. If you want to route to a document you must give the page it belongs to, the section it is in, and the name of the document file.

```js
const headerLinks = [
    { route: '/', label: 'Home' },
    { route: 'about', params: {}, label: 'About' },
    { route: 'docs', params: {
        page: 'developer-docs',
        section: 'overview',
        doc: 'getting-started'
    }, label: 'Docs' },
];
```

### Social Links

In the footer it adds links to your social media which you can define here. It doesn't care what you put so any link and label will work!

### Footer Links

In the footer Next Docs allows you to define link sections so you can display groups of links. you define each section as an object in the footerLinks array and then give the links in that objects links array.

```js
const footerLinks = [{
        title: 'DEVELOPERS',
        links: [{
                route: '',
                label: 'Getting Started'
            },
            {
                route: '',
                label: 'API Reference'
            },
            {
                route: '',
                label: 'Vehicle Sales APIs'
            },
            {
                route: '',
                label: 'Vehicle Service APIs'
            }
        ]
    },
    {
        title: 'DEVELOPERS 2',
        links: [{
                route: '',
                label: 'Getting Started'
            },
            {
                route: '',
                label: 'API Reference'
            }
        ]
    }
]
```

## Theming

Next Docs uses a css-in-js solution called Emotion.js to theme the site. This theme injects your configuration values into the stylesheets allowing you to personalize easily. Change any of the values in the theme and the site will automatically update.

When using the `Layout` component from `ossus-components` you are given a default theme that can be overwritten by adding json to the theme variable in `config.js`. Here is the definition of the default theme for Ossus:

```js
const theme = {
    color: { // All colors are defined here
        primary: '#82c600',
        secondary: '#000',
        grey: '#ccc',
        bg: '#fff',
        bgDark: '#202020',
        fg: '#333',
        fgOnPrimary: '#fff',
        fgOnDark: '#fff',
    },
    font: { // All font style values are defined here
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
    },
    size: { // all size values are defined here
        unit: 'px', // Allows you to use any css unit px, em, rem for your size definitions
         width: {
            page: 1360,
            toc: 260,
            menu: 160
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
    },
    // Values below are dynamically based on values from the previous sections automatically,
    // but can be overwritten individually as well
    header: {
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
    type: {
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
}
```
