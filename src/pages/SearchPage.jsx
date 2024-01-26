import { useState } from "react";
import { Search } from "../components/Search.jsx"
import { Songs } from "../components/Songs.jsx"
import { getSongs } from "../services/api-client.js";
import { useEffect } from "react";
import { Player } from "../components/Player.jsx";

export const SearchPage = ()=>{
    const [allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [song, setPlayerSong] = useState(null);

    const loadSongs = async ()=>{
        setSongs(await getSongs('Latest Songs'));//it returns objects array of Latest Songs
    }

    //component life cycle hook. when component mounts on the screen it runs
    useEffect(()=>{
        loadSongs();
    }, [])

    const togglePlayer = (flag, songarg)=>{
        console.log("Flag ", flag, "Song Object ", songarg);
        setPlayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName = async (artistName)=>{
        console.log("Rec Artist Name ", artistName);
        setSongs(await getSongs(artistName));//it returns object array of songs
    }
    return(
        <div className='container'>{/*bootstrap container class gives indentation*/}
            <h1 className="alert alert-info text-center">Music App</h1>{/*alert alert-info class of bootstrap gives color. text-center class of bootstrap centers the text*/}
            
            {flag ? <Player song = {song} fn = {togglePlayer} /> : <div><Search fn = {getArtistName}/>
            <Songs fn = {togglePlayer} allSongs = {allSongs}/>{/*passing songs objects array as props*/} </div>}
            
        </div>
    )
}