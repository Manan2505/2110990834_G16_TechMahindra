package DiamondProblem;

public interface Patient extends Person{
    @Override
    default void getDetails() {
        System.out.println("Person details");
    }
}
