package Chaining;
import java.util.ArrayList;
import java.util.List;

public class Department {
    private String name;
    private List<String> students = new ArrayList<>();

    public Department(String name) {  // Constructor to initialize department name
        this.name = name;
    }

    public String getName() {   // Getter for department name
        return name;
    }

    public void addStudent(String studentName) { // Add students to the department
        students.add(studentName);
    }

    public void getDepartment() {
        System.out.println("Department: " + name);
    }
}
