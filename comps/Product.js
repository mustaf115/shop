import ImageGallery from 'react-image-gallery'
import { useState } from 'react'

const Product = ({ product: { images, name } }) => {
  const [currentPic, setCurrentPic] = useState(0)

  const changePic = (i) => setCurrentPic(i)

  return (
    <section className="product">
      <div className="gallery">
        <div className="thumbnails">
          {
            images.map( (img, i) => 
            <div className={ currentPic === i ? 'thumbnail picked' : 'thumbnail' } key={i}>
                <img onClick={ () => changePic(i) } src={img} alt={name + i} />
              </div> )
          }
        </div>
        <div className="mainpic">
          <img src={images[currentPic]} />
        </div>
      </div>
      <div className="info">
        <h1 className="title">{name}</h1>
        dupa
      </div>
      <style jsx>{`
        .product {
          display: grid;
          grid-template-areas:
            "title"
            "gallery"
            "info";
        }
        .title {
          margin: 0 0 20px 0;
          grid-area: title;
        }
        .gallery {
          height: 300px;
          grid-area: gallery;
          display: grid;
          grid-template-areas:
            "thumbnails mainpic";
          grid-template-columns: 1fr 3fr;
          grid-template-rows: 300px;
          column-gap: 10px;
        }
        .thumbnails {
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-area: thumbnails;
          overflow-y: auto;
          scrollbar-width: thin;
        }
        .thumbnail {
          width: 100%;
          padding: 5px;
          cursor: pointer;
        }
        .thumbnail:hover {
          padding: 3px;
          border: 2px solid #EEE;
        }
        .thumbnail.picked {
          padding: 3px;
          border: 2px solid #CCC;
        }
        .thumbnail img {
          max-width: 100%;
          height: 100px;
          margin: 0 auto;
          display: block;
        }
        .mainpic {
          width: 100%;
          display: flex;
          justify-content: center;
          grid-area: mainpic;
          border: 2px solid #CCC;
        }
        .mainpic img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
        }
        .info {
          grid-area: info;
        }

        @media(min-width: 720px) {
          .product {
            max-width: 1200px;
            grid-template-areas:
              "title title"
              "gallery info";
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
      <style jsx global>{`
      .image-gallery-original img {
        height: 300px;
      }
      .image-gallery-thumbnail .image-gallery-thumbnail-image {
        max-width: 80px;
        width: initial;
        max-height: 100px;
      }
      `}</style>
    </section>
  )
}

export default Product