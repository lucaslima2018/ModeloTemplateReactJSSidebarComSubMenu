import * as React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const MenuSimples = (prop) => {
    return (
        <>
            {[
                { text: 'Home', icon: <HomeIcon />, href: '/' },
                { text: 'Configurações', icon: <SettingsIcon />, href: '/' },
            ].map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        href={item.href}
                        sx={{
                            minHeight: 48,
                            justifyContent: prop.open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: prop.open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: prop.open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
}

export default MenuSimples;