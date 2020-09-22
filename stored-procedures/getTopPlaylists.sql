CREATE DEFINER=`root`@`localhost` PROCEDURE `getTopPlaylists`()
BEGIN
	SELECT *
    FROM playlist
    LIMIT 20
    OFFSET 0
    ;
END