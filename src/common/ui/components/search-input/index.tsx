import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
    return (
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
    )
}
export default SearchInput;