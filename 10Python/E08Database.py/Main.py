# =============
# 自作ライブラリの利用とCUIアプリケーション
# =============
import Logic
import DatabaseManager as DM

# DBの準備処理(インスタンス化)
db = DM.DatabaseManager("./Person.db")

print("DBシステムを開始しました。")
# 無限ループ
while True:
    # コマンド受付
    print("[1]追加[2]確認[q]終了")
    cmd = input()
    if cmd == "1":# データの追加
        print("データを追加します。")
        Logic.add(db)
    elif cmd == "2":# データの確認
        print("データを確認します。")
        Logic.getAll(db)
    elif cmd == "q" or cmd == "Q":# システムの終了
        break

# DBの終了処理
db.disConnect()
print("DBシステムが終了しました。")