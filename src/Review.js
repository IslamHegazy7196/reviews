import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setindex]=useState(0);
  const {name, job, image, text}=people[index];

  const checknumber =(number)=>{

    if (number<0) {return people.length-1;}
    if (number>people.length-1) {return 0;}
    return number;
  };
  const prevperson =()=>{
    setindex((index)=>{
      let newindex=index-1;
      return checknumber(newindex);
    });
  };
  const nextperson =()=>{
    setindex((index)=>{
      let newindex=index+1;
      return checknumber(newindex);
    });
  };
  const randomperson = ()=>{
    let randomnumber =Math.floor(Math.random() * people.length);
    if (randomnumber===index) {
      randomnumber=index+1
    }
    return (
      setindex(checknumber(randomnumber))
    );
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevperson}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nextperson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randomperson}>surprise me</button>
    </article>
  );
};

export default Review;
