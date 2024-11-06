export default () => ({
    documentation: {
        config: {
            servers: [
                { url: 'http://localhost:1337/api', description: 'Development server' },
                { url: 'https://content.bupin.id/api', description: 'Production server' },
            ],
        }
    }
});
