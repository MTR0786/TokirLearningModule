
public class string {
    public static void main(String a[]){
   
        String name = "arif";
        // System.out.println(name);

        String name1 = new String("Adil");
        // System.err.println(name1);

        //mutable-change
        // string is immutable (unchange)
        String str = "Arif";
        str = str +" raza";
        // System.err.println(str);

        String s1 = "rajan";
        String s2 = "rajan";

        // System.out.println(s1==s2);

//StringBuffer and StringBuilder

        StringBuffer sb = new StringBuffer("Navin");
        System.err.println(sb.capacity());

        sb.append(" Reddy");
        

        sb.insert(6, " java ");
        sb.setLength(20);
        
        System.out.println(sb);
//static variable
}
}