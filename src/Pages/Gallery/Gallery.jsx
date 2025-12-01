import React, { useState } from 'react'
import { gallerybg } from '../../Assets'
import { Landing } from '../../Containers'
import './Gallery.css'

const importAll = (r) => r.keys().map(r)
const images = importAll(require.context('../../Assets/Gallery', false, /\.(png|jpe?g|svg)$/))

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <Landing 
        heading="Our Projects"
        subheading="Experience that Matters"
        text="We remain a modern provider of Construction and Maintenance services, using the latest technologies."
        bg={gallerybg}
      />

      <div className="content__padding extrude__home-gallery__images">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`project ${index + 1}`} 
            onClick={() => openLightbox(index)} 
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <img
            src={images[activeIndex]}
            alt="preview"
            style={{
              maxWidth: '85%',
              maxHeight: '85%',
              borderRadius: '8px',
              transition: 'transform 0.3s ease',
              transform: 'scale(1.05)'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            style={{
              position: 'absolute',
              left: '30px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              padding: '12px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            style={{
              position: 'absolute',
              right: '30px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              padding: '12px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery