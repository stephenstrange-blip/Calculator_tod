import './bottomBar.css'

function BottomBar ({onNumClick, onOperatorClick}) {
  return (
    <div className='bottom-bar'>
      <button className='numGrid zero' onClick={() => onNumClick(0)}>0</button>
      <button className='numGrid addition operator' onClick= {() => onOperatorClick("add")}>+</button>
      <button className='numGrid subtraction operator' onClick= {() => onOperatorClick("subtract")} >-</button>
      <button className='numGrid equate operator' onClick= {() => onOperatorClick("compute")}>=</button>
    </div>
  )
}

export default BottomBar