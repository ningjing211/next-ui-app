'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './EmblaCarouselThumbsButton'
import { flushSync } from 'react-dom';
import Autoplay from 'embla-carousel-autoplay';

const TWEEN_FACTOR = 4.2;

const video1 = '/video-c-1.mp4';
const video2 = '/video-c-2.mp4';
const video3 = '/video-c-3.mp4';

// const video1 = '/video-v-1'; const video2 = '/video-v-2'; const video3 = '/video-v-3';


const videos = [video1, video2, video3];

const imageByIndex = (index) => videos[index % videos.length];

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)


  const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: 'keepSnaps',
      dragFree: true
    })
  
    const onThumbClick = useCallback(
      (index) => {
        if (!emblaMainApi || !emblaThumbsApi) return
        emblaMainApi.scrollTo(index)
      },
      [emblaMainApi, emblaThumbsApi]
    )
  
    const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return
      setSelectedIndex(emblaMainApi.selectedScrollSnap())
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])
  
    useEffect(() => {
      if (!emblaMainApi) return
      onSelect()
      emblaMainApi.on('select', onSelect)
      emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])
  
    return (
      <div className="embla embla_c" >
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>

                {/* <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                /> */}

                <video className="embla__slide__img w-auto" autoPlay muted loop controls>
                    <source src={imageByIndex(index)} type="video/mp4" />
                </video>
                
              </div>
            ))}
          </div>
        </div>
  
        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.map((index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={imageByIndex(index)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default EmblaCarousel
  
