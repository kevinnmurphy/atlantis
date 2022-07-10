import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Button from '@mui/material/Button'

const Form = (props) => {
  const handleSubmit = () => console.log('formData')

  return (
    <Box
      component="form"
      // noValidate
      autoComplete="off"
      sx={{ minWidth: 120, maxWidth: 500 }}
    >
      <TextField
        required
        id="standard-required"
        label="Name"
        variant="standard"
        fullWidth
      />
      <TextField
        required
        id="standard-required"
        label="Email"
        variant="standard"
        type="email"
        fullWidth
      />
      <TextField
        required
        id="standard-required"
        label="Phone Number"
        variant="standard"
        fullWidth
      />

      <TextField
        required
        id="standard-required"
        label="Zip Code"
        variant="standard"
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="method">
          Preferred Contact Method
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'method',
            id: 'method',
          }}
        >
          <option value={10}>Email</option>
          <option value={20}>Phone</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="measurements">
          Do you have measurements?
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'measurements',
            id: 'measurements',
          }}
        >
          <option value={10}>Yes, I will add them in the message.</option>
          <option value={20}>No</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="material">
          Material of interest?
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'material',
            id: 'material',
          }}
        >
          <option value={10}>Quartz</option>
          <option value={20}>Granite</option>
          <option value={30}>Marble</option>
          <option value={40}>Other</option>
          <option value={50}>Not Sure</option>
        </NativeSelect>
      </FormControl>
      <TextField
        required
        id="standard-required"
        label="What area of your home do you need countertops?"
        variant="standard"
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="demo">
          Do you need your current countertops removed and discarded?
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'demo',
            id: 'demo',
          }}
        >
          <option value={10}>Yes</option>
          <option value={20}>No</option>
          <option value={30}>Not sure</option>
        </NativeSelect>
      </FormControl>
      <TextField
        id="standard-multiline"
        label="Message"
        variant="standard"
        fullWidth
        multiline
        rows={4}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1em',
        }}
      >
        <Button variant="contained" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default Form
