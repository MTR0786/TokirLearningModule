package TokirLearningModule.coding_class.JAVA.day4;
class laptop{
    String model;
    int price;
    @Override
    public String toString() {
        return "laptop [model=" + model + ", price=" + price + ", toString()=" + super.toString() + "]";
    }


}

public class toString_hashcode {
    public static void main(String[] args) {
        
        laptop obj1 = new laptop();
        obj1.model ="HP";
        obj1.price = 60000;


        System.err.println(obj1);
    }
}
