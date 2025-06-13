import { useState, useEffect } from 'react';
import type { Movie } from '../../services/movies';
import { userMoviesService } from '../../services/userMovies';

interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isWatched, setIsWatched] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const userRating = userMoviesService.getMovieRating(movie.id);
    if (userRating) {
      setRating(userRating);
    }
    setIsWatched(userMoviesService.isWatched(movie.id));
    setIsInWatchlist(userMoviesService.isInWatchlist(movie.id));
  }, [movie.id]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    userMoviesService.rateMovie(movie.id, newRating);
  };

  const handleToggleWatched = () => {
    if (isWatched) {
      userMoviesService.unmarkAsWatched(movie.id);
      setRating(0);
    } else {
      userMoviesService.markAsWatched({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path || '',
        watched: true,
        watchlist: false
      });
    }
    setIsWatched(!isWatched);
  };

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      userMoviesService.removeFromWatchlist(movie.id);
    } else {
      userMoviesService.addToWatchlist({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path || '',
        watched: false,
        watchlist: true
      });
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center px-4 py-2 bg-[#e50914] text-white rounded-lg hover:bg-[#f40612] transition-colors"
      >
        View Details
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-[#1a1a1a] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="sm:flex">
                  <div className="sm:w-1/3">
                    <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/poster-placeholder.jpg'}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-300 mb-4">
                      <span>{new Date(movie.release_date).getFullYear()}</span>
                      <span>•</span>
                      <span>{movie.vote_average.toFixed(1)}/10</span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-2 text-white">{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(10)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                          <button
                            key={index}
                            type="button"
                            className="focus:outline-none"
                            onClick={() => handleRatingChange(ratingValue)}
                            onMouseEnter={() => setHoverRating(ratingValue)}
                            onMouseLeave={() => setHoverRating(0)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-8 w-8 ${
                                ratingValue <= (hoverRating || rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-400'
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex space-x-4 mb-4">
                      <button
                        onClick={handleToggleWatched}
                        className={`px-4 py-2 rounded-lg ${
                          isWatched
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                      >
                        {isWatched ? '✓ Vista' : 'Marcar como vista'}
                      </button>
                      
                      <button
                        onClick={handleToggleWatchlist}
                        className={`px-4 py-2 rounded-lg ${
                          isInWatchlist
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                      >
                        {isInWatchlist ? '✓ En Watchlist' : 'Agregar a Watchlist'}
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">
                      {rating ? `Tu calificación: ${rating}/10` : 'Califica esta película'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 