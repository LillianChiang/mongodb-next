'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/DefaultLayout';

const useStyles = makeStyles((theme) => ({
  form: {
    border: '1px solid #ccc',
    padding: theme.spacing(4),
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
}));

const AddClientForm: React.FC = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    date: '',
    MedNumber: '',
    name: '',
    phoneNumber: '',
    address: '',
    idNumber: '',
    birthday: '',
    mobileNumber: '',
    notes: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Navbar>
      <Container>
        <div className={classes.form}>
          <Typography variant="h5">新增個案資料</Typography>
          <form>
            <Grid container spacing={5} className={classes.marginBottom}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="MedNumber"
                  name="MedNumber"
                  label="病歷號碼"
                  value={formData.MedNumber}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.marginBottom}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="姓名"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="電話號碼"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="idNumber"
                  name="idNumber"
                  label="身分證號"
                  value={formData.idNumber}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.marginBottom}>
              <Grid item xs={15}>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="地址"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.marginBottom}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="date"
                  id="birthday"
                  name="birthday"
                  label="生日"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="mobileNumber"
                  name="mobileNumber"
                  label="手機號碼"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              id="notes"
              name="notes"
              label="備註"
              multiline
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className={classes.marginBottom}
            />
            <Button type="submit" variant="contained" color="primary">
              建立資料
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
            >
              取消
            </Button>
          </form>
        </div>
      </Container>
    </Navbar>
  );
};

export default AddClientForm;
