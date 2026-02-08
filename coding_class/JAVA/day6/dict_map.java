

package TokirLearningModule.coding_class.JAVA.day6;

import java.util.HashMap;
import java.util.Map;

public class dict_map {

    public static void main(String[] args) {
        
        Map<String,Integer> student = new HashMap<>();

        student.put("Arif raza", 14);
        student.put("Adil raza", 4);
        student.put("Arbaz raza", 11);
        student.put("rajan", 50);
        student.put("Netish", 41);

        System.out.println(student);
        //{Arif raza=14, Adil raza=4, Arbaz raza=11, rajan=50, Netish=41}

        for(String key:student.keySet()){
            System.out.println(key +"="+student.get(key));
        }
    }
}