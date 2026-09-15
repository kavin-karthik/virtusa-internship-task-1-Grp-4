import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Employee 
{
    int id;
    String name;
    int age;
    double salary;

    Employee(int id, String name, int age, double salary) 
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

public class EmployeeFilter 
{
  public static void main(String[] args) 
  {
        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(101, "Kishoth", 22, 30000));
        employees.add(new Employee(102, "Rahul", 28, 45000));
        employees.add(new Employee(103, "Priya", 25, 60000));
        employees.add(new Employee(104, "Arun", 30, 55000));
        employees.add(new Employee(105, "Meena", 23, 25000));
    
        List<Employee> result = employees.stream()
                .filter(emp -> emp.age >= 25 && emp.salary >= 50000)
                .collect(Collectors.toList());

        System.out.println("Filtered Employees:");

        for (Employee emp : result) {
            System.out.println(emp.id + " " + emp.name + " " + emp.age + " " + emp.salary);
        }
    }
}
