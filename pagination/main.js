import React, { Component } from "react"
import Page from "./page"
import { paginate } from "./pagnate"
class Table extends Component {
    state = {
            movies: [],
            pagesize: 3,
            currentpage: 1
        }
   

    componentDidMount() {
        fetch('http://localhost:3004/movies').then(data => data.json()).then(data => this.setState({ movies: data }))
    }
    handleDelete = (movie) => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        console.log(movies)
        this.setState({ movies: movies })
    }
    handlePageChange = (page) => {
        this.setState({ currentpage: page });
    }

    render() {
        const { length: count } = this.state.movies
        const { pagesize, currentpage,movies:allmovies } = this.state
        const movies=paginate(allmovies,currentpage,pagesize)
        console.log(movies)
        if(count===0){
            return <p>there No data in list</p> 
        }
        return (
            <>
                
                <table className="table" >
                    <thead style={{ background: 'red' }}>
                        <tr>
                            <td>Title</td>
                            <td>Gendre</td>
                            <td>Stock</td>
                            <td>Rate</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                
                        {movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <Page
                    pageSize={pagesize}
                    itemcount={count}
                    currentpage={currentpage}
                    onPageChange={this.handlePageChange}></Page>
            </>
        )
    }
}
export default Table;
