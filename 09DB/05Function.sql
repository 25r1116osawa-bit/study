-- 関数

-- 現在のTIMESTAMP
SELECT NOW();

-- 絶対値
SELECT ABS(-100);

-- 四捨五入
SELECT ROUND(1.23456,2);

-- 文字列連結
SELECT CONCAT('abcd','efgh');

-- 集約関数

-- 行数を数える(検索結果の数) 集約関数
SELECT COUNT(*) FROM personal WHERE gender = '女';

-- 合計
SELECT SUM(age) FROM personal;

-- 平均
SELECT AVG(age) FROM personal;

-- 最大
SELECT MAX(age) FROM personal;

-- 最小
SELECT MIN(age) FROM personal;