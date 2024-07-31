import './Detail.css';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
export function Detail(){
    const [isLoading,setIsLoading] = useState(true);
    const [info,setInfo] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    //Movie로 부터 영화 id값 받기
    //id값 구하기
    const quertParams = new URLSearchParams(location.search); 
    //new URLSearchParams(location.search) => URL의 ?로 시작하는 부분을 객체로 변환
    const id = quertParams.get('id');
    //id라는 이름을 가진 쿼리파라미터 값을 가져옴

    const fetchMovies =async()=>{
        try{
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            console.log(response);
            setInfo(response.data.data.movie);
            setIsLoading(false); //로딩 완료
        }
            catch(err){
                setError(err);
            }
      }
      useEffect(
        ()=>{
          console.log('useEffect발생');
          fetchMovies();
        },[info]
      );
    //   if(error){
    //     return(
    //         <div>Error:{error.message}</div>
    //     )
    //   }
    return (
        <div className='detail'>
            {isLoading?(
                <div className='loader'>
                    <span className='loader_text'>Loading...</span>
                </div>
            ):(
                <>
                <img src={info.medium_cover_image} alt="" />
                <h2>{info.title}({info.year})</h2>
                <p>{info.description_full}</p>
                <ul>
                    {
                        info.genres.map(
                            (item,index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            }
                        )
                    }
                </ul>
            </>
            )}
        </div>
    )
}