# workspaceでのコマンド実行
npm run dev --workspace(-w) app

# 全workspaceでの同一コマンド実行
npm run dev --workspaces

# Storybookについて
現状 npm audit fix --forceしてしまうと、storybookのversionが下がり起動しなくなるため注意



# app と components を紐付ける方法
たぶんこうするんじゃないか

libs/components側で作業を行う
1. webpackでビルドして以下のファイルを吐くようにする
- index.js
- index.d.ts
- index.css 

2. それを npm run compile コマンドとして設定しておく


3. app側からは import "components/dist/index.css" みたいな感じでimportしちゃう
