import { IPublication } from '@/common/types/IPublication'
import EditPublicationScreen from '@/common/ui/screens/edit-publication'
import HeaderScreen from '@/common/ui/screens/header'
import NavigateMenuScreen from '@/common/ui/screens/navigate-menu'
import PublicationsScreen from '@/common/ui/screens/publications'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function EditPublicationPage() {

  const router = useRouter();
  const {id} = router.query;

  const [data, setData] = useState<IPublication | false>(false);

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
          {data &&
            <EditPublicationScreen  data={data}/>
          }
        </div>
      </main>
    </>
  )
}