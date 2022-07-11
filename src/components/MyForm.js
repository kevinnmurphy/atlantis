import React, { useState } from 'react'
import axios from 'axios'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
// import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import TextField from '@mui/material/TextField'

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
      // alert('Thank you, we will respond to your inquiry shortly.')
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: `https://getform.io/f/${process.env.GETFORM_ID}`,
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  // const [values, setValues] = React.useState({})

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ minWidth: 120, maxWidth: 500 }}
      onSubmit={handleOnSubmit}
      accept-charset="UTF-8"
      enctype="multipart/form-data"
      target="_blank"
    >
      <TextField
        fullWidth
        id="fullname"
        label="Name"
        name="fullname"
        type="text"
        required
        variant="standard"
      />

      <TextField
        fullWidth
        id="email"
        label="Email"
        name="email"
        required
        type="email"
        variant="standard"
      />

      <TextField
        fullWidth
        id="number"
        label="Phone Number"
        name="phone"
        type="tel"
        required
        variant="standard"
      />

      <TextField
        fullWidth
        id="zip"
        label="Zip Code"
        name="zip"
        type="text"
        required
        variant="standard"
      />

      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="method">
          Preferred Contact Method
        </InputLabel>
        <NativeSelect
          defaultValue={'email'}
          inputProps={{
            name: 'method',
            id: 'method',
          }}
        >
          <option value={'email'}>Email</option>
          <option value={'phone'}>Phone</option>
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
          <option value={'Yes'}>Yes, I will add them in the message.</option>
          <option value={'No'}>No</option>
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
          <option value={'Quartz'}>Quartz</option>
          <option value={'Granite'}>Granite</option>
          <option value={'Marble'}>Marble</option>
          <option value={'Other'}>Other</option>
          <option value={'Not Sure'}>Not Sure</option>
        </NativeSelect>
      </FormControl>

      <TextField
        fullWidth
        id="location"
        label="What area of your home do you need countertops?"
        name="location"
        type="text"
        required
        variant="standard"
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
          <option value={'Yes'}>Yes</option>
          <option value={'No'}>No</option>
          <option value={'Not sure'}>Not sure</option>
        </NativeSelect>
      </FormControl>

      <TextField
        fullWidth
        id="message"
        label="Message"
        name="message"
        multiline
        rows={4}
        type="text"
        variant="standard"
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1em',
        }}
      >
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>

    // Captcha
    // <div
    //   class="g-recaptcha"
    //   data-sitekey="6LdfzqcUAAAAALrt3ztxWifjPoaMWFIwES_JV9u2"
    // ></div>
  )
}

export default MyForm
