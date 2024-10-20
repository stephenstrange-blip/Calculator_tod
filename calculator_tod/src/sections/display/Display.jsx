import './display.css'
import React, { Component } from 'react';
// import onNumClick from '../core/calcFunctions';

function Display({value, operator}) {
  
  return (
    <div className='display' key={1}>{value + ' ' + operator}</div>
  )
}



export default Display