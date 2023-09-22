import { Result, Results } from "@/app/types/Category";
import { Box, IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  data: Results | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage: number[];

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
  handleDelete: (id: string) => void;
};

export function CategoriesTable({
  data,
  perPage,
  isFetching,
  rowsPerPage,
  handleOnPageChange,
  handleFilterChange,
  handleOnPageSizeChange,
  handleDelete,
}: Props) {
  const componentProps = {
    toolbar: {
      showQuickFilter: true,
    },
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, renderCell: renderNameCell },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "is_active",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    { field: "created_at", headerName: "Created At", flex: 1 },
    {
      field: "id",
      headerName: "Actions",
      type: "string",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  function mapDataToGridRows(data: Results) {
    const { data: categories } = data;
    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      is_active: category.is_active,
      created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
      description: category.description,
    }));
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link href={`/categories/edit/${rowData.id}`}>
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        aria-label="delete"
        onClick={() => handleDelete(params.value)}
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  const rows: GridRowsProp = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.meta.total ?? 0;

  return (
    <Box sx={{ display: "flex", height: 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={componentProps}
        // pageSizeOptions={[perPage]}
        filterMode="server"
        paginationMode="server"
        loading={isFetching}
        rowCount={rowCount}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
        disableColumnFilter={true}
        disableDensitySelector={true}
        // pagination={}
        paginationModel={{ page: 1, pageSize: perPage }}
        onPageSizeChange={handleOnPageSizeChange}
        onFilterChange={handleFilterChange}
        onPageChange={handleOnPageChange}
        checkboxSelection={false}
        pageSizeOptions={[10, 20, 50]}
      />
    </Box>
  );
}
