import React from 'react';

function Modal({children, setSelectedImg}) {
    return (
        <div className="modal" onClick={() => setSelectedImg(null)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={() => setSelectedImg(null)}>Close</button>
            </div>
        </div>
    );
}

export default Modal;