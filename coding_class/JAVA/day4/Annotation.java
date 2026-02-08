package TokirLearningModule.coding_class.JAVA.day4;

enum Laptop{
    Macbook(200),XPS(2200),Surface(50000);

    private int price;
    
    Laptop(int price) {
        this.price = price;
    }
    public int getPrice(){
        return price;
    }
}


public class Annotation {
    public static void main(String[] args) {
        
        Laptop lap = Laptop.Macbook;

        System.err.println(lap + " " + lap.getPrice());
    }
}
