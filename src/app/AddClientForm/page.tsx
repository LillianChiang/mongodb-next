'use client'

import React, { useState } from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import DefaultLayout from '../DefaultLayout/page'

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
}))

const AddClientForm: React.FC = () => {
  const classes = useStyles()

  const [formData, setFormData] = useState({
    date: '',
    name: '',
    phoneNumber: '',
    address: '',
    idNumber: '',
    birthday: '',
    mobileNumber: '',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <DefaultLayout>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} md={9}>
            <div className="main-content">
              <Typography variant="h4">新增個案資料</Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <label htmlFor="date" className={classes.marginRight}>
                      日期:
                    </label>
                    <TextField
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <label htmlFor="name" className={classes.marginRight}>
                      姓名:
                    </label>
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={5} sm={6}>
                    <label
                      htmlFor="phoneNumber"
                      className={classes.marginRight}
                    >
                      電話號碼:
                    </label>
                    <TextField
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="address">地址:</label>
                    <TextField
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="idNumber">身分證號:</label>
                    <TextField
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="birthday">生日:</label>
                    <TextField
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label htmlFor="mobileNumber">手機號碼:</label>
                    <TextField
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="notes">註明:</label>
                    <TextField
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="btn-primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default AddClientForm
