// 参照
// https://log.pocka.io/posts/vue-webpack-tutorial/


const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dest'),
        filename: '[name].bundle.js',
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
          // ランタイム限定ビルドに切り替える
          vue$: 'vue/dist/vue.runtime.esm.js',
        },
      },

      // https://qiita.com/missyyy/items/90a6558a491abdd322a7
    plugins: [
          new VueLoaderPlugin(),
          new CopyPlugin([{ from: './public' }]),
    ],

    // https://qiita.com/soarflat/items/1b5aa7163c087a91877d
    optimization: {
        splitChunks: {
          // cacheGroups内にバンドルの設定を複数記述できる
          cacheGroups: {
            // 今回はvendorだが、任意の名前で問題ない
            vendor: {
              // node_modules配下のモジュールをバンドル対象とする
              test: /node_modules/,
              name: 'vendor',
              chunks: 'initial',
              enforce: true
            }
          }
        }
      }
    
    };
