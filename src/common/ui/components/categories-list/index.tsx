import useCategories from "@/common/hooks/useCategories";
import useStore from "@/common/hooks/useStore";
import { ICategory } from "@/common/types/ICategory";
import { network } from "@/common/utils/network";
import { Avatar, Box, Button, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import s from './styles.module.css';

function CategoriesList() {
    const rootStore = useStore();

    const [isCategories, setCategories] = useState<ICategory[] | false>(false)

    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await network.get.categories();
                setCategories(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
        console.log('Fetching categories');
    }, [])

    return (
        <>
        {isCategories &&
            <Stack
                direction="column"
                className={s['stack']}
            >
                {
                    isCategories.map((category) => {
                        return (
                            <Box className={s['button-box']}>
                                <Button
                                    className={s['button']}
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
                            </Box>
                        )
                    })
                }
            </Stack>
        }
        </>
    )
}
export default observer(CategoriesList);