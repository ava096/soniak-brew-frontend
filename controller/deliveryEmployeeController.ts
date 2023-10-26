import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import DeliveryEmployeeService from "../service/deliveryEmployeeService";
 
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

    app.get("/employees/delivery", async (req: Request, res: Response) => {

        let employees: DeliveryEmployee[] = [];
 
        try { 
            employees = await employeeservice.getAllDeliveryEmployees();
        } catch (error) {
            console.error(error);
        }
 
        res.render('view-all-delivery-employees', { employees } )

    })
}