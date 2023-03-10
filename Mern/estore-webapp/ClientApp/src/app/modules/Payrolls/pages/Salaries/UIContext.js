import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}0${date}T00:00:00`;
}

export const UIConsumer = UIContext.Consumer;

export function UIProvider({ UIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const initSalary = {
    currentSalaryId: 0,
    employeeId: 0,
    employee: null,
    userId: "WebUI",
    entryStatus: 0,
    isReadOnly: false,
    basicSalary :0,
    lPRate:0,
    incentiveRate:0,incentiveTarget:0,wowBillRate:0,wowBillTarget:0,
    isFullMonth :false,
    isSundayBillable :false,effectiveDate :new Date(),
    closeDate :null,
    isEffective :false, isTailoring :false,paySlips:null
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initSalary,
    newSalaryButtonClick: UIEvents.newSalaryButtonClick,
    openEditSalaryDialog: UIEvents.openEditSalaryDialog,
    openDeleteSalaryDialog: UIEvents.openDeleteSalaryDialog,
    openDeleteSalariesDialog: UIEvents.openDeleteSalariesDialog,
    openFetchSalariesDialog: UIEvents.openFetchSalariesDialog,
    openUpdateSalariesStatusDialog:
      UIEvents.openUpdateSalariesStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
