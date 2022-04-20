import { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../../contexts/data-context';
import { GetActivities, DeleteActivity, UpdateActivity, AddActivity } from '../../../services/activity-service';
import { GetData } from '../../../state-management/actions/categories-actions';
import { StyledAdmin } from '../../styles/pages/StyledAdmin';
import { ThemeContext } from '../../../contexts/theme-context';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Name', maxWidth: 170 },
    { id: 'city', label: 'City', maxWidth: 100 },
    { id: 'location', label: 'Location', maxWidth: 100 },
    { id: 'phone', label: 'Phone', maxWidth: 100 },
    { id: 'activitiesHours', label: 'Activity Hours', maxWidth: 100 },
    { id: 'greenPass', label: 'GreenPass', maxWidth: 100 },
    { id: 'link', label: 'Link', maxWidth: 100 },
    { id: 'price', label: 'Price', maxWidth: 100 },
    { id: 'delete', label: 'Delete', maxWidth: 100 },
    { id: 'edit', label: 'Edit', maxWidth: 100 },
];

const AdminActivities = () => {
    const { mode } = useContext(ThemeContext);
    const [updateItem, setUpdateItem] = useState({})
    const [updateImages, setUpdateImages] = useState([])
    const [updatePrice, setUpdatePrice] = useState([])
    const [addItem, setAddItem] = useState({})
    const [addImages, setAddImages] = useState([])
    const [addPrice, setAddPrice] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { activitiesDispatch } = useContext(MainContext);
    const [rows, setRows] = useState([]);
    const editDialogRef = useRef();
    const addDialogRef = useRef();

    useEffect(() => {
        GetActivities(activitiesDispatch)
            .then(res => { setRows(res.data) })
    }, [activitiesDispatch]);


    const handleEditOnChange = (event) => {
        updateItem[event.target.name] = event.target.value;
    };
    const Update = (event) => {
        event.preventDefault();
        setUpdateItem({ ...updateItem })
        UpdateActivity(updateItem._id, updateItem)
            .then((res) => { console.log(res); })

        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetData(res.data)
                )
            })
    };

    const Delete = (id) => {
        if (window.confirm('Are you sure you want to delete this activity?')) {
            DeleteActivity(id)
                .then((res) => { console.log(res) })

            GetActivities()
                .then(res => {
                    activitiesDispatch(
                        GetData(res.data)
                    )
                })
        }
    };

    const handleAddImagesOnChange = (event) => {
        addImages[event.target.name] = event.target.value;
        addItem.images = addImages;
    };
    const handleAddPriceOnChange = (event) => {
        addPrice[event.target.name] = Number(event.target.value);
        addItem.price = addPrice;
    };

    const handleEditImagesOnChange = (event) => {
        updateImages[event.target.name] = event.target.value;
        updateItem.images = updateImages;
    };
    const handleEditPriceOnChange = (event) => {
        updatePrice[event.target.name] = Number(event.target.value);
        updateItem.price = updatePrice;
    };



    const handleAddOnChange = (event) => {
        addItem[event.target.name] = event.target.value;
    }
    const Add = (event) => {
        event.preventDefault();
        setAddItem({ ...addItem });
        AddActivity(addItem)
            .then((res) => { console.log(res); })

        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetData(res.data)
                )
            })
    };



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const switchRows = (row, column, value) => {
        switch (column.id) {
            case 'link':
                return <Link to={`/${row.name}`} state={row} className="table-link">link</Link>
            case 'price':
                return `${row.price[0]}$-${row.price[1]}$`;
            case 'greenPass':
                return row.greenPass ? 'Required' : 'Not Required';
            case 'delete':
                return <button className='td-btn' onClick={() => Delete(row._id)}>
                    <DeleteIcon className='td-btn-icon' />
                </button >
            case 'edit':
                return <button className='td-btn' onClick={() => {
                    setUpdateItem(row);
                    editDialogRef.current.showModal();
                }}>
                    <EditIcon className='td-btn-icon' />
                </button>
            default:
                return value
        }
    };


    return (
        <StyledAdmin mode={mode}>
            <button className='add-item-btn' onClick={() => addDialogRef.current.showModal()}>
                <AddIcon className='add-item-icon' />
            </button>
            <dialog ref={addDialogRef} className="popup-dialog-modal">
                <div className='modal-form-wrapper'>
                    <h1>Add activity</h1>
                    <form onSubmit={Add} method="dialog">
                        <div className="input-wrapper">
                            <label htmlFor="name">First name</label>
                            <input required name="name" onChange={handleAddOnChange} type="text"
                                placeholder="name" minLength={2} maxLength={10} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">City</label>
                            <input required name="city" onChange={handleAddOnChange} type="text"
                                placeholder="city" minLength={2} maxLength={25} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="location">Location</label>
                            <input required name="location" onChange={handleAddOnChange} type="text"
                                placeholder="location" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="phone">Phone</label>
                            <input required name="phone" onChange={handleAddOnChange} type="text"
                                placeholder="phone" minLength={2} maxLength={30} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="greenPass">Green Pass</label>
                            <select required name="greenPass" onChange={handleAddOnChange}>
                                <option value={true}>Required</option>
                                <option value={false}>Not Required</option>
                            </select>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="link">Link</label>
                            <input required name="link" onChange={handleAddOnChange} type="text"
                                placeholder="link" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="activitiesHours">Activity Hours</label>
                            <input required name="activitiesHours" onChange={handleAddOnChange} type="text"
                                placeholder="activitiesHours" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper images">
                            <label htmlFor="images">Images</label>
                            <input required name={0} onChange={handleAddImagesOnChange} placeholder='image 1' minLength={2} maxLength={255} />
                            <input required name={1} onChange={handleAddImagesOnChange} placeholder='image 2' minLength={2} maxLength={255} />
                            <input required name={2} onChange={handleAddImagesOnChange} placeholder='image 3' minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper price">
                            <label htmlFor="price">Price</label>
                            <input required min={0} type='number' name={0} onChange={handleAddPriceOnChange} placeholder='min price' />
                            <input required min={0} type='number' name={1} onChange={handleAddPriceOnChange} placeholder='max price' />
                        </div>
                        <button className='button'>Add</button>
                    </form>
                    <button className='close-dialog-btn' onClick={() => addDialogRef.current.close()}>
                        <CloseIcon className='close-dialog-icon' />
                    </button>
                </div>
            </dialog>
            <dialog ref={editDialogRef} className="popup-dialog-modal">
                <div className='modal-form-wrapper'>
                    <h1>Edit {updateItem.name}</h1>
                    <form onSubmit={Update} method="dialog">
                        <div className="input-wrapper">
                            <label htmlFor="name">First name</label>
                            <input required name="name" defaultValue={updateItem.name}
                                onChange={handleEditOnChange} type="text"
                                placeholder="name" minLength={2} maxLength={10} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">City</label>
                            <input required name="city" defaultValue={updateItem.city}
                                onChange={handleEditOnChange} type="text"
                                placeholder="city" minLength={2} maxLength={25} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="location">Location</label>
                            <input required name="location" defaultValue={updateItem.location}
                                onChange={handleEditOnChange} type="text"
                                placeholder="location" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="phone">Phone</label>
                            <input required name="phone" defaultValue={updateItem.phone}
                                onChange={handleEditOnChange} type="text"
                                placeholder="phone" minLength={2} maxLength={30} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="greenPass">Green Pass</label>
                            <select required name="greenPass" defaultValue={updateItem.greenPass} onChange={handleEditOnChange}>
                                <option value={true}>Required</option>
                                <option value={false}>Not Required</option>
                            </select>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="link">Link</label>
                            <input required name="link" defaultValue={updateItem.link}
                                onChange={handleEditOnChange} type="text"
                                placeholder="link" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="activitiesHours">Activity Hours</label>
                            <input required name="activitiesHours" defaultValue={updateItem.activitiesHours}
                                onChange={handleEditOnChange} type="text"
                                placeholder="activitiesHours" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper images">
                            <label htmlFor="images">Images</label>
                            <input required name={0} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[0]} placeholder='image 1' minLength={2} maxLength={255} />
                            <input required name={1} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[1]} placeholder='image 2' minLength={2} maxLength={255} />
                            <input required name={2} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[2]} placeholder='image 3' minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper price">
                            <label htmlFor="price">Price</label>
                            <input required min={0} type='number' name={0} onChange={handleEditPriceOnChange} defaultValue={updateItem.price && updateItem.price[0]} placeholder='min price' />
                            <input required min={0} type='number' name={1} onChange={handleEditPriceOnChange} defaultValue={updateItem.price && updateItem.price[1]} placeholder='max price' />
                        </div>
                        <button className='button'>Update</button>
                    </form>
                    <button className='close-dialog-btn' onClick={() => editDialogRef.current.close()}>
                        <CloseIcon className='close-dialog-icon' />
                    </button>
                </div>
            </dialog>
            <Paper className="admin-table-wrapper">
                <TableContainer sx={{ maxHeight: "70vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className='table-head-th'
                                        key={column.id}
                                        align='left'
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell className="admin-table-td" key={column.id} align={column.align}>
                                                        {
                                                            switchRows(row, column, value)
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </StyledAdmin>
    );
};
export default AdminActivities;