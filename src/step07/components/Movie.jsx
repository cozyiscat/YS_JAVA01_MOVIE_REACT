import './Movie.css';
import { Link } from 'react-router-dom';

//Home에서 읽은 데이터를 Props로 전달받아서 화면에 출력
export function Movie({id,year,title,summary,poster,genres}){
    return(
        <div className='movie'>
            <Link to={`/detail?id=${id}`}>
            <img src={poster} alt={title} />
            <div className='movie_data'>
                <h3 className='movie_title'>{title}</h3>
                <h5 className='movie_year'>{year}</h5>
                <p className='movie_summery'>{summary.slice(0,180)}...</p>
                <ul className='movie_genres'>
                {
                    genres.map(
                        (genre,index)=>(
                            <li key={index} className='movie_genre'>{genre}</li>
                        )
                    )
                }
                </ul>
            </div>
            </Link>
        </div>
    )
}