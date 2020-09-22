CREATE DEFINER=`root`@`localhost` PROCEDURE `albumByID`(
IN id INT )
BEGIN
	SELECT al.album_id , al.album_name , al.cover_img , ar.artist_id , ar.artist_name , s.song_id , s.title , s.length
    FROM album al
    JOIN artist ar
    ON al.artist_id = ar.artist_id
    JOIN song s
    ON al.album_id = s.album_id
    WHERE al.album_id = id 
    ;
END