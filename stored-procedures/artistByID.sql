CREATE DEFINER=`root`@`localhost` PROCEDURE `artistByID`(
IN id INT )
BEGIN
	SELECT ar.artist_id , ar.artist_name , ar.cover_img , s.song_id , s.title , s.length
    FROM song s
    JOIN album al
    ON s.album_id = al.album_id
    JOIN artist ar
    ON s.artist_id = ar.artist_id
    WHERE s.artist_id = id 
    ;
END