import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useStore from "@/common/hooks/useStore";

function NavigateMenuButton() {

    const rootStore = useStore();

    const handleNavigateMenu = () => {
        rootStore.setNavigateMenu();
    }

    return (
        <IconButton
            arial-label="menu" 
            size="large"
            onClick={handleNavigateMenu} 
        >
            <MenuIcon />
        </IconButton>
    )
}
export default NavigateMenuButton;