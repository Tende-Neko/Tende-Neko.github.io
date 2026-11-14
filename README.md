# アプリの案内所 — GitHub Pages 公開版（2026-11-14）

「発見の手帳」を含む、今後複数のアプリをまとめられる公式サイトです。Mac・iPhoneのブラウザで閲覧できる静的HTML/CSS/JSで構成されています。

## 1. メールアドレスの設定【まずここ】

**編集するファイルは1つだけです。**

`assets/contact-config.js`

中の次の行を探してください。

```js
supportEmail: "MAIL_ADDRESS_HERE"
```

`MAIL_ADDRESS_HERE` の部分を、実際に受信できるお問い合わせ用メールアドレスに置き換えます。

```js
supportEmail: "your-real-email@example.com"
```

`your-real-email@example.com` は例です。必ずご自身のメールアドレスに置き換えてください。MacではVisual Studio Codeなどのテキストエディタで編集できます。保存後、`apps/hakkenmemo/support/index.html` をブラウザで開き、「メールで問い合わせる」ボタンとメールアドレスが表示されるか確認してください。

メールアドレスは公開ページに表示されます。プライベートなアドレスではなく、問い合わせ専用のアドレスを使うこともできます。

**メール未設定のままApp StoreのサポートURLとして登録しないでください。** 未設定の場合は設定を促す案内が表示されます。

## 2. GitHub Pagesで公開

1. GitHubで `ユーザー名.github.io` という名前の **Public** リポジトリを作成（ユーザー名はGitHubのアカウント名）。
2. このフォルダの中身（`index.html`、`assets/`、`apps/`、`.nojekyll` など）をリポジトリの**ルート**にアップロードします。ZIPファイルをそのままアップロードするのではありません。
3. リポジトリの **Settings → Pages → Build and deployment** を開きます。
4. **Source: Deploy from a branch**、**Branch: main / (root)** を選び、保存します。
5. サイトの公開URLが表示されたら、MacとiPhoneでページと問い合わせリンクを確認します。

### 公開URL（ユーザー名が `USERNAME` の場合）

- トップページ: `https://USERNAME.github.io/`
- 発見の手帳: `https://USERNAME.github.io/apps/hakkenmemo/`
- プライバシーポリシー: `https://USERNAME.github.io/apps/hakkenmemo/privacy/`
- サポート: `https://USERNAME.github.io/apps/hakkenmemo/support/`

`USERNAME` はご自身のGitHubユーザー名です。別の名前のリポジトリ（例: `my-apps`）を作った場合は、通常 `https://USERNAME.github.io/my-apps/` という形式になります。ページ内のリンクは相対URLなので、この構成でも対応します。

## 3. App Store Connectで登録

- **アプリのプライバシー → プライバシーポリシー**: 公開した `.../apps/hakkenmemo/privacy/` のURLを登録。
- **iOSアプリ → 1.0 → サポートURL**: 公開した `.../apps/hakkenmemo/support/` のURLを登録。

ブラウザのシークレットウィンドウでも、ログイン不要で両方のページが開けるか確認してください。

## 4. 公開前の確認事項

- サポートメールを設定し、実際にメールを受信できるか確認する。
- プライバシーポリシーの内容を、**提出する最終版iPhoneアプリ**の動作（通信・SDK・データ保存・バックアップなど）と照合する。これは法務レビュー済みの文書ではありません。
- サイト名「アプリの案内所」は仮称。将来ブランド名が決まれば編集可能。
- アプリ詳細は現在「公開準備中」。App Store公開後に本物のApp Store URLを追加する（架空のURLを登録しない）。
- サイトは解析タグ・問い合わせ送信フォームを設けていません。メールボタンは利用者のメールアプリを開く仕組みです。

## 5. 今後ほかのアプリを追加する場合

新アプリごとに `apps/新しいアプリ名/` を作り、紹介・プライバシー・サポートのページを設置してください。共通トップページからリンクを張れます。必要に応じて各アプリ固有のメールアドレスを使う設計へ拡張できます。

## ファイル構成

```
index.html
apps/hakkenmemo/index.html
apps/hakkenmemo/privacy/index.html
apps/hakkenmemo/support/index.html
assets/style.css
assets/favicon.svg
assets/hakkenmemo-icon.png
assets/contact-config.js    ← お問い合わせ先はここに入力
assets/contact-page.js      ← 通常は編集不要
.nojekyll
README.md
```
