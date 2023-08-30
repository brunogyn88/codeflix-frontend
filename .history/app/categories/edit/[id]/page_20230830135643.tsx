"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function CategoryEdit() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryEdit Page
      </Typography>
      <Typography variant="h3" component="h1">
        CategoryID: {id}
      </Typography>
    </Box>
  );
}
