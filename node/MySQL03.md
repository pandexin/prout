create table course(
	cno varchar(20) primary key,
	cname varcahar(20) not null,
	tno varchar(20) not null,
	foreign key(tno) references tea(tno)
);
学生
insert into stu values('108','曾华','男','1977-09-01','95033');
insert into stu values('105','匡明','男','1975-10-02','95031');
insert into stu values('107','王丽','女','1976-01-23','95033');
insert into stu values('101','李军','男','1976-02-20','95033');
insert into stu values('109','王芳','女','1975-02-10','95031');
insert into stu values('103','陆军','男','1974-06-03','95031');

教师
insert into tea values('804','李成','男','1958-12-02','副教授','计算机系');
insert into tea values('856','张旭','男','1969-03-12','讲师','电子工程系');
insert into tea values('825','王萍','女','1972-05-05','助教','计算机系');
insert into tea values('831','刘冰','女','1977-08-14','助教','电子工程系');

score
 create table score(
sno varchar(20) not null,
cno varchar(20) not null,
degree decimal,
foreign key(sno) references stu(sno),
foreign key(cno) references course(cno)
primary key(sno,cno)
);
成绩表:
insert into score values('103','3-105','64');
insert into score values('105','3-105','91');
insert into score values('109','3-105','78');


select sname,cno,degree from stu,score
where stu.sno=score.sno;


select cno,cname course;select sno,cname,degree from course,score
where course.cno=score.cno;


mysql> select cno,cname course;select sno,cname,degree from course,score
ERROR 1054 (42S22): Unknown column 'cno' in 'field list'
    -> where course.cno=score.cno;
+-----+-----------------+--------+
| sno | cname           | degree |
+-----+-----------------+--------+
| 103 | 计算机导论      |     92 |
| 105 | 计算机导论      |     88 |
| 109 | 计算机导论      |     76 |
| 103 | 操作系统        |     86 |
| 105 | 操作系统        |     75 |
| 109 | 操作系统        |     68 |
| 105 | 数字电路        |     79 |
| 109 | 数字电路        |     81 |
+-----+-----------------+--------+
8 rows in set (0.00 sec)








select sname,cname,degree from stu,course,score
where stu.sno=score.sno and course.cno=score.cno;

+--------+-----------------+--------+
| sname  | cname           | degree |
+--------+-----------------+--------+
| 陆军   | 计算机导论      |     92 |
| 匡明   | 计算机导论      |     88 |
| 王芳   | 计算机导论      |     76 |
| 陆军   | 操作系统        |     86 |
| 匡明   | 操作系统        |     75 |
| 王芳   | 操作系统        |     68 |
| 匡明   | 数字电路        |     79 |
| 王芳   | 数字电路        |     81 |
+--------+-----------------+--------+
8 rows in set (0.01 sec)





mysql> select sname,cname,degree,stu.sno,course.cno from stu,course,score
    -> where stu.sno=score.sno
    -> and course.cno=score.cno;
+--------+-----------------+--------+-----+-------+
| sname  | cname           | degree | sno | cno   |
+--------+-----------------+--------+-----+-------+
| 陆军   | 计算机导论      |     92 | 103 | 3-105 |
| 匡明   | 计算机导论      |     88 | 105 | 3-105 |
| 王芳   | 计算机导论      |     76 | 109 | 3-105 |
| 陆军   | 操作系统        |     86 | 103 | 3-245 |
| 匡明   | 操作系统        |     75 | 105 | 3-245 |
| 王芳   | 操作系统        |     68 | 109 | 3-245 |
| 匡明   | 数字电路        |     79 | 105 | 6-166 |
| 王芳   | 数字电路        |     81 | 109 | 6-166 |
+--------+-----------------+--------+-----+-------+
8 rows in set (0.00 sec)


mysql> select sname,cname,degree,stu.sno as stu_sno,course.cno as cou_cno from stu,course,score
    -> where stu.sno=score.sno
    -> and course.cno=score.cno;
+--------+-----------------+--------+---------+---------+
| sname  | cname           | degree | stu_sno | cou_cno |
+--------+-----------------+--------+---------+---------+
| 陆军   | 计算机导论      |     92 | 103     | 3-105   |
| 匡明   | 计算机导论      |     88 | 105     | 3-105   |
| 王芳   | 计算机导论      |     76 | 109     | 3-105   |
| 陆军   | 操作系统        |     86 | 103     | 3-245   |
| 匡明   | 操作系统        |     75 | 105     | 3-245   |
| 王芳   | 操作系统        |     68 | 109     | 3-245   |
| 匡明   | 数字电路        |     79 | 105     | 6-166   |
| 王芳   | 数字电路        |     81 | 109     | 6-166   |
+--------+-----------------+--------+---------+---------+
8 rows in set (0.00 sec)




mysql> select sname,cname,degree,stu.sno as stu_sno,score.sno,course.cno as cou_cno,score.cno from stu,course,score
    -> where stu.sno=score.sno
    -> and course.cno=score.cno;
+--------+-----------------+--------+---------+-----+---------+-------+
| sname  | cname           | degree | stu_sno | sno | cou_cno | cno   |
+--------+-----------------+--------+---------+-----+---------+-------+
| 陆军   | 计算机导论      |     92 | 103     | 103 | 3-105   | 3-105 |
| 匡明   | 计算机导论      |     88 | 105     | 105 | 3-105   | 3-105 |
| 王芳   | 计算机导论      |     76 | 109     | 109 | 3-105   | 3-105 |
| 陆军   | 操作系统        |     86 | 103     | 103 | 3-245   | 3-245 |
| 匡明   | 操作系统        |     75 | 105     | 105 | 3-245   | 3-245 |
| 王芳   | 操作系统        |     68 | 109     | 109 | 3-245   | 3-245 |
| 匡明   | 数字电路        |     79 | 105     | 105 | 6-166   | 6-166 |
| 王芳   | 数字电路        |     81 | 109     | 109 | 6-166   | 6-166 |
+--------+-----------------+--------+---------+-----+---------+-------+
8 rows in set (0.00 sec)







drop table score;(删除表数据)；





