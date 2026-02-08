package TokirLearningModule.coding_class.JAVA.day5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Input {
    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Enter the Number");
        try {
            // int nums = System.in.read(); //out>> ascii value

            //Bufferreder
            // InputStreamReader in = new InputStreamReader(System.in);
            // BufferedReader bf =new  BufferedReader(in);
            // int n =Integer.parseInt(bf.readLine()); 
            // System.out.println(n);
            // bf.close();

            //Scanner
            Scanner sc = new Scanner(System.in);
            int n2 = sc.nextInt();
            System.out.println(n2);

        } 
        catch(Exception e){
            System.out.println("error" + " "+e);
        }
        finally{
            System.out.println("Bye");
        }
    }
}
