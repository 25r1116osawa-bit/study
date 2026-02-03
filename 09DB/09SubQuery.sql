-- クエリの中にクエリを埋め込むことができる。

-- 平均年齢以上(スカラサブクエリ)
SELECT name,age FROM personal WHERE age > (SELECT AVG(age) FROM personal);
SELECT AVG(age) FROM personal;

-- 血液型がABの人のリストを取得してその人の名前を取得(複数行サブクエリ)
SELECT name FROM personal WHERE id IN (SELECT id FROM personal_detail WHERE blood = 'AB');

-- 同じ血液型の中で、平均年齢より高い人(相関サブクエリ)
SELECT p.name,p.age, pd.blood FROM personal AS p JOIN personal_detail AS pd ON p.id = pd.id;

-- 同じ血液型の中で、平均年齢より高い人(相関サブクエリ)
SELECT p1.name,p1.age,pd1.blood 
FROM personal AS p1 
JOIN personal_detail AS pd1 
ON p1.id = pd1.id 
WHERE p1.age > 
    (SELECT AVG(p2.age) 
    FROM personal AS p2 
    JOIN personal_detail AS pd2 
    ON p2.id = pd2.id 
    WHERE pd1.blood = pd2.blood
    );

-- 名前に子が付く人の平均年齢以上(インラインビュー)(別名必須)
SELECT name , age FROM (SELECT name,age FROM personal WHERE name LIKE '%子%') AS p WHERE name LIKE '%山%';

