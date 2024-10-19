import './bottomBar.css'

function BottomBar () {
  return (
    <div className='bottom-bar'>
      <div className='numGrid zero'>0</div>
      <div className='numGrid addition operator'>+</div>
      <div className='numGrid subtraction operator'>-</div>
      <div className='numGrid equate operator'>=</div>
    </div>
  )
}

export default BottomBar