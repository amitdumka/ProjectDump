// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";

//receipt
//Receipt

// Validation schema
const ReceiptEditSchema = Yup.object().shape({
  onDate: Yup.date().required("Date is required"),
  amount: Yup.number().integer().moreThan(0).positive().min(1).required("Amount is required"),
  payMode: Yup.number().required("Receipt Mode is required"),
  partyName: Yup.string().required("Paid To is required"),
  remarks: Yup.string().required("Receipt details is required"),
  storeId: Yup.number().required("Select Store "),
  receiptSlipNo:Yup.string().required("Receipt Slip No is required"),
});

export function EditForm({
  saveReceipt,
  receipt,
  actionsLoading,
  onHide,payModes,
  partiesList, bankAccountsList
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={receipt}
        validationSchema={ReceiptEditSchema}
        onSubmit={(values) => {
          saveReceipt(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  
                   {/* Store */}
                   <div className="col-lg-4">
                    <Select name="storeId" label="Store">
                      <option value="1">Dumka</option>
                      <option value="2">Jamshedpur</option>
                    </Select>
                  </div>

                  {/* Party  */}
                  <div className="col-lg-4">
                    <Select name="partyId" label="Ledger">
                      <option value={null} >Select Party</option>
                      {partiesList.map((item) => (
                        <option key={item.partyId} value={item.partyId}>
                          {item.partyName}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
               
                <div className="form-group row">
                  {/* Date of Receipt */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="onDate"
                      label="On Date"
                    />
                  </div>
                  {/*  State Name*/}
                 <div className="col-lg-4">
                    <Field
                      name="receiptSlipNo"
                      component={Input}
                      placeholder="Receipt SlipNo"
                      label="Receipt SlipNo"
                    />
                  </div>
                   {/*  Paid To Name*/}
                   <div className="col-lg-4">
                    <Field
                      name="partyName"
                      component={Input}
                      placeholder="Paid To"
                      label="Paid To"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                    />
                  </div>
                 {/*  State Name*/}
                 <div className="col-lg-4">
                    <Field
                      name="remarks"
                      component={Input}
                      placeholder="Remarks"
                      label="Remarks"
                    />
                  </div>
                   {/* PayMode */}
                   <div className="col-lg-4">
                    <Select name="payMode" label="Receipt Mode">
                      {payModes.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                 </div>
                 <div className="form-group row">
                    {/* FROM aCCOUNT */}
                    <div className="col-lg-4">
                    <Select name="bankAccountId" label="From Account">
                      <option value={null}>Select Bank Account</option>
                      {bankAccountsList.map((item) => (
                        <option key={item.bankAccountId} value={item.bankAccountId}>
                          {item.account}
                        </option>
                      ))}
                    </Select>
                  </div>                  
                 {/*  State Name*/}
                 <div className="col-lg-4">
                    <Field
                      name="paymentDetails"
                      component={Input}
                      placeholder="Receipt Details"
                      label="Receipt Details"
                    />
                  </div>
                  
                  
                 </div> 
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
