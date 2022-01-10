import { React, useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit, Visibility } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link
} from "react-router-dom";


export default function UserList() {

  const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', flex:0.6 ,minWidth: 50 },
        { field: 'firstName', headerName: 'First name',  flex:1 ,minWidth: 90  },
        { field: 'lastName', headerName: 'Last name', flex:1 ,minWidth: 90  },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number', flex:1 ,minWidth: 90 
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          flex:1 ,minWidth: 90 
        },
        {
          field: 'action',
          headerName: "Action", 
          flex:1 ,minWidth: 90,
          renderCell: (params)=>{
            return(
              <div style={{display: "flex", gap: "8px"}}>
              <div className="userListView"  onClick={()=>{navigate(`/costumers/view/${params.row.id}`)}}><Visibility /></div>

                <div onClick={()=>{navigate(`/users/${params.row.id}`)}} className="userListEdit"><Edit /></div>
            
              <div className="userListDelete"  onClick={()=>{alert("DELETAR AINDA NAO DISPONIVEL")}}><DeleteOutline /></div>
              
              </div>
              )
          }
        },
      ];
      
      const rows = [
        { id: 9999, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];


    return (
        <div className="userList">
            <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
        </div>
    )
}
