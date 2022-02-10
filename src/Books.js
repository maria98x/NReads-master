import React from "react";
import Card from "./Card";
export default function Books(props) {
  
    return (
      
      <div className="line">
        {
       
        props.books
          .filter((book) => book.shelf === props.shelfState)
          .map((book1, index) => {
         
            return (
              <Card
                key={index}
                shelfState ={props.shelfState}
                onChangeHandler={props.onChangeHandler}
                id={book1.id}
                title={book1.title}
                author={book1.authors[0]}
                img={book1.imageLinks.thumbnail}
              />
            );
          })}
      </div>
    );
  
}