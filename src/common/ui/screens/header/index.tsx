import { Box, Button, IconButton, InputBase, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";
import NavigateMenuButton from "../../components/navigate-menu-button";
import AddIcon from '@mui/icons-material/Add';
import s from './styles.module.css'
import SignButton from "../../components/sign-button";
import SearchInput from "../../components/search-input";
import SignModal from "../../components/sign-modal";
import { network } from "@/common/utils/network";
import { useEffect } from "react";
import useStore from "@/common/hooks/useStore";
import { observer } from "mobx-react-lite";

function HeaderScreen() {

    const router = useRouter();
    const rootStore = useStore();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (network.post.checkToken(token)) {
            rootStore.setSignTrue();
        }
    }, [router])

    const navigateNewPublication = () => {
        router.push('/new-publication');
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                zIndex: 10
            }}
        >
            <SignModal />
            <Stack
                direction="row"
                className={s['container']}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: 'center' }}
                >
                    <NavigateMenuButton />
                    <div className={s['logo']}>logo</div>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        width: '615px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* <SearchInput/> */}
                    {rootStore.sign &&
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<AddIcon />}
                            sx={{
                                height: '36px',
                                borderRadius: '6px',
                                bgcolor: '#fff',
                                color: '#595959'
                            }}
                            onClick={navigateNewPublication}
                        >
                            Создать
                        </Button>
                    }
                </Stack>
                <SignButton />
            </Stack>
        </Box>
    )
}
export default observer(HeaderScreen);