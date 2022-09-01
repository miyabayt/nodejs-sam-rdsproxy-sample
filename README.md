# nodejs-sam-dynamodb-sample

## Dockerコンテナの起動

```bash
$ docker compose up -d
$ # mysqlが起動します。
```

## アプリケーションの起動

初回のみ npm install を実行してください。
```bash
$ npm install
$ npm install -g cross-env
$ npm install -g node-dev
$ npm install -g mocha
$ npm run dev
```

## テストの実行

```bash
$ # ローカルで実行する
$ npm run test:local
$
$ # BrowserStackで実行する
$ npm run test:bs
```
