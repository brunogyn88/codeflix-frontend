"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function CategoryEdit() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  console.log(id);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryEdit Page
      </Typography>
      <Typography variant="h3" component="h1">
        categoryID: {id}
      </Typography>
    </Box>
  );
}
