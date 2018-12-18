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

const color = {};
const font = {};

const theme = {
    color,
    font,
};

export default {
    site,
    theme
};