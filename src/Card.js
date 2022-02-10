import React from "react";
import "./App.css";


export default function Card (props){

    return (
       <li>
       <div className="book">
         <div className="book-position">
           <div
             className="book-cover"
             style={{
               width: 128,
               height: 193,
               backgroundImage:
                 `url(${props.img})`,
             }}
           ></div>
           <div className="shelf-shfiter">
             <select onChange={(e)=>{
               props.onChangeHandler(props.id,e)
             }} value={props.shelfState}>
               <option value="move" disabled>
                 Move to...
               </option>
               <option value="currentlyReading">
                 Currently Reading
               </option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">
          {props.title}
         </div>
         <div className="book-author">  {props.author}</div>
       </div>
     </li>)   
  

           }