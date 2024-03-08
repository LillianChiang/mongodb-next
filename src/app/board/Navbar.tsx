import React, { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';


export function Navbar() {
  return (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="病歷查詢!!" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AddIcon />
      </ListItemIcon>
      <ListItemText primary="新增個案資料" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="管理介面" />
    </ListItemButton>
  </React.Fragment>
);

}
