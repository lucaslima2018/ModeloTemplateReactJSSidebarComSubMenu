import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SubMenuUsuarios from './subMenuUsuarios';

const MenuUsuarios = (prop) => {

    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    const handleClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    return (
        <>
            {[
                { text: 'Usuários', icon: <AccountCircleIcon />, href: '/' },
            ].map((item) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton 
                        onClick={handleClick}
                        component="a"
                        sx={{
                            minHeight: 48,
                            justifyContent: openSubMenu ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover .expandIcon': {
                                display: 'inline-flex' 
                            }
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: openSubMenu ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: prop.open ? 1 : 0 }} />
                        {openSubMenu ? <ExpandLess /> : <ExpandMore className="expandIcon" sx={{ display: 'none' }} />}
                    </ListItemButton>
                    <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SubMenuUsuarios />
                        </List>
                    </Collapse>
                </ListItem>
            ))}
        </>
    );
}

export default MenuUsuarios;