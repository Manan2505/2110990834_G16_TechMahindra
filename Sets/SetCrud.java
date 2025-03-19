package Sets;
import java.util.*;
import java.lang.*;
public class SetCrud {
    private Set<String>dataSet;
    public SetCrud(){
        this.dataSet=new HashSet<>();
    }
    //create
    public boolean addElement(String element){
        return dataSet.add(element);
    }
    //read
    public Set<String> getAllElements(){
        return new HashSet<>(dataSet);
    }
    public boolean containsElement(String element){
        return dataSet.contains(element);
    }
    //update
    public boolean updateElement(String oldElement, String newElement){
        if(dataSet.contains(oldElement)){
            dataSet.remove(oldElement);
            return dataSet.add(newElement);
        }
        return false;
    }
    public int getSize(){
        return dataSet.size();
    }
}
