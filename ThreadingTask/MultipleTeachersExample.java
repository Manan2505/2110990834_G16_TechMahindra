package ThreadingTask;

public class MultipleTeachersExample {
    public static void main(String[]args){
        Classroom classroom=new Classroom();
        //creating multiple students threads
        Thread student1=new Thread(classroom::waitForAssignment,"Student1");
        Thread student2=new Thread(classroom::waitForAssignment,"Student2");

        //creating multiple teacher threads
        Thread teacher1=new Thread(()->classroom.giveAssignment("Teacher1"));
        Thread teacher2=new Thread(()->classroom.giveAssignment("Teacher2"));

        //Start student threads first(they will wait)
        student1.start();
        student2.start();

        //Teachers give assignments at different times
        try{
            Thread.sleep(2000);
            teacher1.start();
            Thread.sleep(2000);
            teacher2.start();
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }
}
