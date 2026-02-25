# 関数の共通化のコツ
# ステップ1:共通するコードの塊をコピーして新しい関数を作る。
# ステップ2:処理の中で「値」が違う部分を関数の引数にする。
# ステップ3:処理の中で「ロジック（計算式など）」が違う部分をコールバック関数として渡す。

# 共通化練習問題１
def calculate_bronze_price(price):
    discount_rate = 0.05
    discounted_price = price * (1 - discount_rate)
    print(f"ブロンズ会員様：割引後価格は{int(discounted_price)}円です。")
    return int(discounted_price)

def calculate_silver_price(price):
    discount_rate = 0.10
    discounted_price = price * (1 - discount_rate)
    print(f"シルバー会員様：割引後価格は{int(discounted_price)}円です。")
    return int(discounted_price)

def calculate_gold_price(price):
    discount_rate = 0.20
    discounted_price = price * (1 - discount_rate)
    print(f"ゴールド会員様：割引後価格は{int(discounted_price)}円です。")
    return int(discounted_price)

# 実行例
calculate_bronze_price(1000)
calculate_silver_price(1000)
calculate_gold_price(1000)

# 共通関数
def calculate_price(price, rank):
    rates = {
        "bronze": 0.05,
        "silver": 0.10,
        "gold": 0.20
    }
    # ランク名を日本語に変換するための辞書
    rank_names = {"bronze": "ブロンズ", "silver": "シルバー", "gold": "ゴールド"}

    discount_rate = rates.get(rank,0.0)
    display_rank = rank_names.get(rank,"一般")

    discounted_price = price * (1 - discount_rate)
    print(f"{display_rank}会員様：割引後価格は{int(discounted_price)}円です。")
    return int(discounted_price)

# 実行例
calculate_price(1000,"bronze")
calculate_price(1000,"silver")
calculate_price(1000,"gold")

# 共通化練習問題２
from datetime import datetime

def log_info(message):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[INFO] {current_time}: {message}")

def log_warning(message):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[WARNING] {current_time}: {message}")

def log_error(message):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[ERROR] {current_time}: {message}")

# 実行例
log_info("システムを起動しました")
log_warning("メモリ使用率が高くなっています")
log_error("データベース接続に失敗しました")

# 共通関数
def log_message(message, level):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{level}] {current_time}: {message}")

log_message("メモリ使用率が高くなっています","INFO")
log_message("データベース接続に失敗しました","WARNING")
log_message("システムを起動しました","ERROR")