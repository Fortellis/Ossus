const site = {
    name: 'Next Docs',
    tagline: 'Simple yet customizable documentation sites fast',
    trademark: (<span>&#x24B8; 2018. CDK Open Source</span>),
    headerLinks: [{
            route: '/',
            label: 'Home'
        },
        {
            route: 'docs',
            params: {
                page: 'developer-docs',
                section: 'overview',
                doc: 'about'
            },
            label: 'Docs'
        },
    ],
    socialLinks: [{
        route: 'https://github.com/ossus',
        label: 'Github'
    }],
    footerLinks: [{}]
}

const theme = {
    color: {
        primary: '#82c600',
        secondary: '#000',
        background: '#fff',
        backgroundDark: '#202020',
        shadow: 'rgba(0,0,0,.2)',
        text: {
            title: '#fff',
            heading: '#000',
            body: '#333',
            onPrimary: '#fff'
        }
    },
    font: {
        family: {
            title: 'Montserrat, sans-serif',
            body: 'Raleway, sans-serif'
        },
        size: {
            unit: 'rem',
            body: .95
        },
        weight: {
            regular: 400,
            semibold: 500,
            bold: 600
        }
    },
    size: {
        unit: 'px',
        width: {
            page: 1360,
            toc: 260,
            menu: 160
        },
        height: {
            header: 60,
            breadcrumbs: 45
        },
        responsive: {
            unit: 'px',
            mobile: 720,
        }
    }
}

export default {
    site,
    theme
};