/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import Header from "./components/Header";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          {props.children}
        </body>
      </html>
    </Providers>
  );
}
