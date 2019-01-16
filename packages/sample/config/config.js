const site = {
        name: 'Ossus',
        tagline: 'Simple customizable documentation sites fast',
        trademark: ( <span> &#x24B8; 2018. CDK Open Source </span>),
            headerLinks: [{
                    route: 'docs',
                    params: {
                        page: 'overview',
                        section: 'getting-started',
                        doc: 'installation'
                    },
                    label: 'Docs'
                },
                {
                    route: 'docs',
                    params: {
                        page: 'api',
                        section: 'intro',
                        doc: 'basics'
                    },
                    label: 'API'
                },
                {
                    href: 'https://github.com',
                    label: 'Github'
                }
            ],
            socialLinks: [{
                route: 'https://github.com/ossus',
                label: 'Github'
            }],
            footerLinks: [{
                    title: 'Docs',
                    links: [{
                            route: 'docs',
                            params: {
                                page: 'overview',
                                section: 'getting-started',
                                doc: 'installation'
                            },
                            label: 'Getting Started'
                        },
                        {
                            route: 'docs',
                            params: {
                                page: 'overview',
                                section: 'getting-started',
                                doc: 'basics'
                            },
                            label: 'Basics'
                        },
                        {
                            route: 'docs',
                            params: {
                                page: 'overview',
                                section: 'getting-started',
                                doc: 'configuration'
                            },
                            label: 'Configuration'
                        }
                    ]
                },
                {
                    title: 'Social',
                    links: [{
                        href: 'https://github.com/cdkOpensource',
                        label: 'Github'
                    }]
                }
            ]
        }

        const theme = {
            color: {
                primary: '#000'
            },
            size: {
                height: {
                    header: 100,
                    headerMobile: 90,
                    breadcrumbs: 50,
                }
            },
            header: {
                sticky: true
            }
        }

        export default {
            site,
            theme
        };