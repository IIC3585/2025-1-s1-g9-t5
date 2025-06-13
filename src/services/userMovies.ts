interface UserMovie {
  id: number;
  title: string;
  poster_path: string;
  rating?: number;
  watched: boolean;
  watchlist: boolean;
}

class UserMoviesService {
  private watchedMovies: UserMovie[] = [];
  private watchlistMovies: UserMovie[] = [];
  private isClient: boolean;

  constructor() {
    this.isClient = typeof window !== 'undefined';
    if (this.isClient) {
      this.loadFromStorage();
    }
  }

  private loadFromStorage() {
    if (!this.isClient) return;
    
    const watched = localStorage.getItem('watchedMovies');
    const watchlist = localStorage.getItem('watchlistMovies');
    
    if (watched) this.watchedMovies = JSON.parse(watched);
    if (watchlist) this.watchlistMovies = JSON.parse(watchlist);
  }

  private saveToStorage() {
    if (!this.isClient) return;
    
    localStorage.setItem('watchedMovies', JSON.stringify(this.watchedMovies));
    localStorage.setItem('watchlistMovies', JSON.stringify(this.watchlistMovies));
  }

  markAsWatched(movie: UserMovie) {
    const existingIndex = this.watchedMovies.findIndex(m => m.id === movie.id);
    if (existingIndex === -1) {
      this.watchedMovies.push({ ...movie, watched: true, watchlist: false });
    }
    // Remover de watchlist si está ahí
    this.watchlistMovies = this.watchlistMovies.filter(m => m.id !== movie.id);
    this.saveToStorage();
  }

  unmarkAsWatched(movieId: number) {
    this.watchedMovies = this.watchedMovies.filter(m => m.id !== movieId);
    this.saveToStorage();
  }

  addToWatchlist(movie: UserMovie) {
    const existingIndex = this.watchlistMovies.findIndex(m => m.id === movie.id);
    if (existingIndex === -1) {
      this.watchlistMovies.push({ ...movie, watched: false, watchlist: true });
    }
    this.saveToStorage();
  }

  removeFromWatchlist(movieId: number) {
    this.watchlistMovies = this.watchlistMovies.filter(m => m.id !== movieId);
    this.saveToStorage();
  }

  rateMovie(movieId: number, rating: number) {
    const movie = this.watchedMovies.find(m => m.id === movieId);
    if (movie) {
      movie.rating = rating;
      this.saveToStorage();
    }
  }

  getWatchedMovies(): UserMovie[] {
    if (!this.isClient) return [];
    return this.watchedMovies;
  }

  getWatchlistMovies(): UserMovie[] {
    if (!this.isClient) return [];
    return this.watchlistMovies;
  }

  isWatched(movieId: number): boolean {
    if (!this.isClient) return false;
    return this.watchedMovies.some(m => m.id === movieId);
  }

  isInWatchlist(movieId: number): boolean {
    if (!this.isClient) return false;
    return this.watchlistMovies.some(m => m.id === movieId);
  }

  getMovieRating(movieId: number): number | undefined {
    if (!this.isClient) return undefined;
    const movie = this.watchedMovies.find(m => m.id === movieId);
    return movie?.rating;
  }
}

export const userMoviesService = new UserMoviesService(); 