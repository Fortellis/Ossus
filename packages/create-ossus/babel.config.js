module.exports = {
    presets: [
        ['@babel/env', { targets: { node: true } }],
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread'
    ]
}