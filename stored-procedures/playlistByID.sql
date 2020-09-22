CREATE DEFINER=`root`@`localhost` PROCEDURE `playlistByID`(
IN id INT )
BEGIN
	SELECT ps.* , p.playlist_name , s.title , s.length
    FROM playlist_song ps
    JOIN playlist p
    ON ps.playlist_id = p.playlist_id
    JOIN song s
    ON ps.song_id = s.song_id
    WHERE ps.playlist_id = id
    ;
END