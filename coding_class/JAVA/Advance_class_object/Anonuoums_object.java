package TokirLearningModule.coding_class.JAVA.Advance_class_object;
class A{

    public A(){
        System.err.println("object created");
    }
    public void show(){
        System.out.println("in A show");
    }
    
}

public class Anonuoums_object {
    public static void main(String[] args) {
        // A obj = new A();
        // obj.show();

        new A().show();  //Anonymous object
    }
}
