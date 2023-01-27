import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import {AppBar, Button, Menu, MenuItem, Stack, styled, TextField, Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useContext } from 'react';
import {stateContext }from '../../Content'
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = styled(AppBar)({
   backgroundColor:"black", 
   width:"100",
})

const Header = () => {
  const {basket} = useContext(stateContext)

  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
        <NavBar className='header' position='sticky' sx={{width:{xs:"100%", sm:"100%"}}}>
          <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
            {/* Logo*/ }
            <Box>
              <Link to="/">
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'/>
              </Link>
            </Box>
            {/* search bar*/ }
            <Box className="header__input" borderRadius="10px" sx={{display:"flex", alignItems:"center" ,backgroundColor:"white", width:{sm:"700px", xs:"900px"}, paddingLeft:"15px", }}>
            <SearchIcon className='search' />
            <TextField id="standard-basic" placeholder ="Search" variant="standard"  fullWidth />
            </Box>
            
            {/*Basket */}
            <Box sx={{display:{xs:"block", sm:"none"}, marginLeft:'10px'}}>
                <Link to="/checkout" className='link'>
                  <Box sx={{display:"flex", flexzirection:"row"}}>
                    <ShoppingBasketIcon/>
                    <Typography component="span" fontWeight="bold" fontSize="14px" p="7px" >{basket.length}</Typography>
                  </Box>
                </Link>
            </Box>
          


            {/* Menu Link*/ }
            <Box sx={{display:{xs:'flex', sm:"none"}}}>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon sx={{color:'white'}}/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose} className='menu__hover'><Link className='menu__link' to='/login'>Sign in</Link></MenuItem>
                <MenuItem onClick={handleClose} sx={{'@hover:backgroundColor':'gray'}}><Link className='menu__link' to='/'>Return order</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className='menu__link' to='/'>Your prime</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className='menu__link' to='/checkout'>Check basket</Link></MenuItem>
              </Menu>
            </Box>


            {/*Links*/ }
            <Box sx={{display:{xs:'none', sm:"flex"}, alignItems:"center"}}>
              {/*1st*/ } 
                <Box sx={{marginRight:"15px"}} >
                <Link to="/login" className='link'>
                  <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography component="span" fontSize="11px">Hello Nic</Typography>
                    <Typography component="span" fontWeight="bold" fontSize="14px" >Sign In</Typography>
                  </Box>
                </Link>
                </Box>

              {/*2nd*/ } 
              <Box sx={{marginRight:"15px"}}>
                <Link to="/" className='link'>
                  <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography component="span" fontSize="11px">Return</Typography>
                    <Typography component="span" fontWeight="bold" fontSize="14px" >& order</Typography>
                  </Box>
                </Link>
                </Box>

              {/*3rd*/ }
              <Box sx={{marginRight:"15px"}}>
                <Link to="/" className='link'>
                  <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography component="span" fontSize="11px">Your</Typography>
                    <Typography component="span" fontWeight="bold" fontSize="14px" >Prime</Typography>
                  </Box>
                </Link>
                </Box>


              {/*4th*/ } 
              <Box sx={{marginRight:"15px"}}>
                <Link to="/checkout" className='link'>
                  <Box sx={{display:"flex", flexzirection:"row"}}>
                    <ShoppingBasketIcon/>
                    <Typography component="span" fontWeight="bold" fontSize="14px" p="7px" >{basket.length}</Typography>
                  </Box>
                </Link>
                </Box>
            </Box>
            {/* Cart and number*/ }

          </Toolbar>
    </NavBar>
    
    

    
  )
}

export default Header