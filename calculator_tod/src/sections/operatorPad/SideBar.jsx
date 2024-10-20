import './sideBar.css'

function SideBar ({onOperatorClick}) {
  return (
    <div className='side-bar'>
      <button className='numGrid clear operator'onClick= {() => onOperatorClick("clear")} >clr</button>
      <button className='numGrid multiplication operator'onClick= {() => onOperatorClick("multiply")} >*</button>
      <button className='numGrid division operator' onClick= {() => onOperatorClick("divide")}>/</button>
      
    </div>
  )
}

export default SideBar