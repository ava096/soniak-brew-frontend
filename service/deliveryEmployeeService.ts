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
}

module.exports.getDeliveryEmployeeById = async function (id: number): Promise<DeliveryEmployee>{
    try {
        const response = await axios.get('http://localhost:8080/api/deliveryEmployees/'+ id)
        console.log(response);
        return response.data
    } catch (e) {
        throw new Error('ERROR: Could not get Delivery Employee')
    }
}


