CREATE DEFINER=`root`@`localhost` PROCEDURE `getTopArtists`()
BEGIN
	SELECT *
    FROM artist
    LIMIT 20
    OFFSET 0
    ;
END