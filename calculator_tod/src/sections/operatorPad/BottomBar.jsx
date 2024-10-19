import './bottomBar.css'

function BottomBar () {
  return (
    <div className='bottom-bar'>
      <button className='numGrid zero'>0</button>
      <button className='numGrid addition operator'>+</button>
      <button className='numGrid subtraction operator'>-</button>
      <button className='numGrid equate operator'>=</button>
    </div>
  )
}

export default BottomBar