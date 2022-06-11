const { prompt } = require('inquirer')

function ReadyStart() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Please choose from the following',
            choices: [
                {
                    name: 'View All Departments',
                    value: 'viewAllDepartments'
                },
                {
                    name: 'View All Roles',
                    value: 'ViewAllRoles',
                },
                {
                    name: 'View All Employees',
                    value: 'viewAllEmployees',
                },
                {
                    name: 'Add Department',
                    value: 'addDepartment'
                },
                {
                    name: 'Add Role',
                    value: 'addRole',
                },
                {
                    name: 'Add An Employee',
                    value: 'addEmployee',
                },
                {
                    name: 'Update Employee Role',
                    value: 'updateEmployeeRole'
                }
            ]
        }
    ])
}
