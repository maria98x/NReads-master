import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchBook ,updateBook} from "./Api";
import Card from "./Card";


export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [] 
     
     }
     this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  setSearch(e){
    searchBook(e.target.value).then((data)=>{
      if (data.error) {
        this.setState({ books: [] });
      } else {
        this.setState({ books: data });
      }
     console.log(data)
    })

  }

  onChangeHandler(id, e) {
    updateBook(id, e.target.value);

    
  }


  render() { 

    return (     <div className="main">
    <div className="search-container">
      <div className="search-container-bar">
       <Link to="/"> <button className="close-btn-bar">
          Close </button></Link> 
        <div className="input-wrapper">
          <input onChange={(e)=> {this.setSearch(e)}} type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="search-results">
        <ol className="books-box">
         
         {
           this.state.books.map((book,index)=>{
            
             var img = "https://www.colorhexa.com/443174.png"
             var auth = " "
            if (book.hasOwnProperty("authors")){
              auth= book.authors[0]
            }
            if (book.hasOwnProperty("imageLinks")){
              img =book.imageLinks.thumbnail
              console.log(img)
            }
            return <Card
            key={index}
            shelfState ={book.shelf}
            onChangeHandler={this.onChangeHandler}
            id={book.id}
            title={book.title}
            author={auth}
            img={img}
          />

           })
         }
         

        </ol>
      </div>
    </div>
  </div> );
  }
}
 