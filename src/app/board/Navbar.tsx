import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const listItems = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => router.push('/addClientForm')}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="新增個案資料" />
      </ListItemButton>

      <ListItemButton onClick={() => router.push('/board')}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="病歷查詢" />
      </ListItemButton>

      <ListItemButton onClick={() => router.push('/managementInterface')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="管理介面" />
      </ListItemButton>
    </React.Fragment>
  );
};