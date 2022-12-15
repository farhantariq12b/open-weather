import React from "react";
import DataTable from "react-data-table-component";

interface ReactDataTableProps {
  title: string;
  pagination: boolean;
  data: any[];
  progressPending: boolean;
  columns: any[];
}

function ReactDataTable(props: ReactDataTableProps) {
  return <DataTable {...props} />;
}

export default ReactDataTable;
