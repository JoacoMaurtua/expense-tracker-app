import axios from 'axios';

const URL_BACKEND = 'https://rn-expense-tracker-7cac9-default-rtdb.firebaseio.com'; 

//Enviar expenses a la base de datos
export const storeExpenseData = async (expenseData) => {
  //solicitus POST al REST API de firebase:
  const response = await axios.post(
    `${URL_BACKEND}/expenses.json`,
    expenseData
  );
  const id = response.data.name; //name es el id que usa firebase
  return id;
};

//Extraer expenses de la base de datos
export const fetchExpenseData = async () => {
  const response = await axios.get(`${URL_BACKEND}/expenses.json`);
  console.log(response.data);
  
  //convertir el formato del objeto en firebase a un formato personalizado
  const expenses = []; 

  for(const key in response.data) {
    const newExpenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title
    }
    expenses.push(newExpenseObj);
  };

  return expenses; //array con cada objeto expense en el nuevo formato
}


//Editar un expense
export const editExpenseData = (id, expenseData) => {
  return axios.put(`${URL_BACKEND}/expenses/${id}.jso`, expenseData)
}


//Eliminar un expense
export const deleteExpenseData = (id) => {
  return axios.delete(`${URL_BACKEND}/expenses/${id}.json`)
}



