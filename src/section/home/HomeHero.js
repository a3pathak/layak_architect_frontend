import { styled } from '@mui/material/styles';
import { Typography, Box, Stack, Backdrop } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

const RootStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    // paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(8),
    paddingLeft: useResponsive('up', 'lg') ? theme.spacing(16) : '',
    position: "absolute",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        margin: 'auto',
    },
}));

export default function HomeHero() {
    return (
        <RootStyle>
            <Box sx={{ position: 'absolute', height: '100vh', width: '100%' }} >
                <img src='./images/heroImage.webp' alt='hero' width='100%' height='100%' color='rgba(0,0,0,0.7)' />
            </Box>

            <ContentStyle>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', textAlign: 'left'}}>
                    <Typography variant='body1'>
                        Welcome to LayakArchitect
                    </Typography>
                    <Typography variant='h2'>
                        We are reading for you
                    </Typography>
                    <Typography>
                        Our goal is to back every architecture student.
                    </Typography>
                    <Typography>
                        LayakArchitect
                    </Typography>
                </Box>
            </ContentStyle>

        </RootStyle>
    );
}