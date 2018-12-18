---
title: Next Doc
author: Jared Jones
last updated: today
---

You can have multiple documents in a project and paging between them as well as navigation through the table of contents comes for free!

## Default Theme example

You can override anypart of the default theme by including your own theme and passing it into the layout component, certain values in the default theme are dynamically generated from the color and font sections, so by overriding those sections many things may update!

```json
{
    color: {
        primary: "#82c600",
        secondary: "#000",
        grey: "#ccc",
        bg: "#fff",
        bgDark: "#202020",
        fg: "#333",
        fgOnPrimary: "#fff",
        fgOnDark: "#fff",
    },
    font: {
        family: {
            title: "Montserrat, sans-serif",
            body: "Raleway, sans-serif",
            mono: "monospace",
        },
        size: {
            unit: "rem",
            body: .95,
        },
        weight: {
            regular: 400,
            semibold: 500,
            bold: 600
        }
    },
    shadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);",
    code: {
        font: {
            size: ".95rem",
            family: "monospace",
        },
        color: {
            inlineBg: "#efefef",
            blockBg: color.bgDark,
        }
    },
    type: {
        list: {
            padLeft: "20px",
            color: "#333",
            font: {
                size: ".95rem",
                family: "Raleway, sans-serif",
                weight: 400,
            },
        },
        a: {
            font: {
                size: ".95rem",
                family: "Raleway, sans-serif",
                weight: 400
            },
            color: "#82c600",
        },
        p: {
            font: {
                size: ".95rem",
                family: "Raleway, sans-serif",
                weight: 400
            },
            color: "#333",
        },
        heading: {
            one: {
                font: {
                    size: "2.5rem",
                    family: "Montserrat, sans-serif",
                    weight: 600
                },
                color: "#333",
            },
            two: {
                font: {
                    size: "2rem",
                    family: "Montserrat, sans-serif",
                    weight: 600
                },
                color: "#333",
            },
            three: {
                font: {
                    size: "1.5rem",
                    family: "Montserrat, sans-serif",
                    weight: 500
                },
                color: "#333",
            },
            four: {
                font: {
                    size: "1.25rem",
                    family: "Montserrat, sans-serif",
                    weight: 600
                },
                color: "#333",
            }
        }
    },
    size: {
        unit: "px",
        width: {
            page: 1360,
            toc: 260,
            menu: 160
        },
        height: {
            header: 60,
            breadcrumbs: 0
        },
        responsive: {
            unit: "px",
            mobile: 720,
        }
    }
}
```