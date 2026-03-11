# URLを解析するためのライブラリ
# ログイン後のリダイレクト先の安全性チェックに使用
from urllib.parse import urlparse

# Flaskの基本機能
from flask import Blueprint, flash, redirect, render_template, request, url_for

# Flask-Loginのログイン関連機能
from flask_login import login_required, login_user, logout_user

# DBとUserモデル
from User import db, User


# Blueprintの作成
# auth という名前で認証関連のルートをまとめる
auth_bp = Blueprint('auth', __name__)


# ユーザー登録
@auth_bp.route('/register', methods=['GET', 'POST'])
def register():

    # POSTならフォームが送信された
    if request.method == 'POST':

        # フォームからユーザー名とパスワードを取得
        username = request.form.get('username')
        password = request.form.get('password')

        # 同じユーザー名が既に存在するか確認
        user = db.session.execute(
            db.select(User).filter_by(username=username)
        ).scalar()

        # 既に存在する場合
        if user:
            # エラーメッセージ表示
            flash('既に登録されているユーザー名です。', 'error')

            # 登録ページへ戻る
            return redirect(url_for('auth.register'))

        # 新しいユーザー作成
        new_user = User(username=username)

        # パスワードをハッシュ化して保存
        new_user.set_password(password)

        # DBへ追加
        db.session.add(new_user)

        # DBに保存
        db.session.commit()

    # GETなら登録画面表示
    return render_template('register.html')


# ログイン
@auth_bp.route('/login', methods=['GET', 'POST'])
def login():

    # POSTならログイン処理
    if request.method == 'POST':

        # usernameをDBから検索
        user = db.session.execute(
            db.select(User).filter_by(
                username=request.form.get('username')
            )
        ).scalar()

        # ユーザーが存在 + パスワード一致
        if user and user.check_password(request.form.get('password')):

            # ログイン処理
            login_user(user)

            # 元のアクセスページ取得
            # login_requiredページへアクセスした場合ここに保存される
            next_page = request.args.get('next')

            # ★オープンリダイレクト対策
            # 外部サイトへ飛ばないように確認
            print(urlparse(next_page))
# 
            if not next_page or urlparse(next_page).netloc != '':
                # 問題があればトップページへ
                next_page = url_for('index')

            # 次のページへ移動
            return redirect(next_page)

    # GETならログイン画面表示
    return render_template('login.html')


# ログアウト
@auth_bp.route('/logout')
@login_required
def logout():

    # ログアウト処理
    logout_user()

    # ログインページへ戻る
    return redirect(url_for('auth.login'))