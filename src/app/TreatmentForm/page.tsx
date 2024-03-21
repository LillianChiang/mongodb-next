'use client';

import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../DefaultLayout/page';

import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  Container,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    border: '1px solid #ccc',
    padding: theme.spacing(4),
  },
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
  switchLabel: {
    marginRight: theme.spacing(2),
  },
}));

const AddTreatmentRecord = () => {
  const classes = useStyles();
  const router = useRouter();
  const [therapist, setTherapist] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [content, setContent] = useState('');
  const [treatmentContent, setTreatmentContent] = useState('');
  const [treatmentFee, setTreatmentFee] = useState('');
  const [openPreCharge, setOpenPreCharge] = useState(false);
  const [chargeFee, setChargeFee] = useState('');
  const [chargeNotes, setChargeNotes] = useState('');
  const [date, setDate] = useState('');
  const [currentTreatmentContent, setCurrentTreatmentContent] = useState('');

  const handleCancel = () => {
    router.back();
  };

  const handleTherapistChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTherapist(e.target.value);
  };

  const handleTreatmentFeeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTreatmentFee(e.target.value);
  };

  const handleChargeFeeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChargeFee(e.target.value);
  };

  const handleCurrentTreatmentContentChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCurrentTreatmentContent(e.target.value);
  };

  const handleOpenPreChargeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpenPreCharge(e.target.checked);
  };

  return (
   <DefaultLayout>
    <Container>
      <div className={classes.form}>
        <Typography variant="h5">治療登錄 (新增)</Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextField
                fullWidth
                type="date"
                id="date"
                value={date}
                onChange={handleTherapistChange}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                儲存
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={handleCancel}
              >
                取消
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.marginBottom}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="therapist-label">治療師</InputLabel>
                <Select
                  labelId="therapist-label"
                  id="therapist"
                  value={therapist}
                  onChange={handleTherapistChange}
                >
                  <MenuItem value="therapist1">Therapist 1</MenuItem>
                  <MenuItem value="therapist2">Therapist 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="treatmentType-label">治療項目</InputLabel>
                <Select
                  labelId="treatmentType-label"
                  id="treatmentType"
                  value={treatmentType}
                  onChange={(e) => setTreatmentType(e.target.value)}
                >
                  <MenuItem value="type1">評估+衛教運動</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            id="content"
            label="評估內容"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={classes.marginBottom}
          />
          <TextField
            fullWidth
            id="treatmentContent"
            label="治療內容"
            value={treatmentContent}
            onChange={(e) => setTreatmentContent(e.target.value)}
            className={classes.marginBottom}
          />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                id="treatmentFee"
                label="治療費用 (現金)"
                value={treatmentFee}
                onChange={(e) => setTreatmentFee(e.target.value)}
                className={classes.marginBottom}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Switch
                    id="openPreCharge"
                    checked={openPreCharge}
                    onChange={handleOpenPreChargeChange}
                  />
                }
                label="是否開啟預收實現"
                className={classes.marginBottom}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="chargeFee"
                label="治療費用 (預收實現)"
                value={chargeFee}
                onChange={(e) => setChargeFee(e.target.value)}
                className={classes.marginBottom}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="currentTreatmentContent"
                label="預收款項"
                value={currentTreatmentContent}
                onChange={(e) => setCurrentTreatmentContent(e.target.value)}
                className={classes.marginBottom}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            id="chargeNotes"
            label="預收實現備註"
            multiline
            rows={4}
            value={chargeNotes}
            onChange={(e) => setChargeNotes(e.target.value)}
            className={classes.marginBottom}
          />
        </form>
      </div>
    </Container>
    </DefaultLayout>
  );
};

export default AddTreatmentRecord;
