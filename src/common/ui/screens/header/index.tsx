import { Box, Button, IconButton, InputBase, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";
import NavigateMenuButton from "../../components/navigate-menu-button";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import s from './styles.module.css'

function HeaderScreen() {

    const router = useRouter();
    
    const navigateNewPost = () => {
        router.push('/new-post');
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                zIndex: 10
            }}
        >
            
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
                        width: '640px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Paper
                        component="form"
                        elevation={0}
                        sx={{
                            p: '4px 4px 4px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#b3d3f8',
                        }}
                    >
                        <InputBase
                            sx={{
                                width: '15pc',
                            }}
                            placeholder="Поиск"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: '6px' }}
                            aria-label="search"
                            size="small"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
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
                        onClick={navigateNewPost}
                    >
                        Создать
                    </Button>
                </Stack>

            </Stack>
        </Box>
    )
}
export default HeaderScreen;