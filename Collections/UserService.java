package Collections;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserService {
    private List<User>users=new ArrayList<>();
    //create
    public void addUser(User user){
        users.add(user);
    }
    //read
    public List<User>getAllUsers(){
        return users;
    }
    public User getUserById(int id){

        return users.stream().filter(user -> user.getId()==id).findFirst().orElse(null);
    }
    //update
    public boolean updateUser(int id,String name,String email){
        Optional<User>optionalUser=users.stream().filter(user -> user.getId()==id).findFirst();
        if(optionalUser.isPresent()){
            User user=optionalUser.get();
            user.setName(name);
            user.setEmail(email);
            return true;
        }
        return false;
    }
    //delete
    public boolean deleteUser(int id){
        return users.removeIf(user -> user.getId()==id);
    }
    //getSize(for testing)
    public int getUserCount(){

        return users.size();
    }


}
