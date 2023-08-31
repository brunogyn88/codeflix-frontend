"use client";
/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/globals.css";
import Header from "./components/Header";
import { Box, ThemeProvider } from "@mui/material";
import { appTheme } from "./config/theme";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <Providers>
        <html lang="en">
          <body>
            <Header />
            <Box
              component="main"
              sx={{
                height: "100vh",
                backgroundColor: (theme) => theme.palette.grey[900],
              }}
            >
              {props.children}
            </Box>
          </body>
        </html>
      </Providers>
    </ThemeProvider>
  );
}
