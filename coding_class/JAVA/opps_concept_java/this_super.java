// import TokirLearningModule.coding_class.JAVA.day4.A;
// import TokirLearningModule.coding_class.JAVA.day4.B;

class A{
    public A(){
        // super();java
        System.out.println("in A");
    }
     public A(int n){
        super();
        System.out.println("in A int");
    }
}

class B extends A{
    public B(){
        super(10);
        System.err.println("in B");
    }

    public B(int n){
        super();
        System.out.println("in B int");
    }
}

public class this_super {
  public static void main(String a[]){
    // A obj_A = new A();
    // A obj_A1 = new A(30);


    B obj_B =new B();
    B obj_B1 = new B(10);
  }  
}
