import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
export default function Albums() {
    const [albums, setAlbums] = useState([]);
    async function getAlbums(){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
    }
    useEffect(()=>{
        getAlbums();
    }, [])
  return (
    <div>
        <h1>Albums</h1>
        <ul>
            {albums.map((album: any) => (
                <li key={album.id}>{album.title} <Link to={`/album/${album.id}`}>View</Link></li>
            ))}
        </ul>
    </div>
    )
}