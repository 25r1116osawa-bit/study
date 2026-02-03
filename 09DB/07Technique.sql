-- テクニック編(その他)
-- 分類しにくいものですが、必要なものになります。

-- NULLの扱いについて
-- 対象データの作成
INSERT INTO personal (id, name, kana, age, gender) VALUES
(51, '名無し 権兵衛', 'ナナシ ゴンベエ', NULL, NULL);
INSERT INTO personal_detail (id, birthday, blood, email, tel, mobile, zip, address, company, credit, expiry, my_number) VALUES
(51, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- NULL抽出
SELECT * FROM personal WHERE age IS NULL;
-- NULL否定抽出
SELECT * FROM personal WHERE age IS NOT NULL;
-- COUNTの挙動確認
SELECT COUNT(age),COUNT(*)  FROM personal;

-- 別名
-- 別名なし
SELECT AVG(age) FROM personal;
-- 別名あり
SELECT AVG(age) AS 年齢平均 FROM personal;
SELECT name AS 名前 FROM personal;
-- ASは省略できます。
SELECT name 名前 FROM personal;

-- 重複の排除
-- 重複排除なしの場合。
SELECT gender FROM personal;
-- 重複排除をした場合。
SELECT DISTINCT gender 性別一覧 FROM personal;

-- ソート
-- 昇順
SELECT * FROM personal ORDER BY age;
-- 昇順
SELECT * FROM personal ORDER BY age ASC;
-- 降順
SELECT * FROM personal ORDER BY age DESC;

-- 取得数の制限
-- 上位3つです。
SELECT * FROM personal LIMIT 3;
-- 開始位置ずらし(5ずらして3つ表示)
SELECT * FROM personal LIMIT 3 OFFSET 5;

-- CASE式
SELECT 
*,
CASE
    WHEN age >= 60 THEN 'シニア'
    WHEN age >= 18 THEN '成人'
    ELSE '未成年'
END 年齢区分
FROM personal;

-- INについて
-- 複雑(何度も同じ事を書く)なSQLを簡単に書くことができるキーワード
-- ORの代わりになる。
-- 性別が男か女を抽出
-- INを使った場合
SELECT * FROM personal WHERE gender IN ('男','女');
-- INを使わなかった場合
SELECT * FROM personal WHERE gender = '男' OR gender = '女';

-- BETWEEN
-- 複雑(何度も同じ事を書く)なSQLを簡単に書くことができるキーワード
-- ANDの代わりになる。
-- 20代の人
-- BETWEENを使った場合
SELECT * FROM personal WHERE age BETWEEN 20 AND 29;
-- BETWEENを使わなかった場合
SELECT * FROM personal WHERE age >= 20 AND age <= 29;
