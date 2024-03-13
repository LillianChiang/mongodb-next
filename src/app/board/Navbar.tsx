import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

export function Navbar() {
  return (
    <React.Fragment>
      <Link href="/addClientForm">
        <ListItemButton>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="新增個案資料" />
        </ListItemButton>
      </Link>
      <Link href="/board">
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="病歷查詢" />
        </ListItemButton>
      </Link>
      <Link href="/ManagementInterface">
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="管理介面" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}
