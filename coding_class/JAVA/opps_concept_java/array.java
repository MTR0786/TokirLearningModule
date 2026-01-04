public class array{
    public static void main(String a[]){

//Array
        int nums[] = new int[4];
        nums[0] =5;
        nums[1] =8;
        nums[2] =6;
        // nums[3] =7;
        
        for(int i=0;i<4;i++){
            // System.out.println(nums[i]);
        }


// 2-D array
        int num2_D[][] = new int[3][3];

        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                num2_D[i][j] = (int)(Math.random()*100);
            //    System.out.print(num2_D[i][j] +" ");
            }
            // System.out.println();
        }
        System.err.println(num2_D);  //[[I@14a2f921

        //Enhanced for loop
        for(int n[] : num2_D){
            for(int m:n){
                // System.out.print(m+" ");
            }
            // System.err.println();
        }


// Jagged Array
        int arr[][] =new int[3][];

        arr[0] =new int[3];
        arr[1] =new int[2];
        arr[2] =new int[5];

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                arr[i][j] = (int)(Math.random()*100);
               System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

// 3-Dimension Array
        
        int arr3_D[][][] = new int[3][3][3];

        for(int i =0;i<arr3_D.length;i++){
            for(int j=0;j<arr3_D.length;j++){
                for(int k=0;k<arr3_D.length;k++){
                    System.out.print(arr3_D[i][j][k]);
                }
                System.out.println("j");
            }
            System.out.println("i");
        }

    }
}