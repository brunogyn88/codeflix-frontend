import { Result } from "@/app/types/Category";
import { GridFilterModel } from "@mui/x-data-grid";

type Props = {
  data: Result | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage: number;

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
  handleDelete: (id: number) => void;
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
}: Props) {}
