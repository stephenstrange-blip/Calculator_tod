import './sideBar.css'

function SideBar (onNumClick) {
  return (
    <div className='side-bar'>
      <button className='numGrid clear operator' onClick={onNumClick}>clr</button>
      <button className='numGrid multiplication operator' onClick={onNumClick}>*</button>
      <button className='numGrid buttonision operator' onClick={onNumClick}>/</button>
      
    </div>
  )
}

export default SideBar