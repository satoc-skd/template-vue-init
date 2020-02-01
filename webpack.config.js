// 参照
// https://log.pocka.io/posts/vue-webpack-tutorial/


const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dest'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
        extensions: ['.js', '.vue'],
        alias: {
          // vue-template-compilerに読ませてコンパイルするために必要
          vue$: 'vue/dist/vue.esm.js',
        },
      },

      // https://qiita.com/missyyy/items/90a6558a491abdd322a7
    plugins: [
          new VueLoaderPlugin(),
          new CopyPlugin([{ from: './public' }]),
    ]
};
