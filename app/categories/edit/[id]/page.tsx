"use client";
import { ReduxState, selectCategoryById } from "@/lib/redux";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CategoryForm } from "../../components/CategoryForm";

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

  const [isdisabled, setIsdisabled] = useState(false);

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={category}
          isdisabled={isdisabled}
          isLoading={false}
          onSubmit={() => {}}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
}
