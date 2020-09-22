CREATE DEFINER=`root`@`localhost` PROCEDURE `albumsOfArtistByID`(
IN id INT )
BEGIN
	SELECT al.* , ar.artist_name
    FROM album al 
    JOIN artist ar
    ON al.artist_id = ar.artist_id
    WHERE al.artist_id = id
    ;
END