package TokirLearningModule.coding_class.JAVA.day6;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;

import javax.print.attribute.standard.NumberUpSupported;

public class array {
    public static void main(String[] args) {
        
        Collection<Integer> nums = new ArrayList<Integer>();
        nums.add(5);
        nums.add(55);
        nums.add(8);
        nums.add(20);
        nums.add(12);

        System.out.println(nums);

        for (Object n:nums){
            System.out.println(n);
        }

    }
}
