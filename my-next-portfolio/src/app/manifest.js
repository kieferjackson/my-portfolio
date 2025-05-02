export default function manifest() {
    return ({
        name: 'Kiefer Jackson\'s Portfolio',
        short_name: 'My Portfolio',
        description: 'Notable projects, skills, and information about Kiefer Jackson',
        start_url: '/',
        display: 'standalone',
        background_color: '#181818',
        theme_color: '#F6FF00',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            }
        ]
    });
}
