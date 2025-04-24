package RailwayReservationThreading;

public class Reserve implements Runnable{
    int available=1;
    int wanted;
    Reserve(int i){
        wanted=i;
    }
    public synchronized void run(){
        System.out.println("Available Berths= "+available);
        if(available>=wanted){
            String name=Thread.currentThread().getName();
            System.out.println(wanted+" Berths reserved for "+name);
            try{
                Thread.sleep(1500);
                available=available-wanted;
            }catch(InterruptedException ie){
                System.out.println("NO berths");
                System.out.println(ie.getMessage());
            }
        }
    }
}
