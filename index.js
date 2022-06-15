// Write your solution in this file!


const employee = {
    name: "john doe",
    streetAddress: "1 unknown lane"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const out = {...employee};

    out[key] = value;

    return out;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const out = {...employee};
    delete out[key];
    return out;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}