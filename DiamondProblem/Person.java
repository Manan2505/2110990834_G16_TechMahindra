package DiamondProblem;

public interface Person {
    default void getDetails(){
        System.out.println("Person details");
    }
}
