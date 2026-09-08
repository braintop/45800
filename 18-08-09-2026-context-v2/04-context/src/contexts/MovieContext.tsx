import {createContext, useState}from 'react'


interface MovieContextType{
    movies:string[];
    addMovie:(movie:string)=>void; 
    removeMovie:(movie:string)=>void;
    clearMovies:()=>void; 
}

export const MovieContext = createContext<MovieContextType>({
    movies:[],
    addMovie:()=>{}, 
    removeMovie:()=>{},
    clearMovies:()=>{},
})

export function MovieProvider({children}:{children:React.ReactNode}){
    const[movies, setMovies]= useState<string[]>([]);

    const addMovie = (movie:string)=>{
        setMovies([...movies, movie]);
    }

    const removeMovie = (movie:string)=>{
        let newMovies = movies.filter((m)=>m !== movie);
        setMovies(newMovies);
    }
    const clearMovies = ()=>{
        setMovies([]);
    }

    return(
        <MovieContext.Provider value={{movies, addMovie, removeMovie, clearMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

