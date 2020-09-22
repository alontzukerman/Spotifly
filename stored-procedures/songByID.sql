CREATE DEFINER=`root`@`localhost` PROCEDURE `songByID`(
IN id INT )
BEGIN
	SELECT s.* , ar.artist_name
    FROM song s
    JOIN artist ar
    ON s.artist_id = ar.artist_id
    WHERE song_id = id
    ;
END