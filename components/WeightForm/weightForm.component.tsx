import Box from '@mui/material/Box';
import WeightInput from '@/components/WeightInput';

export default function WeightForm() {
  return (
    <Box
      component="form"
      mt={5}
      display="flex"
      justifyContent="center"
      autoComplete="off"
    >
      <WeightInput />
    </Box>
  );
}
