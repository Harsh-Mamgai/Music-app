import { Song } from "./Song.jsx"
export const Songs = ({fn, allSongs})=>{
    //allSongs is songs ke objects ka array
    console.log("***songs ", allSongs);
    return(
        <>
           {allSongs.map((currentSong)=>
            <Song fn = {fn} song = {currentSong} />
           )} 
        </>
    )
}