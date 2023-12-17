import React,{useState} from 'react'
import {Stack,Box,Typography,Button} from '@mui/material'
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem,removeAll } from '../../store/slices/shoppingSlice';

export default function ProductCard({img,title,des,price,ide,product}) {
  const { list } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const [click,setClick]=useState(false)
  let findItem=list.filter((e)=> e.id===ide)
  let quant=findItem.map((e)=>e.quantity)
  const handleButton=()=>{
setClick(true);

dispatch(addItem(product))
  }
  // console.log(list)
  let q=list.map((e)=>e)
  // console.log(q)
  return (
    <Box sx={{width:'440px',height:'220px', display:'flex',justifyContent:'center',alignItems:'center',gap:'5%',bgcolor:'#282727',marginTop:'5%',borderRadius:'10px'}}>
      <Box sx={{width:'80%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-end',gap:'2%',color:'white',padding:'2%'}}>
       <Typography variant='h6' textAlign={'right'} >{title}</Typography>
       <Typography variant='body2' textAlign={'right'}  >{des?.slice(0,200)}</Typography>
       <Typography width={'100%'} textAlign={'left'} >تومان{price}</Typography>
      </Box>
      <Box sx={{width:'20%',height:'100%',display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
        <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
          <img style={{width:'84px',height:'84px',borderRadius:'50%'}} src={img} alt={title} />
          {!click||quant==0?<Button onClick={()=>handleButton()} className='none' variant='contained' sx={{bgcolor:'red',width:'95%',height:'20%',fontSize:'13px',fontWeight:'400',textWrap:'nowrap',color:'white',borderRadius:'10px',wordSpacing:'2%'}}  >اضافه کردن +</Button>:<Box>
            <Button onClick={()=>dispatch(addItem(product))
}>+</Button>
            <Typography sx={{color:'white',textAlign:'center',marginRight:'25%'}}>{quant}</Typography>
            <Button onClick={()=>dispatch(removeItem(product.id))}>-</Button>
          </Box>
          }
        </Box>
          
      </Box>
    </Box>
  )
}
