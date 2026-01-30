-- DML(データ操作言語)
-- データベースの操作の基本とされるCRUD(クラッド)を覚えていただきます。
-- 4つの操作の頭文字を取ってます。
-- C → CREATE → 作成
-- R → READ → 読み込み
-- U → UPDATE → 更新
-- D → DELETE → 削除
-- この4つの操作でDBを操作します　プログラムから問い合わせが来るのもこのCRUDです。

-- CREATE(データ作成)
INSERT INTO employee VALUES (1,'大澤',1,'1988/6/4');

INSERT INTO employee VALUES (3,'大澤 樹',1,'1988/6/4');



-- INSERT INTO テーブル名 (列1, 列2, 列3, ...) VALUES (値1, 值2, 值3, ...);
INSERT INTO employee VALUES (1,'大澤沙織',2,'1988/10/21'),(2,'大澤 樹',1,'1988/6/4'),(3,'木内和也',1,'1988/6/13'),(4,'テスト',1,'1988/6/13');


-- READ(データ読み込み)
SELECT * FROM employee;

-- UPDATE(データ更新)
UPDATE employee  SET gender = 2 WHERE id = 1;

-- DELETE(データ削除)
-- 文法
-- DELETE FROM テーブル名;

DELETE FROM employee WHERE id = 1;
