import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

const SubMenuUsuarios = (prop) => {    

    return (
        <>
            {[
                { text: 'Cadastro de Usuários', icon: <HomeIcon />, href: '/consultores' },
            ].map((item) => (
                <>
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ pl: 4 }} href={item.href}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                </>
            ))}
        </>
    )
}

export default SubMenuUsuarios;