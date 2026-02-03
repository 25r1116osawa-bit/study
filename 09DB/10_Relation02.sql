-- Active: 1769737448175@@192.168.1.48@3306@training_db3



SELECT * FROM employees;
SELECT * FROM departments;

-- 内部結合(完全一致結合)
SELECT * FROM employees AS e JOIN departments AS d ON e.dept_id = d.dept_id

-- 外部結合
-- 左外部結合
SELECT * FROM employees AS e LEFT OUTER JOIN departments AS d ON e.dept_id = d.dept_id;


-- 右外部結合
SELECT * FROM employees AS e RIGHT OUTER JOIN departments AS d ON e.dept_id = d.dept_id;


--データ統合 (union)
SELECT * FROM employees AS e LEFT OUTER JOIN departments AS d ON e.dept_id = d.dept_id
UNION
SELECT * FROM employees AS e RIGHT OUTER JOIN departments AS d ON e.dept_id = d.dept_id;


-- クロスジョイン


-- 自己結合(SELF)
-- 自己結合(SELF)
SELECT e.emp_name AS '部下', m.emp_name AS '上司' FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.emp_id;