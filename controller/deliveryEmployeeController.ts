import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import DeliveryEmployeeService from "../service/deliveryEmployeeService";
 
const deliveryEmployeeService = require('../service/deliveryEmployeeService')

module.exports = function(app: Application) {
    
    let employeeservice: DeliveryEmployeeService = new DeliveryEmployeeService();
 
    app.get("/employees", async (req: Request, res: Response) => {
        let employees: DeliveryEmployee[] = [];
 
        try {
           console.log("i am here!!") 
            employees = await employeeservice.getAllDeliveryEmployees();
        } catch (error) {
            console.error(error);
        }
 
        res.render('test-delivery-employee', { employees } )
    })

    app.get('/deliveryEmployees/:id', async (req: Request, res: Response) =>{
        let data = DeliveryEmployee;

        try {
            data = await deliveryEmployeeService.getDeliveryEmployeeById(req.params.id)

            console.log(data)
        } catch (e) {
            console.error(e);
        }

        res.render('view-delivery-employee', { employees: data })
    })




}