import { IPublication } from "@/common/types/IPublication";
import { Box, Paper, Stack } from "@mui/material";
import PublicationCategoryAndDate from "../../components/publication-category-and-date";
import PublicationContent from "../../components/publication-content";
import PublicationHeader from "../../components/publication-header";
import PublicationImage from "../../components/publication-image";
import PublicationIndicators from "../../components/publications-indicators";
import s from './styles.module.css'

interface IProps {
    data: IPublication
}
function PublicationScreen({ data }: IProps) {
    return (
        <Box
            className={s['container']}
        >
            <Paper
                className="publication-container"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Stack
                    sx={{
                        width: '640px'
                    }}
                >
                    <PublicationCategoryAndDate
                        id={data.id}
                        categoryValue={data.categoryId}
                        date={data.date}
                        updateDate={data.updateDate}
                    />
                    <PublicationHeader
                        header={data.header}
                        description={data.description}
                    />
                    <PublicationImage
                        imageUrl={data.imageUrl}
                    />
                    {data.content &&
                        <PublicationContent
                            contentData={data.content}
                        />
                    }
                    <PublicationIndicators
                        likes={data.likes}
                        views={data.views}
                        comments={data.comments}
                    />
                </Stack>
            </Paper>
            <Paper
                className="publication-container"
            >
                <Box
                    className={s['commentaries-container']}
                >
                </Box>
            </Paper>
        </Box >
    )
}
export default PublicationScreen;