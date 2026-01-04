class Human{
    private int age;
    String name;

    //getter :- method that get anything
    public int getAge(){
        return age;
    }

    //setter :- method to set something
    public void setAge(int a){
        age =a;
        return;
    }
    public String getName(){
        return name;
    }

}


public class encapsulation {
    public static void main(String a[]){

        Human obj = new Human();
        obj.setAge(11);
        obj.name ="Navin";

        System.out.print(obj.getName() +":"+ obj.getAge());

        obj.getAge();
    }
}
