MySQL localhost:33060+ ssl spg SQL > create table users(id int, user_name varchar(30), is_enabled int);

MySQL localhost:33060+ ssl spg SQL > create table post(id int, post_author_id int, is_published int);

MySQL localhost:33060+ ssl spg SQL > show tables;
+---------------+
| Tables\*in_spg |
+---------------+
| post |
| users |
+---------------+
2 rows in set (0.0025 sec)

MySQL localhost:33060+ ssl spg SQL > insert into users values (1, "admin", 0), (2, "Joe", 1), (3, "Helen", 1), (4, "Jacob", 0), (5, "Frank", 1);
Query OK, 1 row affected (0.0816 sec)

MySQL localhost:33060+ ssl spg SQL > select \* from users;

+----+-----------+------------+
| id | user_name | is_enabled |
+----+-----------+------------+
| 1 | admin | 0 |
| 2 | Joe | 1 |
| 3 | Helen | 1 |
| 4 | Jacob | 0 |
| 5 | Frank | 1 |
+----+-----------+------------+

5 rows in set (0.0008 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (1,1,0), (2,5,1), (3,5,1), (4,3,0), (5,1,1), (6,2,0), (7,1,1), (8,5,1), (9,3,1),(10,4,0);
Query OK, 1 row affected (0.3808 sec)

MySQL localhost:33060+ ssl spg SQL > select \* from post;

+----+----------------+--------------+
| id | post_author_id | is_published |
+----+----------------+--------------+
| 1 | 1 | 0 |
| 2 | 5 | 1 |
| 3 | 5 | 1 |
| 4 | 3 | 0 |
| 5 | 1 | 1 |
| 6 | 2 | 0 |
| 7 | 1 | 1 |
| 8 | 5 | 1 |
| 9 | 3 | 1 |
| 10 | 4 | 0 |
+----+----------------+--------------+

10 rows in set (0.0011 sec)

MySQL localhost:33060+ ssl spg SQL > select user_name, sum(is_published) from users join post on post_author_id=users.id group by user_name order by is_published desc;
+-----------+-------------------+
| user_name | sum(is_published) |
+-----------+-------------------+
| Frank | 3 |
| admin | 2 |
| Helen | 1 |
| Joe | 0 |
| Jacob | 0 |
+-----------+-------------------+
5 rows in set (0.0012 sec)

<!-- MySQL localhost:33060+ ssl spg SQL > show tables;
+---------------+
| Tables*in_spg |
+---------------+
| post |
| users |
+---------------+
2 rows in set (0.0025 sec)
MySQL localhost:33060+ ssl spg SQL > insert into users values (1, "admin", 0);
Query OK, 1 row affected (0.2626 sec)
MySQL localhost:33060+ ssl spg SQL > insert into users values(2, "Joe", 1);
Query OK, 1 row affected (0.2002 sec)
MySQL localhost:33060+ ssl spg SQL > insert into users values (3, "Helen", 1);
Query OK, 1 row affected (0.1053 sec)
MySQL localhost:33060+ ssl spg SQL > insert into users values (4, "Jacob", 0);
Query OK, 1 row affected (0.2151 sec)
MySQL localhost:33060+ ssl spg SQL > insert into users values (5, "Frank", 1);
Query OK, 1 row affected (0.0816 sec)
MySQL localhost:33060+ ssl spg SQL > select * from users;

+----+-----------+------------+
| id | user_name | is_enabled |
+----+-----------+------------+
| 1 | admin | 0 |
| 2 | Joe | 1 |
| 3 | Helen | 1 |
| 4 | Jacob | 0 |
| 5 | Frank | 1 |
+----+-----------+------------+

5 rows in set (0.0008 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (1,1,0);
Query OK, 1 row affected (0.2527 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (2,5,1);
Query OK, 1 row affected (0.1212 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (3,5,1);
Query OK, 1 row affected (0.0824 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (4,3,0);
Query OK, 1 row affected (0.0987 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (5,1,1);
Query OK, 1 row affected (0.1252 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (6,2,0);
Query OK, 1 row affected (0.1362 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (7,1,1);
Query OK, 1 row affected (0.0838 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (8,5,1);
Query OK, 1 row affected (0.0878 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (9,3,1);
Query OK, 1 row affected (0.1157 sec)
MySQL localhost:33060+ ssl spg SQL > insert into post values (10,4,0);
Query OK, 1 row affected (0.3808 sec)
MySQL localhost:33060+ ssl spg SQL > select \* from post;

+----+----------------+--------------+
| id | post_author_id | is_published |
+----+----------------+--------------+
| 1 | 1 | 0 |
| 2 | 5 | 1 |
| 3 | 5 | 1 |
| 4 | 3 | 0 |
| 5 | 1 | 1 |
| 6 | 2 | 0 |
| 7 | 1 | 1 |
| 8 | 5 | 1 |
| 9 | 3 | 1 |
| 10 | 4 | 0 |
+----+----------------+--------------+

10 rows in set (0.0011 sec)
MySQL localhost:33060+ ssl spg SQL >

MySQL localhost:33060+ ssl spg SQL > select post_author_id, sum(is_published) from post group by post_author_id;
+----------------+-------------------+
| post_author_id | sum(is_published) |
+----------------+-------------------+
| 1 | 2 |
| 5 | 3 |
| 3 | 1 |
| 2 | 0 |
| 4 | 0 |
+----------------+-------------------+
5 rows in set (0.4893 sec)

MySQL localhost:33060+ ssl spg SQL > select user_name, sum(is_published) from users join post on post_author_id=users.id group by user_name order by is_published desc;
+-----------+-------------------+
| user_name | sum(is_published) |
+-----------+-------------------+
| Frank | 3 |
| admin | 2 |
| Helen | 1 |
| Joe | 0 |
| Jacob | 0 |
+-----------+-------------------+
5 rows in set (0.0012 sec) -->
