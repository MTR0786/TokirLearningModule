class Mobile{
 String brand;
 int price ;
 static String name ; // static means the variable refers to class not object.

 public String show(){
    System.out.println(brand+":"+price+":"+name);
    return " ";
    }

    public static void show1(Mobile obj){
        System.out.println(" i am in static method");
        System.out.println(obj.brand+":"+obj.price+":"+name);

    }
    static {
        name = "Phone";
        System.out.println(name + " in statiic");
        
    }

    public Mobile(){
    brand = "";
    price =200;
}

}

public class Static_variable {
    public static void main(String a[]){

        Mobile obj1 = new Mobile();
        obj1.brand ="Apple";
        obj1.price = 15000;
        obj1.name = "Smartphone";

        Mobile obj2 = new Mobile();
        obj2.brand ="Sumsung";
        obj2.price = 10000;
        obj2.name = "Smartphone";

        obj1.name = "phone";  // due to static variable name value changes for all objects

        // obj1.show();
        // obj2.show();
        Mobile.show1(obj1);   // static methods directly call using class name
    }
}
