import axios from 'axios';

const URL_BACKEND = 'https://rn-expense-tracker-7cac9-default-rtdb.firebaseio.com'; 

//Enviar expenses a la base de datos
export const storeExpenseData = (expenseData) => {
  //solicitus POST al REST API de firebase:
  axios.post(
    `${URL_BACKEND}/expenses.json`,
    expenseData
  );
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




