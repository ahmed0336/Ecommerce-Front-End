import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';



import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const ProductList = () => {

  const [List, setList] = useState([])

  const Navigate = useNavigate()

  useEffect(() => {
    GeProductList()

  }, [])

  const GeProductList = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/products", requestOptions)
      .then(response => response.json())
      .then(result => {

        console.log(result)
        setList(result)
      }
      )
      .catch(error => console.log('error', error));


  }

  const DeleteService = (id) => {

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/product/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {

        if (result) {
          toast.success("Product Delete Sucessfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          },);

          console.log(result)
          GeProductList()

        }


      }

      )
      .catch(error => console.log('error', error));

  }


  const NavigatetoUpdatePage = (id) =>{

    Navigate(`/updateproduct/${id}`)

  }

  return (
    <>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "Category", field: "category" },
          { title: "Company", field: "company" },
          { title: "Price", field: "price" },
        ]}
        actions={
          [
            {
              icon: Edit,
              tooltip: 'Edit Category',
              onClick: (event, rowData) => {
                // console.log("edit btn ==>", rowData.SId)
                console.log("edit rowData ==>", rowData)
                console.log("edit btn id ==>", rowData.uid)
                console.log("edit btn name ==>", rowData.name)

                NavigatetoUpdatePage(rowData._id)
                // Setname(rowData.name)
                // Setdescription(rowData.description)
                // setFname2(rowData.Fname)
                // setLname2(rowData.Lname)
                // setContact2(rowData.ContactNo)
                // setId2(rowData.id)
                // Edited(rowData.uid)
                // handleShow2()
              }
            },
            {

              icon: DeleteIcon,
              tooltip: 'Delete User ',
              onClick: (event, rowData) => {
                console.log("rowdata", rowData._id)

                DeleteService(rowData._id)

              }
            },

          ]

        }
        options={{
          actionsColumnIndex: -1
        }}
        data={
          List
        }
        title="Products"
        icons={tableIcons}
      />

    </>
  )
}

export default ProductList