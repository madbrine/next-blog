import { Button, IconButton, Stack } from "@mui/material"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import useStore from "@/common/hooks/useStore";
import { observer } from "mobx-react";

function SignButton() {

    const rootStore = useStore();

    const isSign = rootStore.sign

    const setSign = () => {
        rootStore.setSign();
        sessionStorage.setItem('token', '')
    }

    const setSignModal = () => {
        rootStore.setSignModal();
    } 
    return (
        <Stack direction="row">
            {/* <IconButton arial-label="notifications" size="large">
                <NotificationsNoneIcon />
            </IconButton> */}
            {!isSign ?
                <Button
                    variant="text"
                    size="large"
                    startIcon={<PermIdentityIcon />}
                    onClick={setSignModal}>
                    Войти
                </Button>
                :
                <Button
                    variant="text"
                    size="large"
                    startIcon={<PermIdentityIcon />}
                    onClick={setSign}>
                    Выйти
                </Button>
            }
        </Stack>
    )
}
export default observer(SignButton);