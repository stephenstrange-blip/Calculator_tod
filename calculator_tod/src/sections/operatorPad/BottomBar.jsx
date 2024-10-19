import './bottomBar.css'

function BottomBar (onNumClick) {
  return (
    <div className='bottom-bar'>
      <button className='numGrid zero' onClick={() => onNumClick(0)}>0</button>
      <button className='numGrid addition operator' onClick={onNumClick}>+</button>
      <button className='numGrid subtraction operator' onClick={onNumClick}>-</button>
      <button className='numGrid equate operator' onClick={onNumClick}>=</button>
    </div>
  )
}

export default BottomBar