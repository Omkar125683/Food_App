import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from "../components/Card"
import Carousel from "../components/Carousel"

const Home = () => {
  const [item,setitem] = useState([]);
  const [category , setcategory] = useState([]);
  const loaddata = async() =>{
      let data = await fetch('http://localhost:3000/api/fooddata',{
        method:'POST',
        headers:{
          'Content-Type':'Application/json',
        }
      });

      data = await data.json();
      setitem(data[1]);
      setcategory(data[0]);
      //console.log(data[0],data[1]);
  }
  useEffect(()=>{
    loaddata();
  },[])
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><Carousel/></div>
      <div className='container'>

        {
            item != [] ? item.map((data)=>{
              return (
               <div className='row mb-3' key={data._id}>
                 <div key={data._id} className='m-3 fs-3'>
                  {data.CategoryName}
                </div>
                <hr />
                  {
                    category !=[] ? category.filter((data2)=>data2.CategoryName == data.CategoryName).map(filteritems =>{
                      return (
                        <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card fooditem={filteritems} options={filteritems.options[0]}></Card>
                        </div>
                      )
                    }) : <div>No Such content Found</div>
                  }
               </div>
              )
            })
            :<div>"........."</div>
        }
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}

export default Home