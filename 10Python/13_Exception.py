# =============
# 例外処理
# =============

# 入力受付
print("整数を入力してください。\n>", end="")
inputStr = input()

# 例外処理
try:
    # 例外の発生する可能性のある処理
    inputInt = int(inputStr)
    print(100 / inputInt)
except:
    # 例外が発生したときの処理
    print("エラー発生")

# 例外処理(エラー指定)
try:
    # 例外の発生する可能性のある処理
    inputInt = int(inputStr)
    print(100 / inputInt)
except ValueError:
    # 例外が発生したときの処理
    print("整数を入力して下さい。")
except ZeroDivisionError:
    print("0では割れません。")
except:
    print("想定外のエラーが発生しました。")

# 例外処理(エラー情報取得)
try:
    # 例外の発生する可能性のある処理
    inputInt = int(inputStr)
    print(100 / inputInt)
except Exception as ex:
    print(ex)

# finallyについて
try:
    # 例外の発生する可能性のある処理
    inputInt = int(inputStr)
    print(100 / inputInt)
except Exception as ex:
    print(ex)
finally:
    print("エラーが発生してもしなくても実行します。")
print("プログラムが終了しました。")