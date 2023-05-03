import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ----------------------------------------------------------------------

RHFDateField.propTypes = {
  name: PropTypes.string,
};

export default function RHFDateField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
          <DatePicker
            { ...field } fullWidth error={ !!error } helperText={ error?.message } { ...other }
            renderInput={ (params) => <TextField { ...params } /> }
          />
        </LocalizationProvider>
      ) }
    />
  );
}
