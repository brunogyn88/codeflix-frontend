"use client";
import { ReduxState, selectCategoryById } from "@/lib/redux";
import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryForm } from "../../components/CategoryForm";
import {
  Category,
  updateCategory,
} from "@/lib/redux/slices/categorySlice/categorySlice";

interface CategoryProps {
  params: {
    id: string;
  };
}

export default function CategoryEdit(params: CategoryProps) {
  const id = params.params.id;
  const category = useSelector((state: ReduxState) =>
    selectCategoryById(state, id)
  );
  const [categoryState, setCategoryState] = useState<Category>(category);

  const [isdisabled, setIsdisabled] = useState(false);

  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateCategory(categoryState));
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
            <Typography variant="h4">Edit Category</Typography>
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
