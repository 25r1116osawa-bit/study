-- SELECT(検索、データ抽出)

-- 全件取得
SELECT * FROM personal;

-- 条件入り取得(等号)
SELECT * FROM personal WHERE gender = '男';

-- 条件入り取得(比較)
SELECT * FROM personal WHERE age >= 30;

-- 条件入り取得(かつ)
SELECT * FROM personal WHERE age >= 30 AND gender = '男';

-- 条件入り取得(または)
SELECT * FROM personal WHERE age >= 30 OR gender = '男';

-- 条件入り取得(完全一致検索)
SELECT * FROM personal WHERE name = '吉田 拓也';

-- 条件入り取得(あいまい検索)
SELECT * FROM personal WHERE name LIKE '%木%';

-- 条件入り取得(後方一致検索)
SELECT * FROM personal WHERE name LIKE '%子';

-- 条件入り取得(前方一致検索)
SELECT * FROM personal WHERE name LIKE '木%';

