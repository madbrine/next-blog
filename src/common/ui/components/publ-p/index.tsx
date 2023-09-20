import { Box } from "@mui/material";

interface IProps {
    text: string
}
function PublP({ text }: IProps) {
    return (
        <Box
            sx={{
                mb: '16px'
            }}
            className="post-description"
        >
                {text}
        </Box>
    )
}
export default PublP;