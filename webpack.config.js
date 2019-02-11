module.exports = {
    mode: 'development',
    entry: './source/client.js',
    output: {
        path: '/',
        filename: 'index.js',
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
 }