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
    .then(res => {
        let choice = res.choice;
    // call function given user input
    switch (choice) {
        case "viewAllDepartments":
          viewAllDepartments();
          break;
        case "viewAllRoles":
          viewAllRoles();
          break;
        case "viewAllEmployees":
          viewAllEmployees();
          break;
        case "addDepartment":
          addDepartment();
          break;
        case "addRole":
          addRole();
          break;
        case "addEmployee":
          addEmployee();
          break;
        case "updateEmployeeRole":
          updateEmployeeRole();
          break;
      }
    }
  )
}

ReadyStart()