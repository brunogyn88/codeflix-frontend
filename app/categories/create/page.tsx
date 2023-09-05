"use client";
import { Category } from "@/lib/redux/slices/categorySlice/categorySlice";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

interface CategoryProps {
  params: {
    id: string;
  };
}

export default function CategoryCreate(params: CategoryProps) {
  const [isdisabled, setIsdisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
