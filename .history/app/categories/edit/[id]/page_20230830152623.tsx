"use client";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoryEdit() {
  const router = useRouter();
  const params = usePathname();
  const paramsData = useSearchParams();

  console.log(params, paramsData);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryEdit Page {params} {paramsData}
      </Typography>
      <Typography variant="h3" component="h1">
        <button type="button" onClick={() => router.push("/dashboard")}>
          Dashboard
        </button>
      </Typography>
    </Box>
  );
}
