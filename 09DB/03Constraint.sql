-- 制約について
-- 入力されるデータにルールを設ける

-- ◯制約
-- 非空制約(NOT NULL)
-- 「値なし」を許さない。必須項目（名前、パスワードなど）に使用。

-- 一意性制約(UNIQUE)
-- 重複を許さない（メールアドレス、社員番号など）。NULLはOKな場合が多い。

-- チェック制約(CHECK)
-- 「0以上100以下」など、値の範囲や内容を制限する（MariaDB 10.2.1〜）。

-- デフォルト値(DEFAULT)
-- 値が入力されなかった時に、自動で入る値を決めておく。

-- ◯リレーション関係の制約
-- 主キー制約(PRIMARY KEY)

-- 外部キー制約(FOREIGN KEY)
-- 他のテーブルに存在する値しか入れさせない（親子関係の維持）

DROP TABLE employee2;
DROP TABLE department;

CREATE TABLE department (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- 部署ID
    name VARCHAR(50) NOT NULL UNIQUE, -- 部署名
    location VARCHAR(100), -- 勤務地,
    is_active TINYINT(1) DEFAULT 1  -- 有効フラグ（1:有効, 0:無効）
)

CREATE TABLE employee2 (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- 主キー（自動採番）
    name VARCHAR(20) NOT NULL,                  -- 必須項目
    email VARCHAR(100) UNIQUE,                  -- 重複禁止
    gender ENUM('男','女') NOT NULL,             -- 選択肢を限定
    age INT CHECK (age >= 18),                  -- 18歳以上のみ
    dept_id INT UNSIGNED,
    is_active TINYINT(1) DEFAULT 1,             -- 指定がなければ「1(有効)」
    -- 外部キー：departmentテーブルのidに存在する値しか許可しない
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) 
        REFERENCES department(id)
        ON DELETE SET NULL                      -- 親が消えたらここをNULLにする設定
);


INSERT INTO department (name, location) VALUES 
('営業部', '東京本社'),
('開発部', '横浜ラボ'),
('総務部', '東京本社'),
('人事部', '大阪支社'),
('マーケティング部', '福岡オフィス');

INSERT INTO employee2 (name, email, gender, age, dept_id) VALUES 
('佐藤 健太', 'sato@example.com', '男', 25, 1),
('鈴木 一郎', 'suzuki@example.com', '男', 42, 2),
('高橋 花子', 'takahashi@example.com', '女', 30, 1),
('田中 次郎', 'tanaka@example.com', '男', 19, 3),
('渡辺 直美', 'watanabe@example.com', '女', 35, 2),
('伊藤 博', 'ito@example.com', '男', 50, 2),
('小林 誠', 'kobayashi@example.com', '男', 28, 1),
('加藤 恵', 'kato@example.com', '女', 22, 4),
('木村 拓也', 'kimura@example.com', '男', 45, 1),
('斉藤 慶子', 'saito@example.com', '女', 33, 3);