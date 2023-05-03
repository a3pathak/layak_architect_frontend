// @mui
import { Container, Grid } from '@mui/material';
// sections
// import { AppWelcome } from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  // const { user } = useAuth();

  return (
    // <Page title="Dashboard">
      <Container>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            {/* <AppWelcome  /> */}
            <div>Welcome to layak architect</div>
          </Grid>
        </Grid>
      </Container>
    // </Page>
  );
}
