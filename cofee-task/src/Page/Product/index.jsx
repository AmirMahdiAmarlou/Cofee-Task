import { Stack,Button, Typography,Box } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import { useDispatch,useSelector } from "react-redux";
import { removeAll } from '../../store/slices/shoppingSlice';
export default function Product() {
  const {id}=useParams()
  const { list } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const [product,setProduct]=useState()
  useEffect(()=>{
    fetch(`http://localhost:3001/data/${id}`)
    .then(res=>res.json())
    .then(dataCart=>setProduct(dataCart.items))
    .catch(err=>alert(err))
  },[id])
  let ide=product?.map((e)=>e.id)
  let TotalPrice=list?.map((e)=>e.quantity*e.price)
  let TotalQuantity=list?.map((e)=>e.quantity)
  let Totalquant=TotalQuantity.reduce((total,number)=>total+number,0)
  let TotalP=TotalPrice.reduce((total,number)=>total+number,0)
  console.log(list)
  const ProductItem=product?.map((e,index)=><ProductCard product={e} key={index} ide={e.id} img={e.thumbnail?.url} title={e.title} des={e.details?.description} price={e.price} />)
  return (
    <>
    <Stack display={'flex'} flexDirection={'row-reverse'} flexWrap={'wrap'} justifyContent={'space-around'} alignItems={'center'} >{ProductItem}</Stack>

    <Stack mt={'5%'} display={'flex'} flexDirection={'row-reverse'} flexWrap={'wrap'} justifyContent={'space-around'} alignItems={'center'} >
    <Box>
    <Typography sx={{color:'white',textAlign:'right'}}> تعداد  :   {Totalquant}</Typography>
     <Typography sx={{color:'white',textAlign:'center'}}> قیمت کل  :   {TotalP} تومان</Typography>
    </Box>
      <Button color="error" variant="contained" onClick={()=>dispatch(removeAll())} sx={{borderRadius:'10px'}}>خالی کردن سبد خرید</Button>
    </Stack>
   
    </>
  )
}
