import { useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return(
        <>
            <label>Artist Name</label>
            {/*form-control class of bootstrap*/}
            <input ref = {artist} className = "form-control" type="text" placeholder="Search Artist Wise Song" />
            <button className="btn btn-success" onClick={()=>{
                fn(artist.current.value);
            }}>Search It</button>
        </>
    )
}