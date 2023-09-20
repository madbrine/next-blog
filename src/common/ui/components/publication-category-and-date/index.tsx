import useCategories from "@/common/hooks/useCategories";
import useStore from "@/common/hooks/useStore";
import useTimeRange from "@/common/hooks/useTimeRange";
import { ICategory } from "@/common/types/ICategory";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { observer } from "mobx-react";
import { useRouter } from "next/router";


interface IProps {
    id: number;
    categoryValue: number;
    date: string;
    updateDate: string;
}
function PublicationCategoryAndDate({
    id,
    categoryValue,
    date,
    updateDate,
}: IProps) {

    const router = useRouter();
    const rootStore = useStore();

    const categories: ICategory[] = useCategories()
    const category = categories.find((categories) => categories.id === categoryValue);
    const publishedTime = useTimeRange(date);
    const updateTime = useTimeRange(updateDate);

    const openEditor = () => router.push(`/edit-publication/${id}`)

    return (
        <>
            <Stack
                direction="row"
                sx={{
                    p: '16px 16px 8px 8px',
                    justifyContent: 'space-between'
                }}
            >
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                    {/* {category &&
                        <Button
                            className="post-category"
                            startIcon={
                                <Avatar
                                    src={category.imageUrl}
                                    sx={{
                                        height: '24px',
                                        width: '24px',
                                    }}
                                />
                            }
                        >
                            {category.text}
                        </Button>
                    } */}
                    <Box
                        className="post-published-time"
                    >
                        {publishedTime}
                    </Box>

                    {updateDate &&
                        <Box
                            className="post-updated-time"
                        >
                            обновлено {updateTime}
                        </Box>
                    }
                </Stack>
                {rootStore.sign &&
                    <IconButton
                        color="primary"
                        aria-label="edit"
                        onClick={openEditor}
                    >
                        <BorderColorIcon/>
                    </IconButton>
                }
            </Stack>
        </>
    )
}
export default observer(PublicationCategoryAndDate);