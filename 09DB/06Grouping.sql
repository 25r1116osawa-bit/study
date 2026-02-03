-- グルーピング

-- 性別(グループ)毎に人数を数える。
SELECT gender , COUNT(*) FROM personal GROUP BY gender;


-- 性別(グループ)毎の平均年齢
SELECT gender , AVG(age) FROM personal GROUP BY gender;

-- 性別毎の30歳以上の平均年齢は？
SELECT gender , AVG(age) FROM personal WHERE age >= 30 GROUP BY gender;

-- 性別毎の平均年齢が35以上のグループは？
SELECT gender , AVG(age) FROM personal GROUP BY gender HAVING AVG(age) >= 35;

