# 「アプリの案内所」サイト — GitHub Pages 公開用

「発見の手帳」を掲載した、複数アプリ対応の静的Webサイトです。

## ファイル構成

- `index.html` — 共通トップページ（アプリ一覧）
- `apps/hakkenmemo/index.html` — 発見の手帳の紹介
- `apps/hakkenmemo/privacy/index.html` — プライバシーポリシー
- `apps/hakkenmemo/support/index.html` — よくある質問・サポート
- `assets/style.css` — サイト全体のデザイン
- `assets/hakkenmemo-icon.png` — Xcodeプロジェクトから取得したアプリアイコン
- `.nojekyll` — GitHub PagesのJekyll処理を無効化

## 必ず公開前に修正すること

1. **問い合わせ用メールアドレス**：`apps/hakkenmemo/support/index.html` 内の `REPLACE_WITH_SUPPORT_EMAIL` を、実際に受信可能なメールアドレスに置き換える。近くにある「公開前の設定が必要です...」の警告文も削除する。必要ならメールアドレスを `mailto:` リンクにする。**この対応がないままApp StoreのSupport URLとして申請しないでください。**
2. **サイト名**：「アプリの案内所」は仮の名前です。希望するブランド名が決まったらHTML全4ページのサイト名と `<title>` を変更する。
3. **公開準備中の表記**：App Store公開が決まるまで「公開準備中」のままにする。公開後はアプリ紹介ページにApp Storeの本物のURLを追加する（URLを推測しない）。
4. **プライバシーポリシー**：`apps/hakkenmemo/privacy/index.html` に書かれている内容と、**実際に申請するアプリの最新版**の機能（通信・SDK・データ保存等）が一致することを確認する。アプリ内表示とも文面をそろえる。
5. **サポートFAQ**：アプリの正式リリース前に、表示内容と画面操作が一致することを実機で確認する。

## GitHub Pagesでの公開（GitHubアカウントが必要）

### 推奨：共通の開発者サイトとして使用

1. GitHubで新しいPublicリポジトリ `USERNAME.github.io` を作成（`USERNAME` は**自分のGitHubユーザー名**に置き換える）。
2. このフォルダの**中身**（`index.html` と `apps`、`assets`、`.nojekyll` など）をリポジトリの最上位にアップロードする。ZIPファイルそのものをアップロードするのではない点に注意。
3. リポジトリの **Settings → Pages → Build and deployment** へ進む。
4. **Source: Deploy from a branch**、**Branch: main / (root)** を選択して保存する。
5. 公開後、ブラウザで次のURLを開いて表示とリンクを確認する。

   - サイトトップ：`https://USERNAME.github.io/`
   - 発見の手帳：`https://USERNAME.github.io/apps/hakkenmemo/`
   - プライバシー：`https://USERNAME.github.io/apps/hakkenmemo/privacy/`
   - サポート：`https://USERNAME.github.io/apps/hakkenmemo/support/`

6. App Store ConnectにはプライバシーとサポートのURLを**それぞれ**登録する。

一般リポジトリ名が `my-apps-site` などの場合は、URLが `https://USERNAME.github.io/my-apps-site/` となります。内部リンクは相対URLのため、その構成でも動きます。

**GitHubのWeb UIでアップロードする場合：** `Add file` → `Upload files`。フォルダ構造を保持して配置してください。`.nojekyll` のような隠しファイルがアップロードされているかも確認してください。

## 別アプリのページを増やす場合

1. `apps/` の下に新しいアプリのフォルダを作る（例：`apps/newapp/`）。
2. その下に `index.html` と `privacy/index.html`、`support/index.html` を追加する。
3. `index.html` トップページに新しいアプリカードを追加する。
4. 各アプリのポリシーとサポートの内容は、それぞれの実際の仕様に合わせる。

## ローカル確認

`index.html` をMacのブラウザで開いて基本的な表示を確認できます。GitHub Pages公開後は、すべてのページが正しく表示されるか、スマートフォンとPCの両方で確認してください。外部のWebフォントが読み込めなくてもシステムフォントへフォールバックします。

## 注意事項

- このサイトは静的HTML/CSSだけで構成されています。フォーム送信・外部解析は設置していません。
- サポートメールの記載とプライバシーポリシーの正確性は公開前に必ず確認してください。
- Github PagesでWebページを公開することと、App Store ConnectにURLを登録することは別作業です。
