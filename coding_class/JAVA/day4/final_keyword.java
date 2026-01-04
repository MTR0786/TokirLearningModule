package TokirLearningModule.coding_class.JAVA.day4;

// final - variable , method ,class
// final - is a keyword - if we give final to any methods,variable , class than no one can use this name in same class or subclass or inharite classes.


class A {
    public final void  show(){
        System.out.println("in  A show");
    }
}

class B extends A{
    // public void show(){
    //     System.out.println("in B sow");
    // }
}

public class final_keyword{
    public static void main(String[] args) {
        A obj1 =new A();
        
        B obj2 =new B();
        obj2.show();
    }
}
