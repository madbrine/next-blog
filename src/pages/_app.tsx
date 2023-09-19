import RootStore from '@/common/store/root'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react';
import { Roboto } from 'next/font/google'
import moment from 'moment';

const store = RootStore.create({
  navigateMenu: true,
  sign: false,
  signModal: false
});

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700']
})

export const StoreContext = createContext(store);
moment.locale('ru');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </StoreContext.Provider>
  )
}
