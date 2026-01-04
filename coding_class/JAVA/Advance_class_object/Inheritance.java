package TokirLearningModule.coding_class.JAVA.Advance_class_object;

class CalCulator{
    int n1;
    int n2;
    public int  add(int n1,int n2){
        return (this.n1 +this.n2) ; 

     }

     public int sub(int n1,int n2){
        return (n1-n2);
     }
     public int mul(int n1,int n2){
        return n1*n2;
     }
     public double div(int n1,int n2){
        return n1/n2;
     }
}

public class Inheritance {
    public static void main(String[] args) {
        CalCulator calc =new CalCulator();
        System.out.println(calc.add(5,6));
        System.out.println(calc.sub(5,6));
        System.out.println(calc.mul(5,6));
        System.out.println(calc.div(12,6));

    }
}
