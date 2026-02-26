# =============
# コマンドライン引数
# =============
import sys

# コマンドライン引数の取得(配列)
args = sys.argv

print(args)

if '-r' in args:
    print("rオプションを認識しました。")