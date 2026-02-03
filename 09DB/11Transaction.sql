-- テーブル生成
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance INT
);

-- データ削除(テーブルごと)
TRUNCATE TABLE accounts;
COMMIT;

-- データ生成
INSERT INTO accounts (id, name, balance) VALUES
(1, 'Tanaka', 10000),
(2, 'Sato', 20000);

-- トランザクションは2種類あります。
-- default状態でのオートコミットはONになってます。
SELECT @@autocommit;

-- トランザクション(オートコミット)
-- ※ロールバックができない
UPDATE accounts SET balance = 0;

-- オートコミットの時のトランザクションの方法
-- トランザクション開始
START TRANSACTION;
UPDATE accounts SET balance = 0;
SELECT * FROM accounts;
-- ロールバック実行(開始に戻る)
ROLLBACK;
SELECT * FROM accounts;

START TRANSACTION;
UPDATE accounts SET balance = 0 WHERE name = 'Tanaka';
UPDATE accounts SET balance = 30000 WHERE name = 'Sato';
SELECT * FROM accounts;
COMMIT;
-- ※注意：暗黙のコミット
-- トランザクション不要なクエリを実行すると、暗黙的にコミットされます。

-- トランザクション(オートコミットOFF)
SELECT @@autocommit;
SET @@autocommit = 0;

UPDATE accounts SET balance = 0;
ROLLBACK;
SELECT * FROM accounts;

UPDATE accounts SET balance = 0 WHERE name = 'Tanaka';
UPDATE accounts SET balance = 30000 WHERE name = 'Sato';