package ThreadCommunication;
public class Book {
    String title;
    boolean isCompleted;
    public Book(String title){
        super();
        this.title=title;
    }
    public String getTitle(){
        return this.title;
    }
    public void setCompleted(boolean value){
        this.isCompleted=value;
    }
}
