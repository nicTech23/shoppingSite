import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, ImageList, ImageListItem, Paper, Rating, Typography } from '@mui/material'
import React, { useContext } from 'react'
import './Home.css';
import Data from '../../Data'
import { stateContext } from '../../Content';


console.log(Data)


const Home = () => {
  const {show} = useContext(stateContext)
  

  const card = Data.map(itemm=>{
  return <Grid item sm={6}  xs={6} md={3}>
            <Paper >
                <Card sx={{ maxWidth:"100%"}}>
                  <CardActionArea>
                    <CardMedia sx={{marginBottom:"10px", marginTop:"10px", objectFit:"contain"}}
                      component="img"
                      height="180"
                      image = {itemm.img}
                      alt="green iguana"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {itemm.tittle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {itemm.description}
                      </Typography>
                      <Box sx={{display:"flex", justifyContent:"space-between", marginTop:'10px'}}>
                      <Rating
                        name="simple-controlled"
                        value={itemm.rating}
                      />
                      <Typography fontSize={20}  fontWeight="bold">$ {itemm.price}</Typography>
                      </Box>
                      <Button onClick={()=>{
                        show(itemm.id, itemm.tittle, itemm.description, itemm.rating, itemm.price, itemm.img, itemm.count)
                      }} variant="contained" sx={{marginBottom:"10px", marginTop:"10px", fontSize:"10px"}}>Add to basket</Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Paper>
          </Grid>
})

  return (
    <Box>   
        <Box>
           <img className='home__img' src='https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg'/>
        </Box>

      <Box width="90%" sx={{margin: "auto", position:"relative"}}>
        <Grid container spacing={2}>
          {card}
        </Grid>
      </Box>
    </Box>
  )
}

export default Home