import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';


const DatePicker = ( {dateType,updateReserveInformation} ) => {
  const [value, setValue] = React.useState(dayjs('2024-07-20'));
  const handleChange = (newValue) => {
    setValue(newValue);
    updateReserveInformation(dateType,newValue);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={value} onChange={handleChange} />
  </LocalizationProvider>
  )
}
export default DatePicker