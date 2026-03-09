from app import app

if __name__ == "__main__":
    # WEBサーバー実行
    app.run(host=app.config['HOST'],port=app.config['PORT'])