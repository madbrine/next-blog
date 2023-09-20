import { IPublication } from "@/common/types/IPublication";
import { Avatar, Button, Link, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PublicationCategoryAndDate from "../publication-category-and-date";
import PublicationHeader from "../publication-header";
import PublicationImage from "../publication-image";
import PublicationIndicators from "../publications-indicators";

interface IProps {
    data:  Omit<IPublication, 'content' | 'commentaries'>
}
function PublicationCard({ data }: IProps) {

    return (
        <Box
            sx={{
                mt: '32px'
            }}
        >
            <Paper>
                <PublicationCategoryAndDate
                    id={data.id}
                    categoryValue={data.categoryId}
                    date={data.date}
                    updateDate={data.updateDate}
                />

                <Link
                    href={`/publication/${data.id}`}
                    underline="none"
                    color="black"
                >
                    <PublicationHeader
                        header={data.header}
                        description={data.description}
                    />
                    <PublicationImage
                        imageUrl={data.imageUrl}
                    />
                </Link>
                <PublicationIndicators
                    likes={data.likes}
                    comments={data.comments}
                    views={data.views}
                />
            </Paper>
        </Box>
    )
}
export default PublicationCard;