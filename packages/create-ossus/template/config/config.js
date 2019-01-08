const site = {
    name: 'Ossus',
    tagline: 'Simple customizable documentation sites fast',
    trademark: (<span>&#x24B8; 2018. CDK Open Source</span>),
    headerLinks: [{
            route: '/',
            label: 'Home'
        },
        {
            route: 'docs',
            params: {
                page: 'example',
                section: 'overview',
                doc: 'getting-started'
            },
            label: 'Docs'
        },
    ],
    socialLinks: [{
        route: 'https://github.com/ossus',
        label: 'Github'
    }],
    footerLinks: [{
        title: 'Example',
        links: [{
            href: 'https://github.com/ossus',
            label: 'Ossus Github'
        }]
    }]
}

const theme = {};

export default {
    site,
    theme
};