"use client";
/* Components */
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/lib/redux/slices/categorySlice/categorySlice";
import { Box, Button, Link } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { CategoriesTable } from "./components/CategoryTable";
import { GridFilterModel } from "@mui/x-data-grid";

export default function CategoryList() {
  const [rowsPerPage] = useState([10, 25, 50, 100]);
  const { data, isFetching, error } = useGetCategoriesQuery();
  const [deleteCategory, deleteCategoryStatus] = useDeleteCategoryMutation();
  const { enqueueSnackbar } = useSnackbar();

  function handleOnPageChange(page: number) {
    console.log(page);
  }

  function handleOnPageSizeChange(perPage: number) {
    console.log(perPage);
  }

  function handleFilterChange(filterModel: GridFilterModel) {
    console.log(filterModel);
  }

  async function handleDeleteCategory(id: string) {
    await deleteCategory({ id });
  }

  useEffect(() => {
    if (deleteCategoryStatus.isSuccess) {
      enqueueSnackbar("Category deleted", {
        variant: "success",
      });
    }
    if (deleteCategoryStatus.error) {
      enqueueSnackbar("Category not deleted", {
        variant: "error",
      });
    }
  }, [deleteCategoryStatus, enqueueSnackbar]);

  return (
    <Box maxWidth="lg" sx={{ pt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          href="/categories/create"
          style={{ marginBottom: "1rem" }}
          component={Link}
        >
          New Category
        </Button>
      </Box>
      <CategoriesTable
        data={data}
        isFetching={isFetching}
        perPage={10}
        rowsPerPage={rowsPerPage}
        handleDelete={handleDeleteCategory}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}
      />
    </Box>
  );
}
