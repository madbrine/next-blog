import { Box } from "@mui/material";
import Image from "next/image";

interface IProps {
    imageUrl: string | undefined;
}
function PublicationImage({imageUrl}: IProps) {
    return(
        <>
        {imageUrl &&
        <Box
            className="post-image"
        >
            <Image
                alt="postImage"
                src={imageUrl}
                layout='responsive'
                width={640}
                height={1}
                objectFit='contain'
            />
        </Box>
        }
        </>
    )
}
export default PublicationImage;