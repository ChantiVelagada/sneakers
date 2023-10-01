import {  useState } from "react"


const ImageGallery = () => {
  const [imageDisplayed, setImageDisplayed] = useState("./images/image-product-1.jpg")

  function onClickImage(e) {
    setImageDisplayed(e.target.attributes.src.value)
  }

  return (
    <div className='image-gallery'>
        <img className="selected-image" src={imageDisplayed} />

        <div className='img-thumbnail' >
            <img
              src='./images\image-product-1.jpg'
              onClick={onClickImage}
            />
            <img 
              src='./images\image-product-2.jpg'
              onClick={onClickImage}
            />
            <img
              src='./images\image-product-3.jpg'
              onClick={onClickImage}
            />
            <img 
              src='./images\image-product-4.jpg'
              onClick={onClickImage}
            />
        </div>
    </div>
  )
}

export default ImageGallery;