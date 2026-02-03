-- Active: 1769737448175@@192.168.1.48@3306@training_db2

--1 51	名無し 権兵衛	ナナシ ゴンベエ
SELECT * FROM personal WHERE age IS NULL;

--2 50
SELECT COUNT(*) FROM personal_detail WHERE email IS NOT NULL;

-- 3	性別（gender）ごとの人数を、人数が多い順に表示せよ。 
-- null1 男24 女24 その他・不明2
SELECT gender , COUNT(*) FROM personal GROUP BY gender;

-- 4 	血液型（blood）が NULL である人の名前（personal）を表示せよ（JOIN使用）。 
-- 名無し 権兵衛	ナナシ ゴンベエ	
SELECT * FROM personal JOIN personal_detail ON personal.id = personal_detail.id WHERE blood IS  NULL; 

-- 5	personalテーブルの全データの平均年齢を表示せよ。
SELECT  ROUND(AVG(age),1) FROM personal;


-- 6	年齢が NULL の人を「0歳」として扱い、全体の平均年齢を算出せよ。
SELECT AVG(IFNULL(age,0)) FROM personal;

-- 7	名前の中に「藤」という文字が含まれる人の件数を表示せよ。
SELECT COUNT(*) FROM personal WHERE name LIKE '%藤%';

-- 8	血液型ごとの平均年齢を表示せよ（血液型が NULL のグループも表示すること）。
SELECT personal_detail.blood,AVG(age) FROM personal JOIN personal_detail ON personal.id = personal_detail.id  GROUP BY personal_detail.blood;

-- 9	メールアドレスが NULL の場合、一律で「contact@example.jp」と表示せよ。
SELECT IFNULL(email,"contact@example.jp") FROM personal JOIN personal_detail ON personal.id = personal_detail.id ;

-- 10	personalテーブルの id 1番から10番までの人の中で、最年長者の年齢を表示せよ。
SELECT MAX(id),age FROM personal WHERE id BETWEEN 1 AND 10;

-- 11	30歳以上の男性（男）の人数を数えよ。
SELECT count(*) FROM personal WHERE age >= 30 AND gender = '男';

-- 12	住所（address）が「東京都」から始まる人の名前と住所を表示せよ。
SELECT name,address FROM personal JOIN personal_detail ON personal.id = personal_detail.id  WHERE address LIKE '東京都%';

DESC personal;

-- 13	固定電話（tel）が NULL の場合、代わりに携帯（mobile）を表示せよ（両方なければNULL）。
SELECT IFNULL(tel,mobile) FROM personal_detail

-- 14	各性別ごとに、最も若い人の年齢を表示せよ。
SELECT gender,MIN(age)  FROM personal JOIN personal_detail ON personal.id = personal_detail.id   GROUP BY gender;

-- 15	都道府県（addressの先頭3〜4文字）ごとに人数を集計せよ。
SELECT LEFT(address,3)AS "都道府県" ,COUNT(LEFT(address,3))AS "都道府県毎の人数"  FROM personal_detail GROUP BY LEFT(address,3);

-- 16	クレジットカード（credit）の下4桁だけを表示せよ。
SELECT RIGHT(credit,4) FROM personal_detail; 

-- 17	平均年齢が35歳以上の血液型グループのみを表示せよ。
SELECT blood AS 血液型,AVG(age)AS 平均年齢  FROM personal JOIN personal_detail ON personal.id = personal_detail.id   GROUP BY blood HAVING AVG(age)>=35;


-- 18	年齢が20代、30代、40代、それ以外で区分し、それぞれの人数を表示せよ。

SELECT 
CASE
    WHEN age >= 40 and age<=49 THEN '40代'
    WHEN age >= 30 and age<=39 THEN '30代'
    WHEN age >= 20 and age<=29 THEN '20代'
    ELSE 'その他'
END 年齢区分,
COUNT(*) AS 人数
FROM personal 
GROUP BY 年齢区分; 


-- 19	誕生月（birthdayの月）ごとの人数を、1月から順に表示せよ。
SELECT * FROM personal_detail;
SELECT 
CASE 
    WHEN RIGHT(LEFT(birthday,7),2) ="01" THEN "1月"
    WHEN RIGHT(LEFT(birthday,7),2) ="02" THEN "2月"
    WHEN RIGHT(LEFT(birthday,7),2) ="03" THEN "3月"
    WHEN RIGHT(LEFT(birthday,7),2) ="04" THEN "4月"
    WHEN RIGHT(LEFT(birthday,7),2) ="05" THEN "5月"
    WHEN RIGHT(LEFT(birthday,7),2) ="06" THEN "6月"
    WHEN RIGHT(LEFT(birthday,7),2) ="07" THEN "7月"
    WHEN RIGHT(LEFT(birthday,7),2) ="08" THEN "8月"
    WHEN RIGHT(LEFT(birthday,7),2) ="09" THEN "9月"
    WHEN RIGHT(LEFT(birthday,7),2) ="10" THEN "10月"
    WHEN RIGHT(LEFT(birthday,7),2) ="11" THEN "11月"
    WHEN RIGHT(LEFT(birthday,7),2) ="12" THEN "12月"
END 誕生月,
COUNT(*) AS 人数
FROM personal_detail
GROUP BY RIGHT(LEFT(birthday,7),2)
ORDER BY RIGHT(LEFT(birthday,7),2) ASC; 

-- 20	メールアドレスが未登録（NULL）の人の平均年齢を表示せよ。

SELECT * FROM personal_detail  WHERE email IS NULL;



SELECT * FROM personal;
SELECT * FROM personal_detail;

-- 21	従業員ID、氏名、入社日の一覧を表示せよ。

SELECT e.personal_id,p.name,e.hire_date FROM employees AS e JOIN personal AS p ON e.personal_id = p.id ;


-- 23	「営業部」に所属している従業員の氏名と年齢を表示せよ。
SELECT
  p.name,
  p.age,
  d.dept_name
FROM personal AS p
JOIN employees AS e
  ON p.id = e.personal_id
JOIN employee_department AS ed
  ON e.employee_id = ed.employee_id
JOIN departments AS d
  ON ed.dept_id = d.dept_id
  WHERE d.dept_name ="営業部"


-- 24	案件名と、その案件に参加しているメンバーの氏名、役割を表示せよ。

SELECT pro.project_name,  p.id ,p.name from projects AS pro JOIN personal AS p ON p.id = pro.project_id GROUP BY pro.project_name




SELECT * FROM departments;

SELECT * FROM employee_department;

SELECT * FROM employees;



SELECT * FROM personal;

SELECT * FROM personal_detail;

SELECT * FROM projects;

