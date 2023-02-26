# Pokemon APIを利用したポケモン検索サイト

- Web系技術の学習のためにポケモン検索サイトを作成した

## デプロイサンプル

- [デプロイページ - Deno](https://aobaiwaki-pokemondict.deno.dev/)

## ローカル実行手順

- 以下の3ステップでローカルホストにデプロイできます。

```bash
$ git clone
$ cd Pokemon-Dictionary
$ deno run --allow-read --allow-net --watch server.js
```

## 参考

- [Deno入門 \~インストールからデプロイまで\~](https://zenn.dev/iwamasa/articles/a14db17f8ce5ea)
  - Pokemo APIの基本的な利用方法を参考にした。TypeScriptで書かれているので、JavaScriptへの変換に苦労した。(将来的には、TypeScriptも描けるようになりたい)
- [JavascriptのFetch APIを使ってJSONを取得する。 - Qiita](https://qiita.com/tarch710/items/91b8abc124a7efbc7a93)
  - 上述の通り、TypeScriptのコードをコピペするだけでは自分のJavaScriptコードで動かなかった。そのため、APIを叩く方法をこの記事から学んだ。
- [HTMLとJavaScriptの連携 - Qiita](https://qiita.com/Teach/items/4b0104847be9f2960665)
  - そもそもHTMLから入力を渡したり、JSからHTMLを返す方法がわからなかったので参考にした。
- [【初心者向け入門】JavaScriptの基礎 - Qiita](https://qiita.com/ab-boy_ringo/items/23f60e051e3022f2a599)
  - 基本的なJSの書き方はここで学んだ。今回は`document.write()`を用いて関数が正しく呼び出されているかデバッグした。もっと効率的な方法があると思う。