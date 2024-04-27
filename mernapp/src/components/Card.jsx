import React, { useEffect, useRef, useState } from 'react'
import { UseCart, usedispatchcart } from './ContextReducer';
const Card = (prop) => {
    let options= prop.options;
    let priceOptions = Object.keys(options);
    let dispatch = usedispatchcart();
    let data =UseCart();
    const priceref= useRef();
    const [quant,setquant]=useState(1);
    const [size,setsize]=useState("");
    const CartHandler =async ()=>{
        
       await dispatch({type:"ADD",id:prop.fooditem._id,name:prop.fooditem.name,price:finalprice,quant:quant,size:size , img:prop.fooditem.img})
       console.log(data);
    }
    useEffect(()=>{
        setsize(priceref.current.value);
    },[])
    let finalprice = quant *parseInt(options[size])
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={prop.fooditem.img} className="card-img-top" alt="..."  style={{height:"120px", objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{prop.fooditem.name}</h5>
                            <p className="card-text"></p>
                        <div className='container w-100 '>
                            <select name="" id="" className='m-2 h-100 ' onChange={(e)=>setquant(e.target.value)}>
                                {
                                    Array.from(Array(6),(e,i)=>{
                                        return (
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        )
                                    })
                                }
                            </select>
                                <select name="" id="" className='m-2 h-100 bg-success rounded'  ref={priceref} onChange={(e)=>setsize(e.target.value)}>
                                    {
                                        priceOptions.map((data)=>{
                                            return <option key={data} value={data}>{data}</option>
                                        })
                                    }
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    ${finalprice}/-
                                </div>
                                <hr />
                                <button className={'btn btn-success justify-centre ms-2'} onClick={CartHandler}>Add To cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;