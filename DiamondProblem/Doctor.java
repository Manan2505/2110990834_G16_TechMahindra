package DiamondProblem;

public interface Doctor extends Person {
    @Override
    default void getDetails() {
        System.out.println("Doctors details");
    }
}
