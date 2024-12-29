
export default {
    base: "/docs/",
    // site-level options
    title: "DocBox",
    titleTemplate: "DocBox - :title",
    description: "Aims to bring together all my documentation content.",
    
    themeConfig: {
        nav: [
            { text: 'Get Started', link: '/get-started/' },
            {
                text: 'Documentation List',
                items: [
                    { text: 'FlameJS', link: '/flame-js/' },
                    { text: 'Who I am', link: '/who-i-am/' }
                    ]
            }
        ],
        sidebar: {
            "/flame-js/": [
                {
                    text: 'Guia',
                    items: [
                        { text: 'Introdução', link: '/introduction' },
                        { text: 'Começando', link: '/getting-started' }
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/EuJanderGois"},
            {icon: "instagram", link: "https://www.instagram.com/jander.dev/"}
        ],
        footer: {
            message: 'Released under MIT license.',
            copyright: 'Copyright © 2024 - EuJanderGois'
        },
        lastUpdated: {
            text: 'Last Update',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        }
    }
}