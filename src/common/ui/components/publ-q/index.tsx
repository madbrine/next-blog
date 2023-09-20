import { Box, Stack } from "@mui/material"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import s from './styles.module.css'

interface IProps {
    text: string
}
function PublQ({ text }: IProps) {
    return (
        <Stack
            direction="row"
            sx={{
                mt: '32px',
                mb: '16px'
            }}
        >
            <FormatQuoteIcon fontSize="large"/>
            <Box className={s['container']}>
                {text}
            </Box>
        </Stack>
    )
}
export default PublQ