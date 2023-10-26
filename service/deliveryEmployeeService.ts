import axios from "axios";
import { DeliveryEmployee } from "../model/deliveryEmployee";

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

    async deleteDeliveryEmployee(employeeID: number): Promise<void> {

        try {
            await axios.delete(`http://localhost:8080/api/deliveryEmployees/${employeeID}`);
        } catch (error) {
            throw new Error("Failed to delete employee");
        }

    }
}