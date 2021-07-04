import React from 'react'
import moment from 'moment'
import Placeholder from '../../images/placeholder.png'
import './index.scss'

const Modal = ({ visible=false, movie, setVisible }) => {
    if(!visible) return null
    const { title, poster_path, overview, vote_average, vote_count, release_date } = movie
    const imgSrc = poster_path ?  `${process.env.REACT_APP_API_BASE_IMAGE_URL}${poster_path}` : Placeholder
    const closeModal = () => {
        setVisible(false)
    }
    return(
        <div className="modal">
            <div className="modal__content">
                <div className="modal__box">
                    <button className="modal__close-icon" onClick={closeModal}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L7 5.93934L12.2197 0.71967C12.5126 0.426777 12.9874 0.426777 13.2803 0.71967C13.5732 1.01256 13.5732 1.48744 13.2803 1.78033L8.06066 7L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L7 8.06066L1.78033 13.2803C1.48744 13.5732 1.01256 13.5732 0.71967 13.2803C0.426777 12.9874 0.426777 12.5126 0.71967 12.2197L5.93934 7L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#141E35"/>
                        </svg>
                    </button>
                    <h3 className="modal__movie-title">{title}</h3>
                    <div className="modal__box-info">
                        <img src={imgSrc} alt={`Poster for ${title}`} className="modal__box-image"/>
                        <div className="modal__box-details">
                            <p><span>Release date</span>{`: ${moment(release_date).format('LL')}`}</p>
                            <p>{overview}</p>
                            <p><span>{vote_average}</span>{`  / 10 (${vote_count} total votes)`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal