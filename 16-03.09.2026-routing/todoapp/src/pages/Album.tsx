import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
interface Album {
  id?: number;
  title?: string;
}
export default function Album() {
  const { id } = useParams();
  const[albums, setAlbums] = useState<Album[]>([]);
  const [album, setAlbum] = useState<Album | null>(null);


  async function getAlbums(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    setAlbums(data);

    let item = data.find((album: Album) => album.id === Number(id));
    setAlbum(item || null);
  }

  useEffect(() => {
    getAlbums();
  }, [id]);

  return (
    <div>
      <h1>Album {id}</h1>
      <p>{album?.id}</p>
      <p>{album?.title}</p>
    </div>
  );
}