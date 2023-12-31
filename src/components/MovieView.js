import Hero from './Hero'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

//Fetch movie details- https://api.themoviedb.org/3/movie/157336?api_key=b30300bf291c546bd371b52507aec49b

const MovieView = () => {
    const {id} = useParams();
    const [movieDetails,setMovieDetails] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b30300bf291c546bd371b52507aec49b`)
        .then(response=>response.json())
        .then(data=>{
            setMovieDetails(data);
                setIsLoading(false);
        })
    },[id]);

    function renderMovieDetails(){

        const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl=`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
        let detailUrl = `https://www.google.com/search?q=${movieDetails.original_title}&sxsrf=AB5stBg3VPW4a1oBTK6P0oxgcQr6pJlNTQ%3A1690622092085&source=hp&ei=jNjEZIfvArvC1e8PzfmxkAU&iflsig=AD69kcEAAAAAZMTmnFJWymKvBmlaTE4oVRUtjYRKFpR7&oq=The+&gs_lp=Egdnd3Mtd2l6IgRUaGUgKgIIATIHECMYigUYJzIHECMYigUYJzIEECMYJzIHEC4YigUYQzINEC4YigUYsQMYgwEYQzIHEC4YigUYQzINEC4YigUYsQMYgwEYQzIHEC4YigUYQzIHEC4YigUYQzINEC4YigUYsQMYgwEYQ0jmKFDPEFisF3ABeACQAQCYAaMBoAGcBKoBAzAuNLgBAcgBAPgBAagCCsICBxAjGOoCGCc&sclient=gws-wiz`;
        if(movieDetails.homepage){
            detailUrl=movieDetails.homepage;
        }
        let genres = undefined;
        if(movieDetails.genres !== undefined){
            genres = movieDetails.genres.map((obj,i)=>{
                if(i===0){
                    return obj.name;
                }else{
                    return ', '+ obj.name;
                }
            });
        }

        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={posterUrl} alt='...' className='img-fluid rounded shadow'/>
                            </div>
                            <div className='col-md-9'>
                                <h3>
                                    {movieDetails.original_title}
                                </h3>
                                <p className='lead'>
                                    <strong>{genres} </strong><br />
                                    <strong>Overview- </strong>{movieDetails.overview}<br/>
                                    <strong>Original Language- </strong>{movieDetails.original_language}<br/>
                                    <strong>Release date- </strong>{movieDetails.release_date}<br/>
                                    <strong>Runtime- </strong>{movieDetails.runtime} mins<br/>
                                    <strong>Avg Rating- </strong>{movieDetails.vote_average}/10<br/>
                                    <strong>More- </strong><a href={detailUrl}>{movieDetails.homepage? movieDetails.homepage : "Look up on Google"}</a><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }


    return renderMovieDetails();
}

export default MovieView;