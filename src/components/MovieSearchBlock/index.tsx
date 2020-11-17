import React, { useRef, useState } from 'react';
import { t } from '../../scripts/translateText';
import Silder from '../Slider';
import './index.scss'
interface resData {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}
interface responseType {
    Response: string,
    Search: resData[],
    totalResults: string
}
const MovieSearchBlock: React.FC = () => {
    let rootRes: responseType = { "Search": [{ "Title": "Hey Arnold!", "Year": "1996–2004", "imdbID": "tt0115200", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMzhmMjE2YTYtMTc1Ni00Nzg0LWJhNTItZWZjZDNkNjRmOTAyXkEyXkFqcGdeQXVyODMyNjA3NzQ@._V1_SX300.jpg" }, { "Title": "Hey Ram", "Year": "2000", "imdbID": "tt0222012", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BY2U3ZWVmODEtZDRiNy00YmFiLTg5ZjEtNzU2ZmJhYzQzZGQ0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg" }, { "Title": "Hey Arnold! The Movie", "Year": "2002", "imdbID": "tt0314166", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYjhlMTU0YWQtMjlkMi00MzI0LWJkYmMtNzVlMjMyYjY4ODJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Hey Pillagada", "Year": "2016", "imdbID": "tt5335128", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTQ0ODAtNDNiZC00NWM2LTgyOTItNzQwNGI1ZjM0Y2M2XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_SX300.jpg" }, { "Title": "Hey Arnold: The Jungle Movie", "Year": "2017", "imdbID": "tt5257726", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3MDE4NTMtNDY3My00MWQ4LWEwZTQtMDA1NTE0NGQ5YTcyXkEyXkFqcGdeQXVyNzQ4MzcwODk@._V1_SX300.jpg" }, { "Title": "Hey Dude", "Year": "1989–1991", "imdbID": "tt0096610", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BOTgwZDQ3MmItNDc0NC00YjAxLThlYWQtNTQ3OWJjYzlmMjNlXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg" }, { "Title": "Dragon Ball: Hey! Son Goku and Friends Return!!", "Year": "2008", "imdbID": "tt1317478", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZTRlZWZlNjEtMzgzYS00ZGJmLWIwOTMtY2Y0MzJmNWZiMGI0XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg" }, { "Title": "Bert Kreischer: Hey Big Boy", "Year": "2020", "imdbID": "tt11810424", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZDBlMGY1ZWMtYjVlOS00YzkzLWJmZjMtY2VhYjcwMDAxZGY0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, { "Title": "Hey Hey It's Esther Blueburger", "Year": "2008", "imdbID": "tt0469099", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0MDE5MDMzNF5BMl5BanBnXkFtZTcwOTQ2NTQxNw@@._V1_SX300.jpg" }, { "Title": "Hey Jude", "Year": "2018", "imdbID": "tt6385856", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjY3ZWJiYTYtYjM0OS00OGVkLWEwOTktYzRmNjkxZjQzMjcwXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg" }], "totalResults": "391", "Response": "True" }
    const inputRef = useRef<HTMLInputElement>(null);
    const [obj, setObj] = useState(rootRes);
    async function query(value: string) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=408fe5d2&s=${value}`);
        const data = await res.json();
        if (data.Response === "True") await setObj(data);

    }

    const click = () => {
        if (inputRef && inputRef.current) {
            query(inputRef.current.value)
        }
    }
    const foo = (e: any) => {
        if(e.code === "Enter"){
            click();
        }
    }
    return (
        <section className="cv__movieBlock movieBlock" onKeyPress={foo} >
            <h2>{t('search')}</h2>
            <input className="movieBlock__input" type="text" ref={inputRef} placeholder={t('enter')}/>
            <input className="movieBlock__btn" type="button" value={t('find')} onClick={click} />
            <Silder data={obj.Search}/>
        </section>
    )
}

export type { resData };
export default MovieSearchBlock;