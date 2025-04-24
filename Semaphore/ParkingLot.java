package Semaphore;

import java.util.concurrent.Semaphore;

public class ParkingLot {
    private final Semaphore semaphore;
    public ParkingLot(int slots){
        this.semaphore=new Semaphore(slots);
    }
    public void parkCar(String car){
        try{
            System.out.println(car + " is trying to park");
            semaphore.acquire();
            System.out.println(car + " has parked");
            Thread.sleep(3000);
            System.out.println(car + " is leaving");
            semaphore.release();
        }catch(InterruptedException ie){
            ie.printStackTrace();
        }
    }

}
