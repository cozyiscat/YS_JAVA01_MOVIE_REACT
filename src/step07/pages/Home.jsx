//Home 목록페이지
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import './Home.css';
import { useState,useEffect } from 'react';
import axios from 'axios'; //데이터 읽어오기
import {Movie} from '../components/Movie';
export function Home() {
  //상태변수를 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  const [movies, setMovies] = useState(null);
  //axios 데이터 읽어오기
  const fetchMovies =async()=>{ //async , await 비동기적으로 처리
    const response = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }
  useEffect(
    ()=>{
      console.log('useEffect발생');
      console.log('fetchMovies 호출');
      fetchMovies();
    },[loadCounter]
  );

  function displayMovies(){
    return(
      <div>
      <h1>Movie List(Home)</h1>
      <ul className='movies'>
          {
            //map(반복함수) 사용하여 영화정보를 props로 전달
            movies.map(item=>{
             return(
              <Movie key={item.id}
                    title= {item.title}
                    id= {item.id}
                    year = {item.year}
                    summary= {item.summary}
                    poster= {item.medium_cover_image}
                    genres= {item.genres}
              />
             );
            })
          }
      </ul>
      </div>
    )
  }

  return (
   <div>
    {/* isLoading state를 사용하여 데이터를 완전히 읽은 후 화면출력 */}
    {isLoading? `Loading... ${loadCounter}`:displayMovies()}
   </div>
  );
}

