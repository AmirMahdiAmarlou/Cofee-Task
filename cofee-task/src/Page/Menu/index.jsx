import { Stack,Box } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { BallTriangle } from  'react-loader-spinner'
import MenuCard from './MenuCard'
export default function Menu() {
  const [load,setLoad]=useState(false)
  const [data,setData]=useState()
  useEffect(()=>{
    fetch( 'http://localhost:3001/data')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  let notLoad=()=>{
    setLoad(true)
  }
  setTimeout(notLoad,2000)
 
  const dataItem=data?.map((e,index)=><MenuCard key={index} id={e.id} title={e.title} />)
  console.log(dataItem)
  return (
    <>
    {!load?<Box sx={{width:'100%' , height:'80%' , display:'flex',justifyContent:'center',alignItems:'center',padding:'auto'}} ><BallTriangle
  
  height={300}
  width={300}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/></Box>:<Stack  display={'flex'} flexDirection={'row'}  justifyContent={'space-around'}  flexWrap={'wrap'} gap={'2%'}>
      {dataItem}
    </Stack>}
    
    </>
  )
}
