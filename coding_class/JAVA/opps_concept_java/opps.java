class calculator{
    // int a;
    // int b;
    int num=5;

    public int add(int a, int b){
        System.err.print("sum is:- ");
        int res =a+b;
        return res;
    }
    public String greet(){
        System.out.println("hello!");
        return ""; 
    }
    public int numr(){
        // System.out.println(num);
        return num;
    }
}   

public class opps
{
    public static void main(String a[]){

        calculator cal= new calculator();
        System.out.println(cal.add(2,5));
        cal.greet();

        calculator obj1 =new calculator();
        calculator obj2 =new calculator();

        obj1.num = 8;

        // System.out.println(obj1.numr());
        // System.out.println(obj2.numr());
    }
}