-- Active: 1769656450734@@127.0.0.1@3306@mysql
-- DCL データコントロール

CREATE USER 'user'@'%' IDENTIFIED BY 'pass';

-- すべての権限をはく奪
REVOKE ALL PRIVILEGES ON *.* FROM 'user'@'%';

-- selectの権限を付与
GRANT SELECT ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- よく使われる権限の種類
-- 権限名,レベル,内容
-- ALL PRIVILEGES,全般,GRANT OPTION以外のすべての権限を付与する。
-- SELECT,データ操作,テーブルからデータを読み取る（参照）権限。
-- INSERT,データ操作,テーブルに新しい行を追加する権限。
-- UPDATE,データ操作,既存のデータを更新する権限。
-- DELETE,データ操作,行を削除する権限。
-- CREATE,構造操作,新しいデータベースやテーブルを作成する権限。
-- DROP,構造操作,データベースやテーブルを削除する権限。
-- ALTER,構造操作,テーブルの構造（カラム追加など）を変更する権限。
-- INDEX,構造操作,インデックスを作成・削除する権限。
-- GRANT OPTION,管理,自分が持つ権限を他のユーザーに付与する権限。