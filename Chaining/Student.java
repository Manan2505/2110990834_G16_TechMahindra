package Chaining;
public class Student {
    private String name;
    private int id;
    private Department department;  // ✅ Store Department object

    public Student(int id, String name, Department department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    public Department getDepartment() {  // Getter for Department
        return department;
    }

    public static void main(String[] args) {
        // Create a department
        Department csDept = new Department("Computer Science");

        // Create a student and associate with a department
        Student manan = new Student(1, "Manan", csDept);

        // Access the student's department
        System.out.println("Student's Department: " + manan.getDepartment().getName());

        // Print department details
        manan.getDepartment().getDepartment();
    }
}
