import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as reseteForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import BillingCycle from './billingCycle';
import { reset as reseteForm, initialize } from "redux-form";


const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operacao Realizada com sucesso.");
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.erros.forEach((error) => toastr.error("Erro", error));
      });
  };
}

export function showUpdate(billingCycle){
  return [

  
  showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}