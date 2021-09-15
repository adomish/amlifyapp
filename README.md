# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## memo
GraphQL endpoint: https://kpxrsnar7bczbdptpozsok6sy4.appsync-api.us-east-2.amazonaws.com/graphql
GraphQL API KEY: da2-gu7qmwqmg5hj5nzvcblhpi2jbi

# 2021/7/30
## エラー
1. Cannot read property 'getState' of null

default functionないでレフを使わない

2. but got: object.

defaultfunctionないで使う

### とりあえずたくさん書いて理解する

# 2021/8/1
## スクロールで物体を横回転させる
```
# positionが軸を一つでも指定しないと動かない
<PerspectiveCamera makeDefault position={[0, 0, 10]} />
```
1. react-springを学ぶ
2. 縦にスクロールすると横にスライドするanimation
# 2021/8/4
1. schema.Graphqlを更新
2. backendを更新
3. Graphqlでデータの更新や取得のテスト
4. 小口金の処理 
# 2021/8/17
1. inputの続き
2. 処理する前にjsonでデータの確認
3. テスト
4. 見た目を整える(軽く)
# 2021/8/18
1. 作ったリストをhtmlのforで出力
# 2021/8/25
* 小口金のformdataの作成
    * coinをkeyにしたobjectの作成(valueとkeyが一致するかを確認)
        * mapでそれぞれのlistを作成
          * onchangeしたkeyとvalueを取得する
              * filterを使ってkeyとvalueを取得
# 2021/8/26
* filterで作った単体のobjectをlistにする
    * fakelistに単体の値を差し込む
# 2021/8/31
* fakelistを正しい順番に並び替える
    * fakelistにdefaultの値を設定する
### 発見
* objectはindex番号を振ると順番に表示されるが、何もないとバラバラになる
# 2021/9/3
### 発見
* objectの中にobjectを入れるとsetstateできない(何か方法はありそう)
* valueの中に何か入れると動かせなくなるから初期値の設定はdefaultvalueを使う
### やること
1. amplifybackendの更新
    * このサイトで更新https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/module-four/
        * 送信元のデータの形式をチェック
2. 登録後のリストの表示 
3. 全てをmapに集約
4. validationの実装
    * マイナスの場合は同時にプラスが存在しないようにする
# 2021/9/10
ページを更新しないとboxsが更新されないので、boxがundifindeの時
今日の日付を仮で入れる.
undifindeじゃない場合にそのまま出力する。