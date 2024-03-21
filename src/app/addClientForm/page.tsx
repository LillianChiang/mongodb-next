'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Grid,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
}));

const AddClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    phoneNumber: '',
    address: '',
    idNumber: '',
    birthday: '',
    mobileNumber: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={9}>
          <div className="main-content">
            <Typography variant="h4">新增個案資料</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div>
                    <label htmlFor="date">日期:</label>
                    <TextField
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <label htmlFor="name">姓名:</label>
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <label htmlFor="phoneNumber">電話號碼:</label>
                    <TextField
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <label htmlFor="address">地址:</label>
                    <TextField
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <label htmlFor="idNumber">身分證號:</label>
                    <TextField
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={4} m={1}>
                  <div>
                    <label htmlFor="birthday">生日:</label>
                    <TextField
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <label htmlFor="mobileNumber">手機號碼:</label>
                    <TextField
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      variant="outlined"
                      className="input-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <label htmlFor="notes">註明:</label>
                    <TextField
                      type="text"
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      className="input-field"
                    />
                  </div>
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
  );
};

export default AddClientForm;
