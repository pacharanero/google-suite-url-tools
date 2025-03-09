module.exports = {
    theme: {
        extend: {},
    },
    content: [
        'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js',
    ],
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
}