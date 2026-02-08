package TokirLearningModule.coding_class.JAVA.day4;
class A{
    public void show(){
        System.out.println("in A show");
    }
}
public class innerclass {
    public static void main(String a[]) {
        A obj = new A()
        {
            public void show(){
            System.out.println("in inner class show");
    } 
        };

        obj.show();
    }
}
