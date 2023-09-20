import { Box, Stack } from "@mui/material";

interface IProps {
    header: string;
    description: string;
}
function PublicationHeader({header, description}: IProps) {
    return(
        <Stack
            sx={{
                p: '0px 24px 16px 16px'
            }}
        >
            <Box className="post-header">
                {header}
            </Box>
            <Box className="post-description">
                {description}
            </Box>
        </Stack>
    )
}
export default PublicationHeader;