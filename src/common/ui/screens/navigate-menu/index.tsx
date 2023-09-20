import useStore from "@/common/hooks/useStore";
import { Avatar, Box, Button, Stack } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import s from './styles.module.css';
import CategoriesList from "../../components/categories-list";

function NavigateMenuScreen() {

    const rootStore = useStore();

    const isNavigateMenu = rootStore.navigateMenu;

    return (
        <>
            {isNavigateMenu
                ?
                <Box className={s['box']}>
                    <Stack
                        direction="column"
                        className={s['container']}
                    >
                        <Stack
                            direction="column"
                            className={s['stack']}
                        >
                            <Box className={s['button-box']}>
                                <Button
                                    className={s['button']}
                                    startIcon={
                                        <AccessTimeIcon
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                            }}
                                        />
                                    }
                                >
                                    Свежее
                                </Button>
                            </Box>
                            <Box className={s['button-box']}>
                                <Button
                                    className={s['button']}
                                    startIcon={
                                        <WhatshotIcon
                                            sx={{
                                                height: '24px',
                                                width: '24px',
                                            }}
                                        />
                                    }
                                >
                                    Популярное
                                </Button>
                            </Box>
                        </Stack>
                        <CategoriesList/>
                    </Stack>
                </Box>
                :
                <div className={s['empty-container']} />
            }
        </>
    )
}
export default NavigateMenuScreen;