module.exports = {
    // 1
    entry: {
        app: ['./src/index.js',
            './src/js/index.js',
            './src/js/game.js',
            './src/js/style.js'
        ]
    },
    // 2
    output: {
        path: '/dist',
        filename: 'bundle.js'
    },

    // 3
    devServer: {
        static: './dist'
    }
};
