import * as actionTypes from "./actionTypes";
// import axios from "../../axios/axios";

//order information to get from state

/*---------------------------------
  Get Information from store
---------------------------------*/
const getOrderInformationSuccess = () => {
  return {
    type: actionTypes.GET_ORDERINFORMATION   
  };
};

export const getOrderInformation = () => {
  return dispatch => {    
    dispatch(getOrderInformationSuccess());
  }
};

/*---------------------------------
  Get Information from store
---------------------------------*/


/*---------------------------------
  update  Information in store
---------------------------------*/

//-----update Delivery Type
const updateDeliveryTypeSuccess = response => {
  return {
    type: actionTypes.UPDATE_DELIVERYTYPE,
    data: response
  };
};
export const updateDeliveryType=(obj)=>{
  return dispatch => {
    dispatch(updateDeliveryTypeSuccess(obj));
    }

}
//-----update Delivery Type
const addPizzaSuccess = response => {
  return {
    type: actionTypes.ADD_PIZZA,
    data: response
  };
};
export const addPizza=(obj)=>{
  return dispatch => {
    dispatch(addPizzaSuccess(obj));
    }
}

const deletePizzaSuccess = response => {
  return {
    type: actionTypes.REMOVE_PIZZA,
    data: response
  };
};
export const deletePizza=(obj)=>{
  return dispatch => {
    dispatch(deletePizzaSuccess(obj));
    }

}

const updatePizzaSuccess = response => {
  return {
    type: actionTypes.UPDATE_PIZZA,
    data: response
  };
};


export const updatePizza=(obj)=>{
  return dispatch => {
    dispatch(updatePizzaSuccess(obj));
    }
}



const processOrderSuccess = () => {
  return {
    type: actionTypes.PROCESS_ORDER
  };
};

export const processOrder=()=>{
  return dispatch => {
    dispatch(processOrderSuccess());
    }
}








//code to use axios to get data from API.
/*
  axios
      .delete(url)
      .then(response => {
        dispatch(deleteDataSuccess(response.data));
      })
      .catch(error => {
        //TODO: handle the error when implemented
      });
*/