import { useEffect, useState } from 'react'
import styles from './ImageSlider.module.css'

interface ImageSliderProps {
  images: string[]
  interval?: number
}

export default function ImageSlider({ images, interval = 2000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  )
}
