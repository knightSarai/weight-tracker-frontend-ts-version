import { useState } from 'react';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import WeightInput from '@/components/WeightInput';

export default function WeightForm() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }
  const [value, setValue] = useState<Date | null>(new Date());
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <Box display="flex" justifyContent="space-between" width="60%">
      <WeightInput />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LoadingButton
        color="primary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
    </Box>
  );
}
