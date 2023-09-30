import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

export default function FavoritesChart() {
  const [age, setage] = useState("");
  const handleChange = (event) => {
    setage(event.target.value);
  };

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  return (
    <>
      <div className="bg-second-bg-web-dark mx-8 rounded-md my-10">
        <div className="border-b border-main-bg-web-dark py-3">
          <div>
            <h2 className="text-center text-xl font-bold">محبوب ترین ها </h2>
          </div>
          <div className="flex justify-center mt-5 ">
            <div className="w-40 ">
              <FormControl
                className="bg-white placeholder:text-white"
                fullWidth
              >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className=""
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        {/* <div className="mt-5 px-4">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">فیلم ها</TableCell>
                  <TableCell align="center">رتبه</TableCell>
                  <TableCell align="center">دسته بندی</TableCell>
                  <TableCell align="center">دانلود / بازدید</TableCell>
                  <TableCell align="center">کاربران</TableCell>
                  <TableCell align="center">تاریخ</TableCell>
                  <TableCell align="center"><i class='bx bx-heart'></i></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="flex justify-center items-center gap-1">
                        <div><img className="w-20" src="./Images/DashbordSlider/1.jpg" alt="" /></div>
                        <div>دیشب</div>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <div className="flex justify-center items-center">
                        <div><i class='bx bx-star' ></i></div>
                        <div>9.2</div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div> */}
        <div className="overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="flex justify-evenly">
                <td>mohammad</td>
                <td>mohammad</td>
                <td>mohammad</td>
                <td>mohammad</td>
                <td>mohammad</td>
                <td>mohammad</td>
                <td>mohammad</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
