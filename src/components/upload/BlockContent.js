// @mui
import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';


// ----------------------------------------------------------------------
BlockContent.defaultProps = {
  title: 'Drag and drop',
};
BlockContent.propTypes = {
  title: PropTypes.string,
};
export default function BlockContent({ title }) {
  return (
    <Stack
      spacing={ 2 }
      alignItems="center"
      justifyContent="center"
      direction={ { xs: 'column', md: 'row' } }
      sx={ { width: 1, textAlign: { xs: 'center', md: 'left' } } }
    >

      <Box sx={ { p: 2, textAlign: 'center' } }>
        <Typography gutterBottom variant="h5">
          { title }
        </Typography>

      </Box>
    </Stack>
  );
}
