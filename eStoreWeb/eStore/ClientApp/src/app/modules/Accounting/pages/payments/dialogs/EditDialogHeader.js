import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

//payment
//Payment

export function EditDialogHeader({ id }) {
  // Payments Redux state
  const { paymentForEdit, actionsLoading } = useSelector(
    (state) => ({
      paymentForEdit: state.payments.paymentForEdit,
      actionsLoading: state.payments.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Payment";
    if (paymentForEdit && id) {
      _title = `Edit payment '${paymentForEdit.firstName} ${paymentForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [paymentForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
