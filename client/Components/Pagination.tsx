import type { NextPage } from "next";
import { Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { data } from "../pages/studygroups";

const pageSize = 8;

interface PaginationProps {
  setGroups: (p: any) => void;
}

const PaginationGroup: NextPage<PaginationProps> = ({ setGroups }) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    data
      .getData({ from: pagination.from, to: pagination.to })
      .then((res: any) => {
        setPagination({ ...pagination, count: res.count });
        setGroups(res.data);
        console.log(res.data);
      });
  }, [pagination.from, pagination.to]);

  const handleChange = (event: any, value: number) => {
    setPagination({
      ...pagination,
      from: (value - 1) * pageSize,
      to: (value - 1) * pageSize + pageSize,
    });
  };
  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{ mt: 4 }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PaginationGroup;
