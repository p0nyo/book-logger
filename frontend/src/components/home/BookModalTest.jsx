import React from 'react'

const BookModalTest = ({ onClose }) => {
    return (
        <div onClick={(event) => event.stopPropagation()}
        >
            <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
                onClick={onClose}
            >
                <div onClick={(event) => event.stopPropagation()}
                >
                    <button className='border-2 bg-white'
                        onClick={onClose}
                    >
                        button</button>
                </div>
            </div>
        </div>
    )
}

export default BookModalTest