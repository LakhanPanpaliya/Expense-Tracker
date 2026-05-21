import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
 
// Import your form stylesheet
import "./Form.css";
 
export default function Form({ onFormData }) {
  const [open, setOpen] = React.useState(false);
 
  const [formData, setFormData] = React.useState({
    date: "",
    title: "",
    description: "",
    price: "",
  });
 
  const handleClickOpen = (event) => {
    if(event && event.currentTarget){
      event.currentTarget.blur();
    }
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
    // console.log(formData);
    setFormData({ date: "", title: "", description: "", price: "" });
  };
 
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((storeData) => ({
      ...storeData,
      [name]: value,
    }));
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    const submittedData = {
    ...formData,
    price: parseFloat(formData.price) || 0,
    id: Date.now()  
  };
    // onFormData(formData);
    if (onFormData) {
      onFormData(formData);
    }
    
    // console.log(formData);
    setFormData({ date: "", title: "", description: "", price: "" });
    setOpen(false);
  }
 
  return (
    <React.Fragment>
      <Box className="balance-right-content">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="card-add-btn"
          onClick={handleClickOpen}
        >
          Add New Expense
        </Button>
      </Box>
 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullWidth
        disableEnforceFocus={false}
        autoFocus={true}
      >
        <DialogTitle id="form-dialog-title" className="dialog-header-title">
          Add New Expense
        </DialogTitle>
 
        <form onSubmit={handleSubmit}>
          <DialogContent className="dialog-form-content">
            <div className="form-group">
              <label htmlFor="expense-date" className="form-input-label">
                Date:
              </label>
              <input
                id="expense-date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
 
            <div className="form-group">
              <label htmlFor="expense-title" className="form-input-label">
                Title:
              </label>
              <input
                id="expense-title"
                type="text"
                name="title"
                placeholder="e.g. Grocery Store"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
 
            <div className="form-group">
              <label htmlFor="expense-desc" className="form-input-label">
                Description:
              </label>
              <input
                id="expense-desc"
                type="text"
                name="description"
                placeholder="e.g. Weekly stock up"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
 
            <div className="form-group">
              <label htmlFor="expense-price" className="form-input-label">
                Price ($):
              </label>
              <input
                id="expense-price"
                type="number"
                name="price"
                placeholder="0.00"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </DialogContent>
 
          <DialogActions className="dialog-action-buttons">
            <Button
              onClick={handleClose}
              type="button"
              className="cancel-form-btn"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="submit-form-btn"
            >
              Add Expense
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
 
 