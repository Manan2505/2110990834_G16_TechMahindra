package ThreadingTask;

import java.util.*;

public class Classroom {
    private final Queue<String>assignments=new LinkedList<>();
    public synchronized void waitForAssignment(){
        while(assignments.isEmpty()){
            try{
                System.out.println(Thread.currentThread().getName()+" is waiting for an assignment");
                wait();
            }catch (InterruptedException e){
                e.printStackTrace();
            }
        }
        String assignment=assignments.poll();
        System.out.println(Thread.currentThread().getName()+" received assignment "+assignment);
    }
    public synchronized void giveAssignment(String assignment){
        System.out.println("Teacher gave assignment "+assignment);
        assignments.offer(assignment);
        notify();
    }
  }
