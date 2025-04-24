package ExceptionHandling;
public class Main {
    public static int testMethod(){
        try{
            System.out.println("TRY");
            return 10;

        }catch(Exception e){
            System.out.println(e.getMessage());
            return 20;
        }finally{
            System.out.println("Finally");
        }
    }
    public static void main(String[] args) {
        int result=testMethod();
        System.out.println(result);
    }
}
