import EditorScreen from '@/common/ui/screens/new-publication';
import HeaderScreen from '@/common/ui/screens/header';
import NavigateMenuScreen from '@/common/ui/screens/navigate-menu';
import Head from 'next/head';

export default function NewPublicationPage() {
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
          <EditorScreen />
        </div>
      </main>
    </>
  )
}
