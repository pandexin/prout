# MySQL
## 什么是数据库？
* 是按照数据结构来组织、存储和管理数据的仓库。
每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。
我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。
所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。 
* RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：
    1. 数据以表格的形式出现
    2. 每行为各种记录名称
    3. 每列为记录名称所对应的数据域
    4. 许多的行和列组成一张表单
    5. 若干的表单组成database
## RDBMS是什么？
* RDBMS即关系数据库管理系统(Relational Database Management System)，是将数据组织为相关的行和列的系统，而管理关系数据库的计算机软件就是关系数据库管理系统，常用的数据库软件有Oracle、SQL Server等。
## RDBMS 术语
* 数据库: 数据库是一些关联表的集合。
* 数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个*简单的电子表格。
* 列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数*据。
* 行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
* 冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
* 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
* 外键：外键用于关联两个表。
* 复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
* 索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
* 参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。
## MySQL 安装
* 打开刚刚解压的文件夹 C:\web\mysql-8.0.11 ，在该文件夹下创建 my.ini 配置文件，编辑 my.ini 配置以下基本信息：
[mysql]
### 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
### 设置3306端口
port = 3306
### 设置mysql的安装目录
basedir=C:\\web\\mysql-8.0.11
### 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
### datadir=C:\\web\\sqldata
### 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
### 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB



# 创建数据库
* show databases;
1. +--------------------+
   | Database           |
   +--------------------+
   | information_schema |
   | mysql              |
   | performance_schema |
   | sys                |
   +--------------------+
   4 rows in set (0.14 sec)

* mysql> create database studen;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| studen             |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

mysql> use studen
Database changed
mysql> show tables;
Empty set (0.01 sec)

mysql> CREATE TABLE pet (
    -> name VARCHAR(20),
    -> owner VARCHAR(20),
    -> species VARCHAR(20),
    -> sex CHAR(1),
    -> birth DATE,
    -> death DATE);
Query OK, 0 rows affected (0.09 sec)

mysql> show tables;
+------------------+
| Tables_in_studen |
+------------------+
| pet              |
+------------------+
1 row in set (0.00 sec)

mysql> describe pet;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| name    | varchar(20) | YES  |     | NULL    |       |
| owner   | varchar(20) | YES  |     | NULL    |       |
| species | varchar(20) | YES  |     | NULL    |       |
| sex     | char(1)     | YES  |     | NULL    |       |
| birth   | date        | YES  |     | NULL    |       |
| death   | date        | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
6 rows in set (0.01 sec)
mysql> select from * pet;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'from * pet' at line 1
mysql> select * from pet;
+----------+-------+---------+------+------------+-------+
| name     | owner | species | sex  | birth      | death |
+----------+-------+---------+------+------------+-------+
| Puffball | Diane | hamster | f    | 1999-03-30 | NULL  |
| 二哈哈   | 成龙  | 狗      | 公   | 1990-01-01 | NULL  |
+----------+-------+---------+------+------------+-------+
2 rows in set (0.01 sec)
## MySQl 数据类型
MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。 
## MySQl 总结
* -- 增加
INSERT
* -- 删除
DELETE
* --修改
UPDATE
* --查询
SELECT
## MySQl 主键约束
mysql> create table user(
    -> id int primary key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.17 sec)

mysql> insert into user values(1,'张三');
Query OK, 1 row affected (0.02 sec)

mysql> insert into user values(2,'张三');
Query OK, 1 row affected (0.01 sec)

mysql> select * from user;
+----+------+
| id | name |
+----+------+
|  1 | 张三 |
|  2 | 张三 |
+----+------+
2 rows in set (0.00 sec)
## MySQl 联合约束
mysql> create table user2(
    -> id int,
    -> name varchar(20),
    -> password varchar(20),
    -> primary key(id,name)
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> insert into user2 values(1,'张三','123');
Query OK, 1 row affected (0.01 sec)

mysql> insert into user2 values(2,'张三','123');
Query OK, 1 row affected (0.00 sec)

mysql> insert into user2 values(1,'李四','123');
Query OK, 1 row affected (0.01 sec)

mysql> select * from user2;
+----+------+----------+
| id | name | password |
+----+------+----------+
|  1 | 张三 | 123      |
|  1 | 李四 | 123      |
|  2 | 张三 | 123      |
+----+------+----------+
3 rows in set (0.00 sec)
## MySQl 自增约束
mysql> create table user3(
    -> id int  primary key auto_increment,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.18 sec)

mysql> insert into user3(name) values('zhangsan');
Query OK, 1 row affected (0.02 sec)

mysql> select * from user3
    -> ;
+----+----------+
| id | name     |
+----+----------+
|  1 | zhangsan |
+----+----------+
1 row in set (0.01 sec)

mysql> insert into user3(name) values('zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql>  select * from user3;
+----+----------+
| id | name     |
+----+----------+
|  1 | zhangsan |
|  2 | zhangsan |
+----+----------+
2 rows in set (0.00 sec)
## MySQl建表后添加与删除
### 建表后：
mysql> create table user4(id int, name varchar(20));
Query OK, 0 rows affected (0.04 sec)

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.06 sec)
### 添加主键后：
mysql> alter table user4 add primary key (id);
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
### 删除主键后：
mysql> alter table user4 drop primary key;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc user4;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
## MySQl 唯一约束
mysql> create table user5(
    -> id int,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> desc user5;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into user5 values(1,'zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql> insert into user5 values(1,'lisi');
Query OK, 1 row affected (0.01 sec)

mysql> select * from user5;
+------+----------+
| id   | name     |
+------+----------+
|    1 | zhangsan |
|    1 | lisi     |
+------+----------+
2 rows in set (0.00 sec)

mysql> insert into user5 values(2,'zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql> select * from user5;
+------+----------+
| id   | name     |
+------+----------+
|    1 | zhangsan |
|    1 | lisi     |
|    2 | zhangsan |
+------+----------+
3 rows in set (0.00 sec)
## MySQl 非空约束（修饰的字段不能为空）
## MySQl 默认约束
mysql> create table user10( id int, name varchar(20), age int default 10);
Query OK, 0 rows affected (0.11 sec)

mysql> desc user10;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
| age   | int(11)     | YES  |     | 10      |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.03 sec)

mysql> insert into user10 (id,name) values(1,'zhangsan');
Query OK, 1 row affected (0.01 sec)

mysql> select * from user10;
+------+----------+------+
| id   | name     | age  |
+------+----------+------+
|    1 | zhangsan |   10 |
+------+----------+------+
1 row in set (0.00 sec) 
mysql> insert into user10 values(1,'zhangsan',19);
Query OK, 1 row affected (0.01 sec)

mysql> select * from user10;
+------+----------+------+
| id   | name     | age  |
+------+----------+------+
|    1 | zhangsan |   10 |
|    1 | zhangsan |   19 |
+------+----------+------+
2 rows in set (0.00 sec)
## MySQl 外键约束
1. 主表中没有的数据，在副表中是不可以使用的；
2. 主表中的记录被副表引用，是不可以删除的；

## mysql 外键，
外键的主要作用是：保持数据的一致性、完整性。