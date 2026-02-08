package TokirLearningModule.coding_class.JAVA.day4;

enum Status{                              // >> class
    Running , Failed, pending, Success;  //>> objects 
}


public class ENUM_1 {
    public static void main(String[] args) {
        int i = 4;
        Status s = Status.Failed;
        // System.out.println(s);

        if (s == Status.Running){
            System.out.println("All good wait");
        }
        if (s == Status.pending){
            System.out.println("wait ");
        }
        if (s == Status.Success){
            System.out.println("Done");
        }
        if (s == Status.Failed){
            System.out.println("Try again");
        }
    }
    
}
