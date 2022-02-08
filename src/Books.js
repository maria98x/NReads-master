import React, { Component } from "react";
import Card from "./Card";
export default function Books(props) {
  
const {books , shelfState , onChangeHandler} = props;

    return (
      
      <div className="books-box">
        {
        
        books
          .filter((book) => book.shelf === shelfState)
          .map((book1, index) => {
         
            return (
              <Card
                key={index}
                shelfState ={shelfState}
                onChangeHandler={onChangeHandler}
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