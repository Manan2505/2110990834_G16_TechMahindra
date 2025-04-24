import React, { useEffect } from "react";
import useForm from "./hooks/useForm";

const initialFieldValues = {
  id: 0,
  name: "",
  accountNumber: "",
  balance: "",
};

const BankForm = ({ addOrEdit, recordForEdit }) => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";

    if ("accountNumber" in fieldValues)
      temp.accountNumber =
        fieldValues.accountNumber.length === 10
          ? ""
          : "Account number should be 10 digits.";

    if ("balance" in fieldValues)
      temp.balance = /^\d+(\.\d{1,2})?$/.test(fieldValues.balance)
        ? ""
        : "Enter a valid balance.";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null) {
      setValues({ ...recordForEdit });
    }
  }, [recordForEdit]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label>Name</label>
        <input
          className={`form-control ${errors.name && "is-invalid"}`}
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="form-group mb-2">
        <label>Account Number</label>
        <input
          className={`form-control ${errors.accountNumber && "is-invalid"}`}
          name="accountNumber"
          value={values.accountNumber}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.accountNumber}</div>
      </div>

      <div className="form-group mb-2">
        <label>Balance</label>
        <input
          className={`form-control ${errors.balance && "is-invalid"}`}
          name="balance"
          value={values.balance}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.balance}</div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default BankForm;