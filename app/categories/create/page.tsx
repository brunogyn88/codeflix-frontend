"use client";
import {
  Category,
  createCategory,
} from "@/lib/redux/slices/categorySlice/categorySlice";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { CategoryForm } from "../components/CategoryForm";
import { useDispatch } from "react-redux";

interface CategoryProps {
  params: {
    id: string;
  };
}

export default function CategoryCreate(params: CategoryProps) {
  const [isdisabled, setIsdisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });
  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createCategory(categoryState));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={categoryState}
          isdisabled={isdisabled}
          isLoading={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
}
