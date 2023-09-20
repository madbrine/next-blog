import { Box } from "@mui/material";

interface IProps {
    text: string
}
function PublH({text}: IProps) {
    return(
        <Box
            sx={{
                mt: '32px'
            }}
            className="post-header"
        >
            {text}
        </Box>
    )
}
export default PublH;