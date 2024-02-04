import React from 'react'

export const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <video className="embla-thumbs__slide__img" >
            <source src={imgSrc} type="video/mp4" />
        </video>

        {/* <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        /> */}
      </button>
    </div>
  )
}
