import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import cataventos from '../../img/cataventos.png';
import './style.css';

const pages = ['Login', 'Lista de Medicamentos', 'Ofertas', 'Mapa'];

function Header() {
  const [navMenuAnchor, setNavMenuAnchor] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [cadastrosOpen, setCadastrosOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setNavMenuAnchor(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenuAnchor(null);
  };

  const handleOpenUserMenu = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f7f1e1' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <img
              src={cataventos}
              alt="cataventos"
              className="header-image"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={navMenuAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(navMenuAnchor)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s/g, '')}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#f5938b', display: 'block', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
            
            <Button
              aria-label="cadastros"
              aria-controls="cadastros-menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{
                my: 2,
                color: '#f5938b',
                display: 'block',
                textTransform: 'none'
              }}
            >
              Cadastros
            </Button>
            
            <Menu
              id="cadastros-menu-appbar"
              anchorEl={userMenuAnchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(userMenuAnchor)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu} component={Link} to="/cadastrodemedicamentos"
              sx={{
                color: '#f5938b'
              }}>
                Cadastro de Medicamentos
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} component={Link} to="/cadastrodenovasfarmácias"
              sx={{
                color: '#f5938b'
              }}>
                Cadastro de Novas Farmácias
              </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { Header };
