import { useState } from 'react'
import './App.css'
import Card from './component/Card';


function App() {
  const [images, setImages] = useState(3)


  const [imgCards, setImgCards] = useState([
    {
      img:"https://source.unsplash.com/1600x800/?burger",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?waterfall",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?garden",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?mountain",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?ocean",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?boating",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?bat",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?ac",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?mirror",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?mouse",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?remote",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?cow",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?dress",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?paints",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?bedrrom",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?bed",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?krishna",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?dog",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?cat",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?charminar",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?food",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?student",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?tv",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?laptop",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?fish",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?house",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?train",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?rain",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
    {
      img:"https://source.unsplash.com/1600x800/?girl",
      text:"hi latha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure blanditiis laudantium dolorem adipisci commodi illo nihil nulla nostrum amet?"
    },
  ])

  return (
    <>
      <div className="bg-container">
        <div className="card">
          <h1 >Image Gallery</h1>
          <div className="image-card">
              {imgCards.slice(0,images).map((url, index)=> (
                  <Card 
                    key={index}
                    img={url.img}
                    text={url.text}
                  />
              ))}
          </div>
          {images < imgCards.length && (
            <button className='btn' onClick={()=> {
                setImages(prevImages => prevImages +5)
            }}>Load More</button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
