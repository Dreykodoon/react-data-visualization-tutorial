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
            },
            {
                test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
                use: ['dsv-loader'] // or dsv-loader?delimiter=,
            }
        ]
    }
 }