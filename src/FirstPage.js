import React, { Component } from "react";
import { updateBook, getAllBooks } from "./Api";
import { Link } from "react-router-dom";
import "./App.css";
import Books from "./Books";

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  async onChangeHandler(id, e) {
    await updateBook(id, e.target.value);
     getAllBooks().then((data) => {
      var updatedBooks = data;
      this.setState({ books: updatedBooks });
      console.log(updatedBooks)
    });
  }

  componentDidMount() {
    getAllBooks().then((data) => {
      this.setState({ books: data });
      console.log(data)
    });


  }

  render() {

    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
          <div className="books-list_content">
            <div>
              <div className="shelf">
                <h2 className="shelf-title">Currently Reading</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    
                    <Books
                      books={this.state.books}
                      shelfState="currentlyReading"
                      onChangeHandler={this.onChangeHandler}
                    />
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Want to Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    <Books
                      books={this.state.books}
                      shelfState="wantToRead"
                      onChangeHandler={this.onChangeHandler}
                    />
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    <Books
                      books={this.state.books}
                      shelfState="read"
                      onChangeHandler={this.onChangeHandler}
                    />
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="search-btn">
          <Link to="/SearchPage"> <button> S </button></Link>

          

          </div>
        </div>

        
      </div>
      
    );
    

  }
  
}
