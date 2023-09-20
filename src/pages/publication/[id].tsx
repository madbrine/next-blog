import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NavigateMenuScreen from '@/common/ui/screens/navigate-menu';
import HeaderScreen from '@/common/ui/screens/header';
import PublicationScreen from '@/common/ui/screens/publication';

export default function PublicationIdPage() {

    const router = useRouter();
    const { id } = router.query

    const [data, setData] = useState(
        {
            id: 1,
            userId: 1,
            categoryId: 1,
            date: '',
            updateDate: '',
            header: '',
            description: '',
            imageUrl: '',
            views: 0,
            likes: 0,
            comments: 0,
            content: [{ type: 'h', data: 'РАБОТАЕТ' }],
            commentaries: null
        }
    );

    useEffect(() => {
        if (id!) {
            const getData = async () => {
                try {
                    console.log(`Has data ${id}`)
                    const response = await axios.get(`/api/getPublicationById?id=${id}`);
                    if (response.status === 200) {
                        setData(response.data);
                        console.log(response.data);
                    } else {
                        console.error('Error fetching post data:', response.status);
                    }
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            };
            getData();
        }

    }, [id])

    return (
        <>
            <Head>
                <title>Блог Степанова Павла</title>
                <meta name="description" content="Блог Степанова Павла. Здесь я рассказываю о IT и своей жизни" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HeaderScreen />
                <div style={{ display: 'flex' }}>
                    <NavigateMenuScreen />
                    <PublicationScreen
                        data={data}
                    />
                </div>
            </main>
        </>
    )
}