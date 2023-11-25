import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes'

import { api } from "@/utils/api";

import "@/styles/globals.css";
import MainLayout from "@/components/MainLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider session={session}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
