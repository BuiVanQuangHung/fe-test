"use client";

import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

type Props = {
  header: string[];
  body: any[] | undefined;
};
const CustomTable = (props: Props) => {
  //! State
  const { header, body } = props;

  //! Function
  return (
    <>
      <TableContainer>
        <TableMui stickyHeader>
          <TableHead>
            <TableRow>
              {header?.map((header, index) => {
                return (
                  <TableCell
                    className="font-bold uppercase"
                    align="center"
                    key={`table-cell-header-${index}`}
                  >
                    {header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {body?.length == 0 ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="text-center">No data</div>
                </TableCell>
              </TableRow>
            ) : (
              body?.map((row, ind) => {
                return (
                  <TableRow key={`row-${Math.random()}`}>
                    {Object?.entries(row).map(([cellName, cellValue]: any) => {
                      const action = cellName == "action";
                      return (
                        <TableCell
                          align="center"
                          key={`cell-${cellName}`}
                          // onClick={() => {
                          //   handleClickRow && !action && handleClickRow(ind);
                          // }}
                        >
                          {cellValue}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </TableMui>
      </TableContainer>
    </>
  );
};

export default CustomTable;
