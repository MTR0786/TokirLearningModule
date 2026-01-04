package TokirLearningModule.coding_class.JAVA.day4;
// package TokirLearningModule.coding_class.JAVA.day4;

//Polymorphism means “many forms”

// In Java, polymorphism mainly happens in two ways:

// 1️⃣ Compile-time Polymorphism (Method Overloading)

// 👉 Happens at compile time

// 2️⃣ Run-time Polymorphism (Method Overriding)

// 👉 Happens at run time

class MathUtil {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}


class A {
    public void show(){
        System.out.println("in  A show");
    }
}

class B extends A{
    public void show(){
        System.out.println("in B sow");
    }
}

public class polymorphism {
    public static void main(String[] args) {
        A obj1 =new A();
        obj1.show();

        A obj = new B();
        obj.show();
    }

}
