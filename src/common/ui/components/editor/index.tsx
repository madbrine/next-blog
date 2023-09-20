import { Box, Button, IconButton, Input, InputBase, Paper, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import s from "./styles.module.css";
import HPlusMobiledataIcon from '@mui/icons-material/HPlusMobiledata';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import ImageIcon from '@mui/icons-material/Image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ClearIcon from '@mui/icons-material/Clear';
import moment from "moment";
import axios, { AxiosResponse } from "axios";
import { useRouter } from 'next/router';
import { IPublication } from "@/common/types/IPublication";
import useStore from "@/common/hooks/useStore";
import { observer } from "mobx-react";
import DeleteIcon from '@mui/icons-material/Delete';
import { network } from "@/common/utils/network";
import Link from "next/link";

interface IProps {
    data?: IPublication
}
function Editor({ data }: IProps) {

    const router = useRouter();
    const rootStore = useStore();

    useEffect(() => {
        if (!rootStore.sign) {
            router.push('/');
        }
    }, [rootStore.sign])
    useEffect(() => {
        if (data) {
            setMainHeader(data.header);
            setMainDescription(data.description);
            {
                data.imageUrl &&
                    setMainImage(data.imageUrl);
            }
            {
                data.content &&
                    data.content.map((contentItem, key) => {
                        {
                            contentItem.type === 'h' &&
                                setContent([...isContent, {
                                    type: 'h',
                                    data: contentItem.data
                                }])
                        }
                        {
                            contentItem.type === 'p' &&
                                setContent([...isContent, {
                                    type: 'p',
                                    data: contentItem.data
                                }])
                        }
                        {
                            contentItem.type === 'q' &&
                                setContent([...isContent, {
                                    type: 'q',
                                    data: contentItem.data
                                }])
                        }
                        {
                            contentItem.type === 'img' &&
                                setContent([...isContent, {
                                    type: 'img',
                                    data: contentItem.data
                                }])
                        }
                    })
            }
        }
    }, [])
    const [isMainHeader, setMainHeader] = useState('');
    const [isMainDescription, setMainDescription] = useState('');
    const [isMainImage, setMainImage] = useState('');
    const [isContent, setContent] = useState<{ type: 'h' | 'p' | 'q' | 'img'; data: string; }[]>([]);



    const addH = () => {
        setContent([...isContent, {
            type: 'h',
            data: ''
        }])
    }
    const addP = () => {
        setContent([...isContent, {
            type: 'p',
            data: ''
        }])
    }
    const addQ = () => {
        setContent([...isContent, {
            type: 'q',
            data: ''
        }])
    }
    const addImg = () => {
        setContent([...isContent, {
            type: 'img',
            data: ''
        }])
    }

    let newData: IPublication = {
        id: 0,
        userId: 0,
        categoryId: 1,
        date: moment().format("YYYY-MM-DD-HH-mm-ss"),
        updateDate: '',
        header: isMainHeader,
        description: isMainDescription,
        imageUrl: isMainImage,
        views: 0,
        likes: 0,
        comments: 0,
        content: isContent,
    }

    const result = async () => {
        console.log(newData);

        if (data) {
            let updateData = {
                id: data.id,
                userId: data.userId,
                categoryId: data.categoryId,
                date: data.date,
                updateDate: moment().format("YYYY-MM-DD-HH-mm-ss"),
                header: isMainHeader,
                description: isMainDescription,
                imageUrl: isMainImage,
                views: data.views,
                likes: data.likes,
                comments: data.comments,
                content: isContent,
            }
            try {
                const response = await axios.put(`/api/putPublication?id=${data.id}`, updateData);
                console.log(updateData)
                if (response.status === 200) {
                    console.log('Post updated successfully');
                    router.push('/');
                } else {
                    console.error('Error updating post:', response.status);
                }
            } catch (error) {
                console.error('CLIENT Error updating post:', error);
            }
        } else {
            try {
                const response = await axios.post('/api/postPublication', newData);

                if (response.status === 200) {
                    console.log('Post published successfully');
                    router.push('/');
                } else {
                    console.error('Error publishing post:', response.status);
                    // Обработка ошибки при публикации
                }
            } catch (error) {
                console.error('CLIENT Error publishing post:', error);
                // Обработка ошибки при публикации
            }
        }
    }

    const deletePublication = async () => {
        if (data) {
            const response = await network.delete.publication(data.id)
            router.push('/');
        }
    }

    return (

        <Box
            sx={{
                mt: "64px",
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    maxWidth: "688px",
                    pt: "16px",
                    pl: "16px",
                    pr: "16px"
                }}
            >
                <TextField
                    label="Оглавление"
                    multiline
                    variant="outlined"
                    className={s['text-field']}
                    sx={{
                        resize: {
                            fontSize: "22px"
                        }
                    }}
                    value={isMainHeader}
                    onChange={(e) => {
                        setMainHeader(e.target.value);
                    }}
                />
                <TextField
                    label="Описание"
                    multiline
                    variant="outlined"
                    className={s['text-field']}
                    value={isMainDescription}
                    onChange={(e) => {
                        setMainDescription(e.target.value);
                    }}
                />
                <Paper
                    className={s['upload-img']}
                    sx={{
                        p: 1,
                        bgcolor: "#f2f2f2"
                    }}
                >
                    <TextField
                        label="Ссылка изображения"
                        variant="outlined"
                        value={isMainImage}
                        onChange={(e) => {
                            setMainImage(e.target.value);
                        }}
                    />
                    {/* <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                    />
                    <Button variant="contained" onClick={handleUploadImage}>
                        Upload Image
                    </Button> */
                    }
                </Paper>

                {isContent.map((content, key) => {
                    return (
                        <>
                            {content.type === 'h' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Заголовок"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton
                                        arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'p' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Параграф"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}>
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'q' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Цитата"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}>
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'img' &&
                                <Paper
                                    className={s['upload-img']}
                                    sx={{
                                        p: 1,
                                        bgcolor: "#f2f2f2"
                                    }}
                                >
                                    <TextField
                                        label="Ссылка изображения"
                                        variant="outlined"
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    {/* <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                    />
                    <Button variant="contained" onClick={handleUploadImage}>
                        Upload Image
                    </Button> */
                                    }
                                </Paper>
                            }
                        </>
                    )
                })

                }

                <Stack
                >
                    <Button
                        startIcon={<HPlusMobiledataIcon />}
                        onClick={addH}
                    >
                        + заголовок
                    </Button>
                    <Button
                        startIcon={<FormatTextdirectionLToRIcon />}
                        onClick={addP}
                    >
                        + параграф
                    </Button>
                    <Button
                        startIcon={<FormatQuoteIcon />}
                        onClick={addQ}
                    >
                        + цитата
                    </Button>
                    <Button
                        startIcon={<ImageIcon />}
                        onClick={addImg}
                    >
                        + изображение
                    </Button>
                    <Button
                        onClick={result}
                    >
                        Опубликовать
                    </Button>
                    {data &&
                        <Button
                            startIcon={<DeleteIcon />}
                            onClick={deletePublication}
                        >
                            УДАЛИТЬ
                        </Button>
                    }
                </Stack>
            </Paper>
        </Box>
    )
}
export default observer(Editor);