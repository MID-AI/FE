import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Provider from "./provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MswComponent } from "@/mocks/msw.component";
import QueryProviders from "@/providers/query-provider";
import JotaiProvider from "@/providers/jotai-provider";

export const metadata: Metadata = {
  title: "Hoit",
  description: "AI App",
};

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// if (typeof window === "undefined") {
//   (async () => {
//     const { server } = await import("@/mocks/server");
//     server.listen();
//   })();
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.className} overflow-x-hidden overflow-y-scroll bg-default`}
      >
        <MswComponent />
        <Provider>
          <QueryProviders>
            <JotaiProvider>
              <Sidebar />
              <main className="ml-64 flex items-start justify-center lg:ml-140">
                {children}
              </main>
            </JotaiProvider>
          </QueryProviders>
        </Provider>
      </body>
    </html>
  );
}
