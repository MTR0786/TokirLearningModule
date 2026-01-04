package TokirLearningModule.coding_class.JAVA.Advance_class_object;

class A{
    public void show(){
        System.out.println("in A show ");
    }
 
public void config(){
    System.out.println("in A config");
}
}

class B extends A{
//     public void show(){
//     System.out.println("in B show");
// }
}

public class overloading {
    public static void main(String[] args) {
        
        A obj_A = new A();

        B obj_B = new B();

        obj_B.show();


    }
}
