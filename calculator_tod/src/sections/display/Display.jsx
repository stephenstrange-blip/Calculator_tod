import './display.css'
import React, { Component } from 'react';
import onNumClick from '../core/calcFunctions';

function Display({value}) {
  
  return (
    <div className='display' key={1}>{value}</div>
  )
}



export default Display