package TokirLearningModule.coding_class.JAVA.day4;

// import TokirLearningModule.coding_class.JAVA.day4;

// abstract class computer{
//     public abstract void code();
//     //     System.out.println("i'm computer");
//     // }
// }

// class Laptop extends computer{
//     public void code(){
//         System.out.println("laptop is here , Now code ");
//     }
// }

// class desktop extends computer{
//     public void code(){
//         System.out.println("desktop is here now code fast");
//     }

// }
    

// class devloper {
//     public void DevApp(computer com){
//         com.code();
        
//     }
// }
// public class interface_demo {
//     public static void main(String a[]){

//         computer desk = new desktop();

//         devloper dev = new devloper();

//         dev.DevApp(desk);

//     }
// }


interface  computer{
     void code();
    
}

class Laptop implements computer{
    public void code(){
        System.out.println("laptop is here , Now code ");
    }
}

class desktop implements computer{
    public void code(){
        System.out.println("desktop is here now code fast");
    }

}
    

class devloper {
    public void DevApp(computer com){
        com.code();
        
    }
}
public class interface_demo {
    public static void main(String a[]){

        computer desk = new desktop();
        computer lap = new Laptop();
        devloper dev = new devloper();

        dev.DevApp(lap);

    }
}
