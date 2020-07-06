import React from 'react'
import ReactDOM from 'react-dom'
function TampilanDua(){
    return ReactDOM.createPortal(
        <div>
            <h3>Hello World</h3>
        </div>,
        document.getElementById('tampilanDua')
    )
}

export default TampilanDua