import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  // KeyboardDatePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

export default function SelectDateTime() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedDate2, setSelectedDate2] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleDateChange2 = date => {
    setSelectedDate2(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" className="date-time-picker">
        <KeyboardDateTimePicker 
          //disableToolbar
          variant="inline"
          format="MM/dd/yyyy hh:mm a"
          margin="normal"
          id="date-picker-inline"
          label="Select Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

<KeyboardDateTimePicker
          //disableToolbar
          variant="inline"
          format="MM/dd/yyyy hh:mm a"
          margin="normal"
          id="date-picker-inline"
          label="Select End Date"
          value={selectedDate2}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

      
      <Button variant="contained" color="primary">
        Primary
      </Button>
      
      
    
        
      </Grid>
    </MuiPickersUtilsProvider>
  );
}