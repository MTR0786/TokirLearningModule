package TokirLearningModule.coding_class.JAVA.day6;

import java.util.Arrays;
import java.util.List;

public class API_fetch {
    public static void main(String[] args) {
        
        List<Integer> nums = Arrays.asList(1,5,6,8,9);

        int sum =0;
        for(int n: nums){
            if(n%2==0){
                n=n*2;
                sum =sum+n;

            }
        }

        System.out.println(sum);
    }
}
