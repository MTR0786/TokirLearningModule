package TokirLearningModule.coding_class.JAVA.day5;

public class excepcation_handling {
    public static void main(String[] args) {

        int nums[] = new int[5];

        int i = 9;
        int j = 18;
        try{
            j = j/i;
            System.out.println(nums[4]);
            System.out.println(nums[5]);
        }
        catch(Exception e){
            System.out.println("something went wrong:- " + " "+e);
        }
        finally{
            System.out.println("i am finnaly block");
        }
        System.err.println("hello");
    }
}
