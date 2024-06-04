import { pool } from "../db.js";

//La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa.
export const getEmployees = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM employee')
    res.json(result)
    // res.json() -> Enviar JSON (Convierte su argumento a JSON si es necesario)
    // res.send() -> Enviar una cadena 
};
export const getEmployee    = (req, res) => res.send('Obtener empleado')
export const createEmployee = (req, res) => res.send('Creando los empleados')
export const updateEmployee = (req, res) => res.send('Actualizando los empleados')
export const deleteEmployee = (req, res) => res.send('Eliminando los empleados')