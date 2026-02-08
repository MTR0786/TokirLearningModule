package TokirLearningModule.coding_class.JAVA.day6;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Stream;

public class forEach {
    public static void main(String[] args) {
        
        List<Integer> nums = Arrays.asList(1,5,6,8,9);

//         Consumer<Integer> con = new Consumer<Integer>() {
//         public void accept(Integer n){
//             System.out.println(n);
// }         
//         };

        Consumer<Integer> con = n -> System.out.println(n);


        nums.forEach(con);


// Stream 

        Stream<Integer> s1 = nums.stream();
        s1.forEach(n -> System.out.println(n));


    }
    
}
