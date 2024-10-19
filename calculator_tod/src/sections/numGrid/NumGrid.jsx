import './numGrid.css';
import SideBar from '../operatorPad/SideBar';



function NumGrid(onNumClick) {
    return (
        <div className='upper-container'>
            <div className='numPad'>
                {[0, 1, 2].map((row) => {
                    return (
                        <div className={`gridRow number${row}`} key={row}>
                            {[9, 8, 7].map((column) => {
                                let index = column - row * 3;
                                return (<button 
                                    
                                    className={`numGrid number${index}`} 
                                    key={index}
                                    onClick={onNumClick}

                                    >{index}</button>)
                            })
                            }
                        </div>
                    )
                })}
            </div>
            <SideBar />

        </div>

    )
}
export default NumGrid;



