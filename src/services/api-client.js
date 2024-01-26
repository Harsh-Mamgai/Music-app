import axios from 'axios';
export async function getSongs(termName){
    //this api we get by searching itunes api in google then open first tab search option then search examples option we took 2nd api or url. this api gives songs in json response according to the name of the artist in the url  
    const URL = `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const response = await axios.get(URL);
    //console.log(response);//uncomment this to view how your json comes by default so we can destructure from it
    console.log(response.data['results']);//destructured here the songs object array from json object
    return response.data['results'];
}