import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// routes
import { PATH_AUTH } from '../../routes/paths';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';

//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme?.customShadows?.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {

  const navigate = useNavigate();

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar sx={ { boxShadow: 0, bgcolor: 'transparent' } }>
      <ToolbarStyle
        disableGutters
        sx={ {
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        } }
      >
        <Container
          sx={ {
            maxWidth: '1250px !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          } }
        >
          <Logo sx={ { width: '70%' } } />
          
          <Box sx={ { flexGrow: 1 } } />

          { isDesktop && <MenuDesktop isOffset={ isOffset } isHome={ isHome } navConfig={ navConfig } /> }

          { !isAuthenticated && <Button component={ RouterLink } to={ PATH_AUTH.login }> Login</Button> }

          { isAuthenticated && <Button onClick={ handleLogout }> Logout </Button> }

          { !isDesktop && <MenuMobile isOffset={ isOffset } isHome={ isHome } navConfig={ navConfig } /> }
        </Container>
      </ToolbarStyle>

      { isOffset && <ToolbarShadowStyle /> }
    </AppBar>
  );
}
