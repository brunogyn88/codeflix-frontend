"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CategoryEdit() {
  const router = useRouter();

  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryEdit Page
      </Typography>
      <Typography variant="h3" component="h1">
        <button type="button" onClick={() => router.push("/dashboard")}>
          Dashboard
        </button>
      </Typography>
    </Box>
  );
}
