export const Player = ({fn, song})=>{
    console.log("Song object recieved ", song);
    return(
        <div>
            <button onClick = {()=>{
                fn(false, null);
            }} className="btn btn-success">Back to Songs</button>

            <p>
                <img src={song.artworkUrl100} alt="" />
                <br/>
                {song.artistName} {song.trackName}
            </p>

            <br/>
            <br/>

            <audio controls>
                <source src={song.previewUrl} type="audio/mp4"/>
                Your Browser Does not support the audio Element
            </audio>
        </div>
    )
}