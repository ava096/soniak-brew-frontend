import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import DeliveryEmployeeService from "../service/deliveryEmployeeService";
import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";
 
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
    });

app.get("/add-delivery-employee", async (req: Request, res: Response) => {
    res.render('add-delivery-employee');
});

    app.post("/add-delivery-employee", async (req: Request, res: Response) => {
        let data: DeliveryEmployeeRequest = req.body; 
        let id: number 
        
        try {
            id = await employeeservice.createDeliveryEmployee(data);
            return res.redirect('deliveryEmployees/' + id)
        } catch (error) {
            console.error(error);
            res.locals.errorMessage = error.message;
        }
 
        return res.render('add-delivery-employee')
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





    app.get("/employees/delivery", async (req: Request, res: Response) => {

        let employees: DeliveryEmployee[] = [];
 
        try { 
            employees = await employeeservice.getAllDeliveryEmployees();
        } catch (error) {
            console.error(error);
        }
 
        res.render('view-all-delivery-employees', { employees } )

    })


    app.get("/delete-delivery-employee", async (req: Request, res: Response) => {

        let employees: DeliveryEmployee[] = [];
 
        try { 
            employees = await employeeservice.getAllDeliveryEmployees();
        } catch (error) {
            console.error(error);
        }
 
        res.render('delete-delivery-employee', { employees })

    })

    app.post("/delete-delivery-employee", async (req: Request, res: Response) => {

        // Get the employee ID from the form
        const employeeID = req.body.employeeID;

        try {
            await employeeservice.deleteDeliveryEmployee(employeeID);
            return res.redirect("/employees/delivery");
        } catch (error) {
            console.error(error);

            res.locals.errorMessage = error.message;
            
            return res.render('delete-delivery-employee', await employeeservice.getAllDeliveryEmployees());
        }

    })
}