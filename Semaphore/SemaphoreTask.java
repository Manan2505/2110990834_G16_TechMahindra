package Semaphore;
public class SemaphoreTask {
    public static void main(String[] args) {
        ParkingLot parkingLot=new ParkingLot(3);
        for(int i=1; i<=6; i++){
            String carName="Car "+i;
            new Thread(()->parkingLot.parkCar(carName)).start();
        }
    }
}
