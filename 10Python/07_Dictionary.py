# =============
# 辞書型
# =============

print("-- 辞書型 --")

dic01 = {1:"abc",3:"def"}
print(dic01[1])
print(dic01[3])

dic02 = {True:"t",False:"f",30:"abc","abc":30}
print(dic02)
print(type(dic02))
print(dic02[True])
print(dic02[False])
print(dic02[30])
print(dic02["abc"])

# 要素の編集(既存のKeyの値を編集)
dic02["abc"] = 55
print(dic02)

# 要素の追加(新しいKeyと値の追加)
dic02["aaaa"] = "bcd"
print(dic02)

# 要素の削除
print(dic02.pop(30))
print(dic02)

# Keyが存在しないときのエラー
# KeyError: 'bbbbbb'
# dic02["bbbbbb"]

# Keyが存在しないときのエラー対策1
print("bbbbbbbb" in dic02)
print("aaaa" in dic02)

# Keyが存在しないときのエラー対策2
print(dic02.get("bbbbbbbbb")) # keyが存在しない場合Noneになる。