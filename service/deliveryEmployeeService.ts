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

async createDeliveryEmployee(employee: DeliveryEmployee): Promise<number> {
        try {
            const response = await axios.post("http://localhost:8080/api/deliveryEmployees", employee);
            return response.data;
        } catch (e) {
            throw new Error("Could not create new employee")
        }
    }
}