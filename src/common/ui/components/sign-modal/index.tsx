import useStore from '@/common/hooks/useStore';
import { network } from '@/common/utils/network';
import { Box, Button, Paper, TextField } from '@mui/material';
import { observer } from 'mobx-react';
import { useState } from 'react';
import s from './styles.module.css';

function SignModal() {

    const rootStore = useStore()

    const [isLogin, setLogin] = useState('');
    const [isPassword, setPassword] = useState('');

    const isModal = rootStore.signModal;

    const login = () => {
        rootStore.setSignModal();
        rootStore.setSign();
    }

    const signIn = async () => {
        try {
            const success = await network.post.signIn({
                login: isLogin,
                password: isPassword
            });
            if (success) {
                rootStore.setSignModal();
                rootStore.setSign();
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <>
        {isModal &&
        <Box className={s['container']}>
            <Paper className={s['paper']}>
                <Box className={s['header']}>
                    Привет!
                </Box>
                <TextField
                    label="Логин"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        mt: '16px'
                    }}
                    value={isLogin}
                    onChange={(e) => {
                        setLogin(e.target.value);
                    }}
                />
                <TextField
                    label="Пароль"
                    variant="outlined"
                    type={"password"}
                    sx={{
                        width: '100%',
                        mt: '16px'
                    }}
                    value={isPassword}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button
                    size="large"
                    sx={{
                        width: '100%',
                        mt: '16px',
                        textTransform: "none"
                    }}
                    onClick={signIn}
                >
                    Войти
                </Button>
            </Paper>
        </Box>
        }
        </>
    )
}
export default observer(SignModal);