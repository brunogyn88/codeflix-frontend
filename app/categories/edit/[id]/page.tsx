"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

interface CategoryProps {
  params: {
    id: string;
  };
}

export default function CategoryEdit(params: CategoryProps) {
  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryEdit Page
      </Typography>
      <Typography variant="h3" component="h1">
        categoryID: {params.params.id}
      </Typography>
    </Box>
  );
}
