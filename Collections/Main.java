package Collections;

public class Main {
    public static void main(String[] args) {
        UserService us=new UserService();
        us.addUser(new User(1,"manan","manan@example.com"));
        System.out.println(us.getAllUsers());
        us.updateUser(1,"ram","ram@example.com");
        System.out.println(us.getAllUsers());
    }
}
