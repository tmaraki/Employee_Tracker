SELECT departments.department_name AS department, employee*
FROM departments
LEFT JOIN employee
ON employee.department_id = departments.id
ORDER BY departments.department_name;