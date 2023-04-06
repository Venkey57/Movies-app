import React, { Component} from 'react';
import {getMovies} from './services/fakeMovieService.js'
import Pagination from './common/Pagination'



class Movie extends Component{

     state = {

        movies : getMovies(),
        currentPage:1,
        pageSize:3
    }

    handleDelete = (movie) => {
        //console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        console.log(movies)
        this.setState({ movies : movies})
    }

    handlePageChange = (page) => {
      //console.log(page)
      this.setState({currentPage:page});
    }


    render(){  
        const {length:count} = this.state.movies
        const {pageSize,currentPage} = this.state
        if(count === 0)
            return <p>There is no movies in the database</p>;

         return(
            <React.Fragment>
        <div>
            <p>Showing {count} movies in the database</p>
            <table className="table">
            <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  </thead> 
  <tbody>{
      this.state.movies.map(movie => (
        
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>   
        ))   
      }
  
</tbody>
</table>
  <Pagination
     itemsCount = {count}
     pageSize = {pageSize}
     currentPage = {currentPage}
     onPageChange = {this.handlePageChange}
    />
           </div> 
            </React.Fragment>
       
            )
    }

}

export default  Movie;