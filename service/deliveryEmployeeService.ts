import axios from "axios";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";
import validateDeliveryEmployee from "../validator/deliveryEmployeeValidator";
export default class DeliveryEmployeeService {


    async getAllDeliveryEmployees(): Promise<DeliveryEmployee[]> {
        try {
            const response = await axios.get("http://localhost:8080/api/deliveryEmployees");
            const employees: DeliveryEmployee[] = response.data;
            console.log("employees -> ", employees);
            return employees;
        } catch (e) {
            throw new Error("Unable to retrieve employees, " + e)
        }
    }


    async createDeliveryEmployee(employee: DeliveryEmployeeRequest): Promise<number> {
        const error: string = validateDeliveryEmployee(employee);
        console.log("validation error: ", error);
        if (error) {
            throw new Error(error);
        }

        try {
            const response = await axios.post("http://localhost:8080/api/deliveryEmployees", employee);
            return response.data;
        } catch (e) {
            throw new Error("Could not create new employee")
        }
    }

    async deleteDeliveryEmployee(employeeID: number): Promise<void> {

    try {
        await axios.delete(`http://localhost:8080/api/deliveryEmployees/${employeeID}`);
    } catch(error) {
        throw new Error("Failed to delete employee");
    }

}
}


module.exports.getDeliveryEmployeeById = async function (id: number): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get('http://localhost:8080/api/deliveryEmployees/' + id)
        console.log(response);
        return response.data
    } catch (e) {
        throw new Error('ERROR: Could not get Delivery Employee')
    }
}

