'use client'
import {AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'

const BTC = "/Image/Bit.jpg"
const ETH = "/Image/ETH.jpg"
const DOe = "/Image/DOe.jpg"
const AN = "/Image/AN.png"
const ADA = "/Image/ADA.jpg"
const NJA = "/Image/NJA.jpg"

const btcString = "BTC";
const ethString = "ETH";
const doeString = "Dp e";
const anString = "AN";
const adaString = "ADA";
const njaString = "NJ A";


const  imgStrings = [
  {image: BTC, string: btcString},
  {image: ETH, string: ethString},
  {image: DOe, string: doeString},
  {image: AN, string: anString},
  {image: ADA, string: adaString},
  {image: NJA, string: njaString},

]




import React from 'react'
import CoinBtn from './coinBtn'
import Image from 'next/image'
 

const Bitcoin = () => {
  return (
  <div className='bg-white rounded-lg drop-shadow-2xl w-96'>
      <div className='flex justify-center w-full p-4'>
       <CoinBtn buttonText={"All"}/>
       <CoinBtn buttonText={"USD"}/>
       <CoinBtn buttonText={"BUSD"}/>
       <CoinBtn buttonText={<span className='flex items-center justify-center'><AiOutlineHeart/></span>}/>
    </div>
    <div className='relative flex justify-center h-12 m-auto border rounded-md w-80 bg-slate-100'>
        <input className='bg-transparent outline-none' type="text" placeholder='Search ETH,BTC,...'/>
       <span  className='absolute text-2xl left-3 top-3' ><AiOutlineSearch/></span>
    </div>
    {
      imgStrings.map((item,index)=>(
        <div key={index} className='flex justify-between px-2 py-4 m-auto hover:cursor-pointer hover:bg-yellow-100 w-80'>
         <div className='flex items-center'>
         <Image width={20} height={20} src={item.image} alt='itemImage'/>
          <p className='text-sm'>{item.string}</p>
         </div>
         <span><AiOutlineHeart/></span>
        </div>
      ))
    }
  </div>
  )
}

export default Bitcoin