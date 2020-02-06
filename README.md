# template-vue-init
【テンプレート】webpack+vue+vuebootstrapの開発環境

# DEMO

そんなものはない
 
# Features
 
都度webpack.config.jsを書き直すの面倒なのと
予めVueとBootstrapVue等を入れておきたかった。
 
# Requirement
 
* Node.js 8.11.1以上
* npm 8.11.1以上
* vue 2.6.11
* bootstrap 4.4.1
* bootstrapvue 2.3.0
* dayjs 1.8.19

[Visual Studio Code で使う](https://qiita.com/mysticatea/items/860ce3bf0ff387f166ac#visual-studio-code-%E3%81%A7%E4%BD%BF%E3%81%86) より


>Visual Studio Code で、.vue ファイルに ESLint 静的検証を行うには、少し追加の設定が必要です。

>1.VSCode ESLint 拡張機能をインストールする

>2.ユーザー設定を開き、.vueファイルで VSCode ESLint 拡張機能が動作するよう設定する

```settings.json
{
    "eslint.validate": [
        "javascript",
        {"autoFix": true, "language": "vue"}
    ]
}
```

# Installation
 
テキトーに
 
```bash
npm ci
```
 
# Usage
 
```bash
git clone https://github.com/satoc-skd/template-vue-init.git
cd template-vue-init
npm start
```
 
# Note
 
npm buildで生成される vendor.bundle.jsがデカすぎるけど、
削る方法がワカランのでそのまま :-(
 
# Author
 
* SHIKADA Satoshi
* https://twitter.com/satoc_skd
 
# License
 
"template-vue-init" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
