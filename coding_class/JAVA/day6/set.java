package TokirLearningModule.coding_class.JAVA.day6;

import java.util.Collection;
import java.util.HashSet;
import java.util.TreeSet;

public class set {
    public static void main(String a[]){

        // Collection<Integer> s =new HashSet<Integer>();


        // sorted set
         Collection<Integer> s =new TreeSet<Integer>();  

        s.add(5);
        s.add(55);
        s.add(8);
        s.add(20);
        s.add(12);
        
        System.out.println(s);
    }
}
