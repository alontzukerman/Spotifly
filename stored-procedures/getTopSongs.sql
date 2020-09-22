CREATE DEFINER=`root`@`localhost` PROCEDURE `getTopSongs`()
BEGIN
	SELECT *
    FROM song
    LIMIT 20
    OFFSET 0
    ;
END