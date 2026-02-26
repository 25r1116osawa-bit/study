# =============
# タイマー
# =============

# 現在時刻の取得
import datetime
import threading
import time

date01 = datetime.datetime.now()
print(date01)

# フォーマット設定
timeStr01 = date01.strftime("%Y/%m/%d %H:%M:%S")
print(timeStr01)

# 遅延実行(コールバック関数)
def duration():
    print("遅延実行されました。")

# 遅延実行の設定
thread01 = threading.Timer(5,duration)

# 遅延実行開始
thread01.start()

#======
# 定期実行
#======
# 定期実行終了フラグ
stopFlag = False

# 定期実行(コールバック関数)
def tick():
    # 現在時刻取得
    date02 = datetime.datetime.now()
    # フォーマット設定
    timeStr02 = date02.strftime("%Y/%m/%d %H:%M:%S")
    print(timeStr02)

    # 定期実行関数の再帰登録
    if not stopFlag:
        thread02 = threading.Timer(1,tick)
        thread02.start()

# 定期実行開始処理(初回)
thread03 = threading.Timer(1,tick)
thread03.start()

# 10秒間強制的にプログラムを一時停止
time.sleep(10)

# 定期実行終了フラグ
stopFlag = True