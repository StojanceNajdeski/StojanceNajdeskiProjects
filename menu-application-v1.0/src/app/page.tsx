import MenuComponent from "@/menuComponent/page";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />;
      <MenuComponent />
    </div>
  );
}

export default appWithTranslation(MyApp);
