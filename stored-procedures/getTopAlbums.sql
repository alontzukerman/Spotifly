CREATE DEFINER=`root`@`localhost` PROCEDURE `getTopAlbums`()
BEGIN
	SELECT *
    FROM album
    LIMIT 20
    OFFSET 0
    ;
END