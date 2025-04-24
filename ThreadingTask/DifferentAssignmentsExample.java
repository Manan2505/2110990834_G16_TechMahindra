package ThreadingTask;

public class DifferentAssignmentsExample {
    public static void main(String[] args) {
        Classroom classroom=new Classroom();
        //creating multiple student threads
        Thread student1 =new Thread(classroom::waitForAssignment,"Student1");
        Thread student2=new Thread(classroom::waitForAssignment,"Student2");
        //creating teacher thread
        Thread teacher=new Thread(()->{
            try{
                Thread.sleep(2000);
                classroom.giveAssignment("Math Homework");
                Thread.sleep(2000);
                classroom.giveAssignment("Science Project");
            }catch (InterruptedException e){
                e.printStackTrace();
            }
        });

        //Start student threads first
        student1.start();
        student2.start();
        //Start teacher thread
        teacher.start();
    }
}
