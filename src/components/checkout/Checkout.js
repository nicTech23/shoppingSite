
import { Button, Grid, IconButton, Paper, Rating, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { stateContext } from '../../Content'
import './Checkout.css'

const Checkout = () => {
    
    const {basket, DeletItem, IncreaseCount, ReduceCount } = useContext(stateContext)
    console.log(basket)

   
        let total = 0;

        basket.map(item =>{
            total = total + (item.price * item.count)
        })

    console.log(parseFloat(total))


   const checkout = basket.map(item=>{
       
    return(
        <div>
            <Box component='div' sx={{width:"90%",margin:"auto"}}>

                    <Grid container spacing={2} sx={{marginTop:"20px", justifyContent:"space-between", alignItems:'center'}}>
                       
                        <Grid item xs={12} sm={3}>
                            <Paper sx={{width:{xs:'60%', sm:'100%'}, marginLeft:{xs:'40px', sm:'0px'}, height:{xs:'130px', sm:'160px'}, border:'none', boxShadow: {sm:'none'}}}>
                                    <img className='image' src={item.img}/>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={9}>
                            <div sx={{height:"160px"}}>

                                <Box component="div" sx={{width:{sm:'100%', xs:'80%'}}}>
                                    <Typography variant='h6'>{item.tittle}</Typography>
                                    <Typography>{item.description}</Typography>
                                    
                                    <Rating
                                    name="simple-controlled"
                                    value={item.rating}
                                    />

                                    <Typography variant='h6'>{item.price}</Typography>

                                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                        <Button variant='contained' sx={{fontSize:"8px", marginTop:"5px"}} onClick={()=>{DeletItem(item.id)}}>Remove</Button>
                                        
                                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'6px', marginLeft:'6px'}}>
                                                <Tooltip title="Add">
                                                        <Button variant='outlined' sx={{ padding:'0'}} onClick={()=>{IncreaseCount(item.id)}}>
                                                            +
                                                        </Button>
                                                </Tooltip>

                                                <Typography sx={{marginLeft:'10px', marginRight:'10px'}}>{item.count}</Typography>

                                                <Tooltip title="Reduce">
                                                        <Button variant='outlined' sx={{ padding:'0'}} onClick={()=>{ReduceCount(item.id)}}>
                                                            -
                                                        </Button>
                                                </Tooltip>
                                        </Box>
                                            
                                            <Button variant='contained' sx={{fontSize:"12px", marginTop:"5px", marginLeft:'10px'}}>Buy</Button>
                                        </Box>
                                    </Box>

                                </Box>
                            </div>
                        </Grid>

                    </Grid>
                <br/>
                <hr/>
            </Box>
        </div>
        )
    }) 

  return (
    <div>
       {basket.length === 0 ? <Typography  sx={{marginTop:'50px', display:'flex', justifyContent:'center'}}>Your basket is empty</Typography> : 
            <Box>
                <Typography fontWeight='bold' sx={{float:"right", position:'fixed',marginTop:'20px', marginRight:'60px'}}>Total: ${total}</Typography>
                {checkout}
            </Box>
       }
    </div>
  )
}

export default Checkout