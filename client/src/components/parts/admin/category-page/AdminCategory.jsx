import { useContext, useRef, useState } from 'react';
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
import { ThemeContext } from '../../../../contexts/theme-context';
import { DataContext } from '../../../../contexts/data-context';
import { updateRestaurant, deleteRestaurant, addRestaurant } from '../../../../services/restaurant-services';
import { updateHotel, deleteHotel, addHotel } from "../../../../services/hotel-services.js";
import { updateActivity, deleteActivity, addActivity } from '../../../../services/activity-services';
import useItemData from '../../../../hooks/useItemData';
import { StyledAdmin } from '../../../styles/pages/StyledAdmin';
import { deleteItemFromData, addItemToData } from '../../../../state-management/actions/categories-actions';

const columns = [
    { id: 'name', label: 'Name', maxWidth: 170 },
    { id: 'city', label: 'City', maxWidth: 100 },
    { id: 'location', label: 'Location', maxWidth: 100 },
    { id: 'phone', label: 'Phone', maxWidth: 100 },
    { id: 'activityHours', label: 'Activity Hours', maxWidth: 100 },
    { id: 'description', label: 'Description', maxWidth: 100 },
    { id: 'greenPass', label: 'GreenPass', maxWidth: 100 },
    { id: 'link', label: 'Link', maxWidth: 100 },
    { id: 'price', label: 'Price', maxWidth: 100 },
    { id: 'delete', label: 'Delete', maxWidth: 100 },
    { id: 'edit', label: 'Edit', maxWidth: 100 },
];

const AdminCategory = ({ categoryArray, category }) => {
    const { setLoader, restaurantsDispatch, activitiesDispatch, hotelsDispatch } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const { navigateToItemPage } = useItemData();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [updateItem, setUpdateItem] = useState({});
    const [addItem, setAddItem] = useState({ images: [], price: [] });
    const editDialogRef = useRef();
    const addDialogRef = useRef();

    const switchRows = (item, column, value) => {
        switch (column.id) {
            case 'link':
                return <a href={item.link} target="_blank" rel="noreferrer" className="table-link">link</a>
            case 'price':
                return `${item.price[0]}$-${item.price[1]}$`;
            case 'greenPass':
                return item.greenPass ? 'Required' : 'Not Required';
            case 'delete':
                return <button className='td-btn' onClick={() => Delete(item._id, item)}>
                    <DeleteIcon className='td-btn-icon' />
                </button >
            case 'edit':
                return <button className='td-btn' onClick={() => {
                    setUpdateItem(item);
                    editDialogRef.current.showModal();
                }}>
                    <EditIcon className='td-btn-icon' />
                </button>
            default:
                return value
        }
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleEditOnChange = (event) => {
        if (event.target.dataset.name === "images") {
            updateItem.images[event.target.name] = event.target.value;
        }
        else if (event.target.dataset.name === "price") {
            updateItem.price[event.target.name] = Number(event.target.value);
        }
        else {
            updateItem[event.target.name] = event.target.value;
        }
    };
    const Update = () => {
        setUpdateItem({ ...updateItem })
        switch (category) {
            case "restaurants":
                setLoader(true)
                updateRestaurant(updateItem._id, updateItem)
                    .then((res) => { console.log(res); })
                    .finally(() => setLoader(false))
                break;
            case "activities":
                setLoader(true)
                updateActivity(updateItem._id, updateItem)
                    .then((res) => { console.log(res); })
                    .finally(() => setLoader(false))
                break;
            case "hotels":
                setLoader(true)
                updateHotel(updateItem._id, updateItem)
                    .then((res) => { console.log(res); })
                    .finally(() => setLoader(false))
                break;
            default:
                break;
        }
    };
    const handleAddOnChange = (event) => {
        if (event.target.dataset.name === "images") {
            addItem.images[event.target.name] = event.target.value;
        }
        else if (event.target.dataset.name === "price") {
            addItem.price[event.target.name] = Number(event.target.value);
        }
        else {
            addItem[event.target.name] = event.target.value;
        }
    };
    const Add = () => {
        setAddItem({ ...addItem });
        switch (category) {
            case "restaurants":
                setLoader(true)
                addRestaurant(addItem)
                    .then(() => { restaurantsDispatch(addItemToData(categoryArray, addItem)) })
                    .finally(() => setLoader(false))
                break;
            case "activities":
                setLoader(true)
                addActivity(addItem)
                    .then(() => { activitiesDispatch(addItemToData(categoryArray, addItem)) })
                    .finally(() => setLoader(false))
                break;
            case "hotels":
                setLoader(true)
                addHotel(addItem)
                    .then(() => { hotelsDispatch(addItemToData(categoryArray, addItem)) })
                    .finally(() => setLoader(false))
                break;
            default:
                break;
        }
    };
    const Delete = (id, removedItem) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            switch (category) {
                case "restaurants":
                    setLoader(true)
                    deleteRestaurant(id)
                        .then(() => { restaurantsDispatch(deleteItemFromData(categoryArray, removedItem)) })
                        .finally(() => setLoader(false))
                    break;
                case "activities":
                    setLoader(true)
                    deleteActivity(id)
                        .then(() => { activitiesDispatch(deleteItemFromData(categoryArray, removedItem)) })
                        .finally(() => setLoader(false))
                    break;
                case "hotels":
                    setLoader(true)
                    deleteHotel(id)
                        .then(() => { hotelsDispatch(deleteItemFromData(categoryArray, removedItem)) })
                        .finally(() => setLoader(false))
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <StyledAdmin mode={mode}>
            <button className='add-item-btn' onClick={() => addDialogRef.current.showModal()}>
                <AddIcon className='add-item-icon' />
            </button>
            <dialog ref={addDialogRef} className="popup-dialog-modal">
                <div className='modal-form-wrapper'>
                    <h1>Add restaurant</h1>
                    <form onSubmit={Add} method="dialog">
                        <div className="input-wrapper">
                            <label htmlFor="name">Name</label>
                            <input required name="name" onChange={handleAddOnChange} type="text"
                                placeholder="name" minLength={2} maxLength={35} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">City</label>
                            <input required name="city" onChange={handleAddOnChange} type="text"
                                placeholder="city" minLength={2} maxLength={25} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="description">Description</label>
                            <input required name="description" onChange={handleAddOnChange} type="text"
                                placeholder="description" minLength={2} maxLength={255} />
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
                            <label htmlFor="activityHours">Activity Hours</label>
                            <input required name="activityHours" onChange={handleAddOnChange} type="text"
                                placeholder="activityHours" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper images">
                            <label htmlFor="images">Images</label>
                            <input data-name="images" required name={0} onChange={handleAddOnChange} placeholder='image 1' minLength={2} maxLength={255} />
                            <input data-name="images" required name={1} onChange={handleAddOnChange} placeholder='image 2' minLength={2} maxLength={255} />
                            <input data-name="images" required name={2} onChange={handleAddOnChange} placeholder='image 3' minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper price">
                            <label htmlFor="price">Price</label>
                            <input data-name="price" required min={0} type='number' name={0} onChange={handleAddOnChange} placeholder='min price' />
                            <input data-name="price" required min={0} type='number' name={1} onChange={handleAddOnChange} placeholder='max price' />
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
                            <label htmlFor="name">Name</label>
                            <input required name="name" defaultValue={updateItem.name}
                                onChange={handleEditOnChange} type="text"
                                placeholder="name" minLength={2} maxLength={35} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">City</label>
                            <input required name="city" defaultValue={updateItem.city}
                                onChange={handleEditOnChange} type="text"
                                placeholder="city" minLength={2} maxLength={25} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="description">Description</label>
                            <input required name="description" defaultValue={updateItem.description}
                                onChange={handleEditOnChange} type="text"
                                placeholder="description" minLength={2} maxLength={255} />
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
                            <label htmlFor="activityHours">Activity Hours</label>
                            <input required name="activityHours" defaultValue={updateItem.activityHours}
                                onChange={handleEditOnChange} type="text"
                                placeholder="activityHours" minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper images">
                            <label htmlFor="images">Images</label>
                            <input data-name="images" required name={0} onChange={handleEditOnChange} defaultValue={updateItem.images && updateItem.images[0]} placeholder='image 1' minLength={2} maxLength={255} />
                            <input data-name="images" required name={1} onChange={handleEditOnChange} defaultValue={updateItem.images && updateItem.images[1]} placeholder='image 2' minLength={2} maxLength={255} />
                            <input data-name="images" required name={2} onChange={handleEditOnChange} defaultValue={updateItem.images && updateItem.images[2]} placeholder='image 3' minLength={2} maxLength={255} />
                        </div>
                        <div className="input-wrapper price">
                            <label htmlFor="price">Price</label>
                            <input data-name="price" required min={0} type='number' name={0} onChange={handleEditOnChange} defaultValue={updateItem.price && updateItem.price[0]} placeholder='min price' />
                            <input data-name="price" required min={0} type='number' name={1} onChange={handleEditOnChange} defaultValue={updateItem.price && updateItem.price[1]} placeholder='max price' />
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
                            {categoryArray && categoryArray.length >= 1 ?
                                categoryArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                                                {columns.map((column) => {
                                                    const value = item[column.id];
                                                    return (
                                                        <TableCell className="admin-table-td" key={column.id} align={column.align}>
                                                            {
                                                                switchRows(item, column, value)
                                                            }
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })
                                : null
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={categoryArray.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </StyledAdmin>
    );
};

export default AdminCategory;