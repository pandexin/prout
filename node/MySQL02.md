# MySQL 创建数据库 
* 使用 create 命令创建数据库，语法如下:
* CREATE DATABASE 数据库名;
# drop 命令删除数据库
* drop 命令格式：
* drop database <数据库名>;
# MySql常用命令 
1. create database name; 创建数据库
2. use databasename; 选择数据库
3. drop database name 直接删除数据库，不提醒
4. show tables; 显示表
5. describe tablename; 表的详细描述
6. select 中加上distinct去除重复字段
7. mysqladmin drop databasename 删除数据库前，有提示。
显示当前mysql版本和当前日期
8. select version(),current_date;
delete from registers where id='?';从id='?'的寄存器中删除； 
 
# 修改mysql中root的密码：
shell>mysql -u root -p
mysql> update user set password=password(”xueok654123″) where user=’root’;
mysql> flush privileges //刷新数据库
mysql>use dbname； 打开数据库：
mysql>show databases; 显示所有数据库
mysql>show tables; 显示数据库mysql中所有的表：先use mysql；然后
mysql>describe user; 显示表mysql数据库中user表的列信息）；
2、修改密码
格式：mysqladmin -u用户名 -p旧密码 password 新密码

1、给root加个密码ab12。
首先在DOS下进入目录mysql\bin，然后键入以下命令
    mysqladmin -u root -password ab12
注：因为开始时root没有密码，所以-p旧密码一项就可以省略了。

2、再将root的密码改为djg345。
    mysqladmin -u root -p ab12 password djg345