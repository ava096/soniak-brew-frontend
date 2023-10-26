import { DeliveryEmployeeRequest} from "../model/deliveryEmployeeRequest";

export default function validateDeliveryEmployee(employee: DeliveryEmployeeRequest): string {

if (employee.name.length >50){
    return "Name greater than 50 characters";
}

if(employee.salary <  0 || employee.salary >= 600000) {
    return "The salary is less than 0 or the salary is greater than 600,000.00";
}

if (employee.bank_account_number.length != 8) {
    return "The bank account number is greater than 8"
}

if (employee.national_insurance_number.length != 9) {
    return "The insurance number is greater than 9"
}

return null;

}