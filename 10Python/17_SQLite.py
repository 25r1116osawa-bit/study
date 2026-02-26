# =========================
# SQLite データベース操作
# =========================
import sqlite3

DB_PATH = "InputOutput/Person.db"

# -------------------------
# 接続（with を使うと自動で close される）
# -------------------------
with sqlite3.connect(DB_PATH) as con:
    cursor = con.cursor()

    # -------------------------
    # レコード挿入
    # -------------------------
    insert_sql = """
        INSERT INTO person (id, name, gender, age)
        VALUES (?, ?, ?, ?)
    """
    cursor.execute(insert_sql, (1, "木内和也", 1, 35))
    con.commit()

    # -------------------------
    # 全件取得
    # -------------------------
    select_sql = "SELECT * FROM person"
    cursor.execute(select_sql)

    print("=== 登録後 ===")
    for record in cursor.fetchall():
        print(record)

    # -------------------------
    # 更新
    # -------------------------
    update_sql = """
        UPDATE person
        SET name = ?
        WHERE id = ?
    """
    cursor.execute(update_sql, ("木内和也1", 1))
    con.commit()

    # -------------------------
    # 更新後の確認
    # -------------------------
    cursor.execute(select_sql)

    # -------------------------
    # DELETE（削除）← 追加部分
    # -------------------------
    print("=== 削除 ===")

    delete_sql = "DELETE FROM person WHERE id = ?"
    cursor.execute(delete_sql, (2,))
    con.commit()

    cursor.execute(select_sql)
    print("=== 削除後 ===")
    for record in cursor.fetchall():
        print(record)

    print("=== 更新後 ===")
    for record in cursor.fetchall():
        print(record)