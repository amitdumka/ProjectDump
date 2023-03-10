import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/DailySales/Actions";
import {useUIContext} from "../UIContext";


//DailySale
//dailySale

// Delete particular record.
export function DeleteDialog({ id, show, onHide }) {
  // DailySales UI Context
  const dailySalesUIContext = useUIContext();
  const dailySalesUIProps = useMemo(() => {
    return {
      setIds: dailySalesUIContext.setIds,
      queryParams: dailySalesUIContext.queryParams
    };
  }, [dailySalesUIContext]);

  // DailySales Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.dailySales.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteDailySale = () => {
    // server request for deleting dailySale by id
    dispatch(actions.deleteDailySale(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchDailySales(dailySalesUIProps.queryParams));
      // clear selections list
      dailySalesUIProps.setIds([]);
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          DailySale Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this dailySale?</span>
        )}
        {isLoading && <span>DailySale is deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteDailySale}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
