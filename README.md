# 農工大のサークル MCC のホームページ

- `Next.js`で作成、`GitHub Pages`で公開
- 何も知らない部員が見ても、理解できるようにしたい → [記録](https://github.com/tuatmcc/mcc-website/wiki)

## 記事の書き方

- あとで

## 概要

- Next.js で SSG を使って、静的サイトを作成しています。
- マークダウンで記事を書くと、メタデータと HTML に変換されます。
- カスタマイズ性の高い ChakraUI を使って、スタイルを適用しています。
- `main`ブランチに push すると、GitHub Actions でビルドが走り、デプロイされます。

### キーワード

`SSG`, `SPA`, `JAMStack`, `React`, ...

気になったら調べてね。

## 環境（2022.11 現在）

- Node.js: v18.12.1
- Next.js: v13
- TypeScript: v4.9.3

## メンテの仕方

- [ここ](https://github.com/tuatmcc/mcc-website/wiki/development-maintenance)を参照
- 何かあれば Issue に。

## リニューアルにあたって

### 引継ぎではなしたこと

- レンタルサーバーは解約したので、ドメインだけ取り続けている状態
- ~~誰がドメイン管理しているんだろう...？~~ 解決
- リニューアルに際し、GitHub リポジトリは新しくつくる。
- フレームワークは Nuxt ではなく Next を使う。
- 記事の更新は、当面はプロジェクトをクローンしてマークダウンで追加。
- いずれ Micro CMS のようなヘッドレス CMS を導入したいけど、アカウント管理・引継ぎが面倒かな。
- GitHub Actions で CD/CI を実装する。
- develop ブランチで開発・編集、master(main)にマージして自動デプロイ
- `yarn`じゃなくて`npm`だけでパッケージ管理する。
- `ESLint`や`Prettier`でフォーマットを統一する

### 今のところの方針やアイデア（変わる可能性あり）

- **阿部寛のようにはしない**
- css フレームワークは`Chakra UI`を使う
- 3D のために`React Three Fiber`をいれた。
- ある程度形にしてから CD/CI を整える
- svg で作ってアニメーションとか？
- React Three Fiber で背景に 3D とか

## 開発記録

ここに書くとかさむので、移動しました。

[このリポジトリの wiki](https://github.com/tuatmcc/mcc-website/wiki)
