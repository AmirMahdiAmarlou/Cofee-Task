import { Stack ,Typography} from '@mui/material'
import React from 'react'

export default function Nav() {
  return (
    <Stack width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'80px'} sx={{backgroundColor:'#212121'}} >
      <Typography variant='h4' sx={{color:'white',fontSize:'24px'}} >Top Menu</Typography>
    </Stack>
  )
}
