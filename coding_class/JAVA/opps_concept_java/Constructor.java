class Human{
    private int age;
    String name;

    public Human(){
        age=30;
        name="arif";
    }

    //Parametrized constructor
    public Human(int age, String name) {
        this.age = age;
        this.name = name;
    }

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

    public void setName(String name) {
        this.name = name;
    }

}


public class Constructor {
    public static void main(String a[]){

        Human obj = new Human();
        // obj.setAge(11);
        // obj.name ="Navin";

        System.out.print(obj.getName() +":"+ obj.getAge());

        obj.getAge();
    }
}