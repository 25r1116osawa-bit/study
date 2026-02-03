-- 複数のテーブルを関連付けて表示する機能、JOIN

-- personalテーブルとpersonal_detailテーブルをすべて表示した場合。
SELECT * FROM personal JOIN personal_detail ON personal.id = personal_detail.id;
-- テーブル名省略は危険
SELECT name,blood FROM personal JOIN personal_detail ON personal.id = personal_detail.id;
-- テーブル名あり
SELECT personal.name,personal_detail.blood FROM personal JOIN personal_detail ON personal.id = personal_detail.id;
