'use client';

import React, { useState } from 'react';
import DefaultLayout from '../DefaultLayout/page';
import {
  Typography,
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { SelectChangeEvent } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
}));

export default function ManagementInterface() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedReportType, setSelectedReportType] = useState('');
  const [selectedItems, setSelectedItems] = useState({
    number: false,
    therapist: false,
    client: false,
    therapyCost: false,
    productSales: false,
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleReportTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setSelectedReportType(event.target.value as string);
  };

  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedItems({ ...selectedItems, [name]: checked });
  };

  const handleSearch = () => {
    // Perform search operation based on selectedDate, selectedReportType, and selectedItems
    console.log('Search button clicked');
  };

  const handleExport = () => {
    // Perform export operation based on selectedDate, selectedReportType, and selectedItems
    console.log('Export button clicked');
  };

  return (
    <DefaultLayout>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={9}>
            <div>
              <Typography variant="h4">管理介面</Typography>

              <div className="mt-4 rounded-lg bg-gray-100 p-4">
                <Typography variant="h4" className="text-xl font-semibold">
                  當日業績報表
                </Typography>

                <div className="mt-4 flex items-center">
                  <Typography variant="body1" className="mr-4">
                    選擇日期:
                  </Typography>
                  <TextField
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    variant="outlined"
                    fullWidth
                    className="rounded-md border border-gray-300 px-2 py-1"
                  />
                  <Button
                    onClick={handleSearch}
                    variant="contained"
                    color="primary"
                    className="ml-4"
                  >
                    查詢
                  </Button>
                  <Button
                    onClick={handleExport}
                    variant="contained"
                    color="success"
                    className="ml-2"
                  >
                    匯出
                  </Button>
                </div>

                <div className="mt-4">
                  <Typography variant="body1" className="mr-4">
                    報表類型:
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className="rounded-md border border-gray-300 px-2 py-1"
                  >
                    <Select
                      value={selectedReportType}
                      // onChange={handleReportTypeChange}
                      fullWidth
                    >
                      <MenuItem value="">
                        <em>請選擇</em>
                      </MenuItem>
                      <MenuItem value="dailyPerformance">當日業績表</MenuItem>
                      <MenuItem value="intervalReport">區間報表</MenuItem>
                      <MenuItem value="therapistManagement">
                        治療師管理
                      </MenuItem>
                      <MenuItem value="productManagement">商品管理</MenuItem>
                      <MenuItem value="accountManagement">帳號管理</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="mt-4">
                  <Typography variant="body1" className="mr-4">
                    顯示項目:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={10} sm={3} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.number}
                            onChange={handleItemChange}
                            name="number"
                          />
                        }
                        label="編號"
                      />
                    </Grid>
                    <Grid item xs={10} sm={4} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.therapist}
                            onChange={handleItemChange}
                            name="therapist"
                          />
                        }
                        label="治療師"
                      />
                    </Grid>
                    <Grid item xs={10} sm={3} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.client}
                            onChange={handleItemChange}
                            name="client"
                          />
                        }
                        label="個案"
                      />
                    </Grid>
                    <Grid item xs={10} sm={3} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.therapyCost}
                            onChange={handleItemChange}
                            name="therapyCost"
                          />
                        }
                        label="治療費用（預收實現）"
                      />
                    </Grid>
                    <Grid item xs={2} sm={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.productSales}
                            onChange={handleItemChange}
                            name="productSales"
                          />
                        }
                        label="商品銷售"
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}
