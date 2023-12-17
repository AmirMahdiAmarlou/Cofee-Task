import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MenuCard({title,id}) {
  return (
    <>
    <Link to={`/product/${id}`}>
    <Card   sx={{display:'inline-flex',justifyContent:'center',alignItems:'center',position:'relative',maxWidth:{md:'845px', xs:'180px'},backgroundColor:'#212121f2',marginTop:'5%',borderRadius:'10px'
    }}
    >
    
        <CardMedia
        display={'inline-block'}
          component="img"
          height="100%"
          image="https://cdn.topmenumarket.com/storage/item/1629/conversions/thumbnail/2gy0A5CtSkZyr2c32r0lPgOLQogauij6sCp0gYnJ-thumbnail.webp"
          alt="green iguana"
        />
        
          <Typography sx={{fontSize:{xs:'14px'}}} position={'absolute'} textAlign={'center'} color={'white'} variant="h5" component="div">
            {title}
          </Typography>
        
        
    </Card>
    </Link>
    </>
  )
}
