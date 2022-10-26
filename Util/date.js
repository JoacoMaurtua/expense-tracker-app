//Obtener el formato de la fecha
export function getFormattedDate(date){
  return date.toISOString().slice(0,10);
};

//Obtener la fecha de una cantidad especifica de dias
export function getDateMinusDays(date,days){
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

//new Date() --> 10 de Octubre

//getDateMinusDays(new Date(), 7) --> 3 de Octubre