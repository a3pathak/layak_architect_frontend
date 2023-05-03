import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { Grid, Box, FormGroup, FormControlLabel, Switch, Button, Link } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { useState } from 'react';
import axios from '../../utils/axios';
import { RHFTextField } from './index';
import Iconify from '../Iconify';
import { HOST_API } from '../../config';

TaxSwitch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  filePath: PropTypes.string,
  fileUpload: PropTypes.string,
  getValues: PropTypes.func
};

export default function TaxSwitch({ name, label, title, filePath, fileUpload, getValues }) {

  const { control } = useFormContext();
  const { enqueueSnackbar } = useSnackbar();

  const [file, setFile] = useState();
  const [open, setOpen] = useState();

  const changeHandle = async (e) => {
    if (e.target.files.length) {
      const url = `${HOST_API}/uploadTax?document=${name}`
      const formData = new FormData();
      formData.append('uploaded_file', e.target.files[0]);
      const { path } = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      enqueueSnackbar('File uploaded success!');
      setFile(path);
    }
  }
  const handleChange = (e) => {
    setOpen(!e)
  }

  setTimeout(() => {
    setOpen(getValues(name));
    if (filePath) {
      setFile(`${HOST_API}/${filePath}`);
    }
    }, 30);

  return (
    <FormGroup>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'grid',
              rowGap: 3,
              columnGap: 2,
              py: 1,
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
            }}
          >
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  control={control}
                  render={({ field }) =>
                    <Switch
                      {...field}
                      checked={field.value}
                      onClick={() => handleChange(field.value)}
                    />
                  }
                />
              }
              label={label}
            />
            {open ?
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                }}
              >
                <RHFTextField name={title} label={`Enter ${label.slice(11, 150)}`} size={'small'} />
                <Box
                  sx={{
                    display: 'grid',
                    m: 0,
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 20%)' },
                  }}
                >
                  <Button variant="contained" component="label" color="primary" sx={{ width: 10, height: 40 }}>
                    <Iconify icon="entypo:upload-to-cloud" sx={{ width: 20, height: 20, '&:hover': { opacity: 0.8 } }} />
                    <input type={'file'} accept={'image/*,.pdf'} name={fileUpload} hidden onChange={changeHandle} />
                  </Button>
                  {file &&
                    <Button href={file} target={'_BLANK'} download component={Link} variant="contained" color="primary" sx={{ width: 10, height: 40 }}>
                      <Iconify icon="system-uicons:download" sx={{ width: 20, height: 20, '&:hover': { opacity: 0.8 } }} />
                    </Button>
                  }
                </Box>
              </Box>
              : ''}
          </Box>
        </Grid>
      </Grid>
    </FormGroup>
  );
}
