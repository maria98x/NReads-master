import React, { Component } from "react";
import { updateBook, getAllBooks ,getOneBook} from "./Api";
import "./App.css";
import Books from "./Books";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(id,e) {
    updateBook(id, e.target.value);
    var updatedBooks = this.state.books.filter( (resultBook) => resultBook.id !==id);
    //المشكلة شكلها هنا
    getOneBook(id).then((data)=>{
      var book =data;
      book.shelf = e.target.value;
      updatedBooks.push(book);
      
    });
   
    this.setState({ books: updatedBooks });
  }

  

  componentDidMount() {
    getAllBooks().then((data) => {
      this.setState({ books: data });
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
            <button>Add a book</button>
          </div>
        </div>
      </div>
    );
  }
}
