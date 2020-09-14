ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password
BY 'Alon0535303521';

DROP DATABASE IF EXISTS `music_streaming_service` ;
CREATE DATABASE `music_streaming_service`;
USE `music_streaming_service`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `artist` (
	PRIMARY KEY (`artist_id`),
	`artist_id` INT NOT NULL AUTO_INCREMENT,
    `artist_name` VARCHAR(50) NOT NULL,
    `cover_img` LONGTEXT,
    `created_at` DATE NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO artist VALUES (1 , 'JUICE WRLD' , 'https://www.nme.com/wp-content/uploads/2019/12/Juice-WRLD.jpg' , '2010-10-10') ;
INSERT INTO artist VALUES (2 , 'EMINEM' , 'https://victor-mochere.com/wp-content/uploads/2018/11/Best-quotes-from-Eminem.jpg' , '2000-01-01') ;
INSERT INTO artist VALUES (3 , 'THE WEEKEND' , 'https://static.billboard.com/files/media/the-weeknd-sept-2015-billboard-650-compressed.jpg' , '2005-03-03') ;
INSERT INTO artist VALUES (4 , 'THE WANTED' , 'https://ichef.bbci.co.uk/images/ic/960x540/p01br1m8.jpg' , '2008-06-06') ;
INSERT INTO artist VALUES (5 , 'LINKIN PARK' , 'https://static.billboard.com/files/media/02-linkin-park-press-photo-credit-james-minchin-2017-billboard-1548-1024x677.jpg' , '1995-11-11') ;
INSERT INTO artist VALUES (6 , 'DRAKE' , 'https://www.the-sun.com/wp-content/uploads/sites/6/2020/08/NINTCHDBPICT000601975571.jpg' , '1990-09-09') ;
INSERT INTO artist VALUES (7 , 'FALL OUT BOY' , 'https://data.junkee.com/wp-content/uploads/2020/02/fall-out-boy.jpg' , '2002-12-12') ;
INSERT INTO artist VALUES (8 , 'DENNIS LLOYD' , 'https://3gwtod2hg0th1ikege3y0nok-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/1508979904_22426626_1584613658265374_2926338565099230098_o.jpg' , '2001-03-20') ;
INSERT INTO artist VALUES (9 , 'RED HOT CHILI PEPPERS' , 'https://tonedeaf.thebrag.com/wp-content/uploads/2019/12/rhcp-jf-768x435.jpg' , '1999-10-30') ;
INSERT INTO artist VALUES (10 , 'SHEM TOV HEAVY' , 'https://medias.timeout.co.il/www/uploads/2020/07/imgid36413_A-1140x641.jpeg' , '2020-09-01') ;
INSERT INTO artist VALUES (11 , 'RAVID PLOTNIK' , 'https://images1.calcalist.co.il/PicServer3/2019/06/29/916772/4_l.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (12 , 'TUNA' , 'https://www.branza.co.il/assets/uploads/event_images/b29c21776cffbf471652ae4b23b36564_main.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (13 , 'THE BEATLES' , 'https://s3.amazonaws.com/quietus_production/images/articles/26699/the_beatles_1561392384_crop_550x369.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (14 , 'IDAN HAVIV' , 'https://www.frogi.co.il/picserver/s3/2020/07/27/0bab3c4ca4238a0b921.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (15 , 'DJ KHALED' , 'https://cbsnews1.cbsistatic.com/hub/i/r/2020/01/23/03ca29ff-5ef9-4075-97c1-dca3bae9d930/thumbnail/1200x630/df767f231cde06e1805cde33ccab694c/dj-khaled-interview-promo.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (16 , 'MAROON 5' , 'https://my-loveaffair.com/wp-content/uploads/2019/12/maroon5.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (17 , 'NE-YO' , 'https://static.highsnobiety.com/thumbor/uCitR08iKcD1h7DcVgk6R_jiLwk=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2020/03/30093101/neyo-ig-battle-1.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (18 , '50 CENT' , 'https://static.billboard.com/files/media/50-cent-for-life-2020-billboard-1548-768x433.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (19 , 'BEYONCE' , 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beyonce-coachella-destinys-child-hbz-1523795792.jpg' , '2020-09-01') ;
INSERT INTO artist VALUES (20 , 'RIHANNA' , 'https://cdn.cnn.com/cnnnext/dam/assets/170606101717-rihanna-exlarge-169.jpg' , '2020-09-01') ;
	
    
CREATE TABLE `album` (
	PRIMARY KEY (`album_id`),
	`album_id` INT NOT NULL AUTO_INCREMENT,
	`album_name` VARCHAR(50) NOT NULL,
    `artist_id` INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    `cover_img` LONGTEXT,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO album VALUES (1 , 'LEGENDS NEVER DIE' , 1 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (2 , 'AFTER HOURS' , 3 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (3 , 'SAVE ROCK AND ROLL' , 7 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (4 , 'ONE MORE NIGHT' , 5 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (5 , 'EXIDENT' , 8 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (6 , 'THE GETAWAY' , 9 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (7 , 'KAMIKAZE' , 2 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (8 , 'SCORPION' , 6 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (9 , 'ALIYATO VENEFILATO' , 10 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (10 , 'VEAHSHAV LAHELEK AOMANUTI' , 11 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (11 , 'VEAHSHAV LAHELEK AINTERGALAKTY' , 12 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (12 , 'ANTI' , 20 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (13 , 'V' , 16 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (14 , 'R.E.D.' , 17 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (15 , 'BULLETPROOF' , 18 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (16 , 'KOL PAAM KTZAT' , 14 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (17 , 'ABBEY ROAD' , 13 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (18 , 'LEMONADE' , 19 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (19 , 'WORD OF MOUTH' , 4 , NULL , '2000-01-01' , '2001-01-01') ;
INSERT INTO album VALUES (20 , 'FATHER OF ASAHD' , 15 , NULL , '2000-01-01' , '2001-01-01') ;


CREATE TABLE `song` (
	PRIMARY KEY (`song_id`),
	`song_id` INT NOT NULL AUTO_INCREMENT,
	`youtube_link` LONGTEXT NOT NULL,
    `album_id` INT NOT NULL,
    FOREIGN KEY (`album_id`) REFERENCES album(album_id),
    `artist_id` INT NOT NULL,
    FOREIGN KEY (`artist_id`) REFERENCES artist(artist_id),
    `title` VARCHAR(50) NOT NULL,
    `length` TIME NOT NULL,
    `tracker_number` INT NOT NULL,
    `lyrics` LONGTEXT,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO song VALUES (1 , 'https://www.youtube.com/embed/1VSZtyenNlA' , 1 , 1 , 'Conversations' , '00:03:01' , 2 , NULL , '2019-07-10' , '2020-07-10') ;
INSERT INTO song VALUES (2 , 'https://www.youtube.com/embed/8U_W8NmjApM' , 1 , 1 , 'Titanic' , '00:02:56' , 3 , NULL , '2019-07-10' , '2020-07-10') ;
INSERT INTO song VALUES (3 , 'https://www.youtube.com/embed/rJZynxvJnlI' , 1 , 1 , 'Fighting Demons' , '00:03:20' , 14 , NULL , '2019-07-10' , '2020-07-10') ;
INSERT INTO song VALUES (4 , 'https://www.youtube.com/embed/EfP3Ya5-JoU' , 1 , 1 , 'Bad Energy' , '00:03:06' , 4 , NULL , '2019-07-10' , '2020-07-10') ;
INSERT INTO song VALUES (5 , 'https://www.youtube.com/embed/JH398xAYpZA' , 2 , 3 , 'Alone Again' , '00:04:11' , 1 , NULL , '2019-03-20' , '2020-03-20') ;
INSERT INTO song VALUES (6 , 'https://www.youtube.com/embed/nl71vFvVOvw' , 2 , 3 , 'Too Late' , '00:04:01' , 2 , NULL , '2019-03-20' , '2020-03-20') ;
INSERT INTO song VALUES (7 , 'https://www.youtube.com/embed/fHI8X4OXluQ' , 2 , 3 , 'Blinding Lights' , '00:03:23' , 9 , NULL , '2019-03-20' , '2020-03-20') ;
INSERT INTO song VALUES (8 , 'https://www.youtube.com/embed/5hDZbroaQDc' , 3 , 7 , 'The Phoenix' , '00:04:22' , 1 , NULL , '2012-03-25' , '2013-03-25') ;
INSERT INTO song VALUES (9 , 'https://www.youtube.com/embed/LkIWmsP3c_s' , 3 , 7 , 'My Songs Know What You Did In The Dark' , '00:03:07' , 2 , NULL , '2012-03-25' , '2013-03-25') ;
INSERT INTO song VALUES (10 , 'https://www.youtube.com/embed/LFhEBmNwX_E' , 3 , 7 , 'Alone Together' , '00:04:13' , 3 , NULL , '2012-03-25' , '2013-03-25') ;
INSERT INTO song VALUES (11 , 'https://www.youtube.com/embed/xGPAv1Hq2-g' , 3 , 7 , 'The Mighty Fall' , '00:04:11' , 6 , NULL , '2012-03-25' , '2013-03-25') ;
INSERT INTO song VALUES (12 , 'https://www.youtube.com/embed/FY9v147BZuE' , 4 , 5 , 'Nobody Can Save Me' , '00:03:45' , 1 , NULL , '2016-03-17' , '2017-03-17') ;
INSERT INTO song VALUES (13 , 'https://www.youtube.com/embed/phVQZrb2AdA' , 4 , 5 , 'Good Goodbye' , '00:03:55' , 2 , NULL , '2016-03-17' , '2017-03-17') ;
INSERT INTO song VALUES (14 , 'https://www.youtube.com/embed/lvs68OKOquM' , 4 , 5 , 'Talking To Myself' , '00:03:51' , 3 , NULL , '2016-03-17' , '2017-03-17') ;
INSERT INTO song VALUES (15 , 'https://www.youtube.com/embed/D7ab595h0AU' , 4 , 5 , 'Battle Symphony' , '00:03:42' , 4 , NULL , '2016-03-17' , '2017-03-17') ;
INSERT INTO song VALUES (16 , 'https://www.youtube.com/embed/1bGI3fwz40c' , 5 , 8 , 'Aura' , '00:02:59' , 2 , NULL , '2018-04-05' , '2019-04-05') ;
INSERT INTO song VALUES (17 , 'https://www.youtube.com/embed/lhGl9D514Bc' , 5 , 8 , 'Never Go Back' , '00:02:56' , 3 , NULL , '2018-04-05' , '2019-04-05') ;
INSERT INTO song VALUES (18 , 'https://www.youtube.com/embed/CIqiB9zSLmM' , 5 , 8 , 'GFY' , '00:03:44' , 4 , NULL , '2018-04-05' , '2019-04-05') ;
INSERT INTO song VALUES (19 , 'https://www.youtube.com/embed/qUL1Ng3dj0I' , 5 , 8 , 'Runaway' , '00:03:40' , 5 , NULL , '2018-04-05' , '2019-04-05') ;
INSERT INTO song VALUES (20 , 'https://www.youtube.com/embed/c2AhsySa-8E' , 7 , 2 , 'The Ringer' , '00:05:39' , 1 , NULL , '2017-08-31' , '2018-08-31') ;
INSERT INTO song VALUES (21 , 'https://www.youtube.com/embed/QdS60of43qA' , 7 , 2 , 'Greatest' , '00:03:50' , 2 , NULL , '2017-08-31' , '2018-08-31') ;
INSERT INTO song VALUES (22 , 'https://www.youtube.com/embed/mvSItvjFE1c' , 7 , 2 , 'Lucky You' , '00:05:48' , 3 , NULL , '2017-08-31' , '2018-08-31') ;
INSERT INTO song VALUES (23 , 'https://www.youtube.com/embed/XxKpcsGz2X4' , 7 , 2 , 'Normal' , '00:03:42' , 5 , NULL , '2017-08-31' , '2018-08-31') ;
INSERT INTO song VALUES (24 , 'https://www.youtube.com/embed/VtEBRE9ul90' , 8 , 6 , 'Survival' , '00:02:16' , 1 , NULL , '2017-06-29' , '2018-06-29') ;
INSERT INTO song VALUES (25 , 'https://www.youtube.com/embed/lJTRVX9R5EA' , 8 , 6 , 'Nonstop' , '00:05:15' , 2 , NULL , '2017-06-29' , '2018-06-29') ;
INSERT INTO song VALUES (26 , 'https://www.youtube.com/embed/Ge9dWepN418' , 8 , 6 , 'Elevate' , '00:03:04' , 3 , NULL , '2017-06-29' , '2018-06-29') ;
INSERT INTO song VALUES (27 , 'https://www.youtube.com/embed/7qmenhV75is' , 9 , 10 , 'Sam Ardama' , '00:06:08' , 1 , NULL , '2019-07-19' , '2020-07-19') ;
INSERT INTO song VALUES (28 , 'https://www.youtube.com/embed/tnFrdk3GPu0' , 9 , 10 , 'Baim Lewarim' , '00:04:30' , 2 , NULL , '2019-07-19' , '2020-07-19') ;
INSERT INTO song VALUES (29 , 'https://www.youtube.com/embed/3BIlxc81XVo' , 9 , 10 , 'Aezrah Akatan' , '00:05:27' , 3 , NULL , '2019-07-19' , '2020-07-19') ;
INSERT INTO song VALUES (30 , 'https://www.youtube.com/embed/ozoDlXf2sAc' , 9 , 10 , 'Am Ehad' , '00:05:45' , 4 , NULL , '2019-07-19' , '2020-07-19') ;

CREATE TABLE `playlist` (
	PRIMARY KEY (`playlist_id`),
	`playlist_id` INT NOT NULL AUTO_INCREMENT,
	`playlist_name` VARCHAR(50) NOT NULL,
    `cover_img` LONGTEXT,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO playlist VALUES (1 , 'ALONE IN THE CAR' , NULL , '1900-01-01' , '2000-01-01') ;
INSERT INTO playlist VALUES (2 , 'GYM MODE' , NULL , '1900-01-01', '2000-01-01') ;
INSERT INTO playlist VALUES (3 , 'BEFORE SLEEPING' , NULL , '1900-01-01' , '2000-01-01') ;
INSERT INTO playlist VALUES (4 , 'HEBREW' , NULL , '1900-01-01' , '2000-01-01') ;

CREATE TABLE `playlist_song` (
	PRIMARY KEY (`playlist_song_id`),
	`playlist_song_id` INT NOT NULL AUTO_INCREMENT,
	`playlist_id` INT NOT NULL,
    FOREIGN KEY (`playlist_id`) REFERENCES playlist(playlist_id),
    `song_id` INT NOT NULL,
    FOREIGN KEY (`song_id`) REFERENCES song(song_id)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO playlist_song VALUES (1 , 1 , 27) ;
INSERT INTO playlist_song VALUES (2 , 1 , 28) ;
INSERT INTO playlist_song VALUES (3 , 1 , 29) ;
INSERT INTO playlist_song VALUES (4 , 1 , 30) ;
INSERT INTO playlist_song VALUES (5 , 2 , 1) ;
INSERT INTO playlist_song VALUES (6 , 2 , 2) ;
INSERT INTO playlist_song VALUES (7 , 2 , 3) ;
INSERT INTO playlist_song VALUES (8 , 2 , 6) ;
INSERT INTO playlist_song VALUES (9 , 3 , 10) ;
INSERT INTO playlist_song VALUES (10 , 3 , 11) ;
INSERT INTO playlist_song VALUES (11 , 3 , 17) ;
INSERT INTO playlist_song VALUES (12 , 3 , 27) ;
INSERT INTO playlist_song VALUES (13 , 4 , 27) ;
INSERT INTO playlist_song VALUES (14 , 4 , 28) ;
INSERT INTO playlist_song VALUES (15 , 4 , 29) ;
INSERT INTO playlist_song VALUES (16 , 4 , 30) ;
    
CREATE TABLE `user` (
	PRIMARY KEY (`user_id`),
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
	`password` VARCHAR(20) NOT NULL,
    `created_at` DATE NOT NULL,
    `is_admin` BOOLEAN NOT NULL,
    `preferences` JSON,
    `remember_token` BOOLEAN 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `interaction` (
	PRIMARY KEY (`interaction_id`),
	`interaction_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user`(user_id),
    `song_id` INT NOT NULL,
    FOREIGN KEY (`song_id`) REFERENCES `song`(song_id),
	`is_liked` BOOLEAN NOT NULL,
    `play_count` INT NOT NULL,
    `created_at` DATE NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;