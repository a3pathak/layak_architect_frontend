import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';
// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Layak Architect',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms Of Services', href: PATH_PAGE.termsOfService },
      { name: 'Privacy Policy', href: PATH_PAGE.PrivacyPolicy },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: "#64A264",
  // backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------
function getCurrentYear() {
  return new Date().getFullYear();
}
export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 }, color: 'white', fontSize: 15 }}>
              Architecture Details Interior Design Details Building Construction Details Site Planning Details
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography variant='h5' sx={{color: 'white', fontSize: 22}}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      variant="body2"
                      component={RouterLink}
                      sx={{ display: 'block', color: 'white', fontSize: 18 }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
              <Typography
                sx={{ color: 'black', lineHeight: '2.2' }}
              >
                <h5 style={{color: 'white', fontSize: 22}}>Contact</h5>
                <a style={{ color: 'white', fontSize: 18, textDecoration: 'none' }} href="mailto:layakarchitect@gmail.com">
                  layakarchitect@gmail.com
                </a>
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" color="white" align="center" marginY="3%" sx={{fontSize: 15}}>
          {'Copyright © '}
          {getCurrentYear()}
          {' All rights reserved.'}
        </Typography>
      </Container>
    </RootStyle>
  );
}
