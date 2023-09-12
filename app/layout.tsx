"use client";
/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/globals.css";
import Header from "./components/Header";
import { Box, ThemeProvider } from "@mui/material";
import { appTheme } from "./config/theme";
import { SnackbarProvider } from "notistack";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <Providers>
        <html lang="en">
          <body>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={2000}
            >
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
            </SnackbarProvider>
          </body>
        </html>
      </Providers>
    </ThemeProvider>
  );
}
