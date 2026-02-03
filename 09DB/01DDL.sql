-- Active: 1769737448175@@192.168.1.48@3306@training_db2
-- DDL(データ定義言語)


--数値データ型：tinyint、boolean、smallint、mediumint、int、zerofill、bigint、decimal、float、double
--bit日付・時間データ型：date、time、datetime、timestamp
--year文字列データ型：
--文字列リテラル、char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、longtext、tinytext、text、mediumtext、enum、
--setその他のデータ型：geometry、auto_increment、auto_increment_faq 、null、
--データ型のストレージ要件
--はじめは、数値型はintと、doubleと bitまたはtinyintを覚えて。
--日付型はdateとtimestampを覚えて、
--文字列型はcharとvarcharを覚えましょう。

-- データベースの作成
CREATE DATABASE practice;


-- データベース一覧表示
SHOW DATABASES;


-- 利用するデータベースの選択
USE practice;


-- DBを削除する際のコマンド
DROP DATABASE practice;


-- テーブルを作成します。整数型のid 動的文字列20文字のname 整数型のgender 日付型のbirthday
-- 2回押すとすでに作成されているため、エラーがでます。
CREATE TABLE employee(
    id INT,             
    name VARCHAR(20),
    gender INT,
    birthday DATE
);


-- テーブル一覧表示
SHOW TABLES;

-- テーブル構造の確認
DESC employee;


-- テーブル削除
DROP TABLE employye;

-- 設計した段階でDBを作成するので、構造編集は　まず使わないです。

-- テーブル構造の変更(追加)
ALTER TABLE employee ADD COLUMN dep VARCHAR(20);
-- テーブル構造の変更(削除)
ALTER TABLE employee DROP COLUMN dep;
-- テーブル構造の変更(カラムの型変更)
ALTER TABLE employee MODIFY gender TINYINT;


