import HomeHero from '../section/home/HomeHero';
import { styled } from '@mui/material/styles';
import { Backdrop } from '@mui/material';
import Gridcontent from '../section/home/gridContent';
import AfterGrid from '../tempComponents/AfterGrid';
import Page from '../components/Page';

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

export default function Home() {
  return (
    <Page>
      <RootStyle>
        {/* <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        > */}
          <HomeHero />
        {/* </Backdrop> */}
        <Gridcontent />
        <AfterGrid />
      </RootStyle>
    </Page>
  );
}
