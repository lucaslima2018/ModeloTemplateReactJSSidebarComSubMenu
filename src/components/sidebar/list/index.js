import MenuUsuarios from "../menuUsuarios";
import MenuSimples from "../menuSimples";



const ListSubMenu = (prop) => {
 

  return (
    <>    
        <MenuSimples open={prop.open}/>
        <MenuUsuarios open={prop.open} handleDrawerOpen={prop.handleDrawerOpen}/>        
      
    </>
  );
}

export default ListSubMenu;