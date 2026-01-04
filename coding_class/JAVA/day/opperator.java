class Hello{
    public static void main(String a[]){

        // System.out.println("hello");

        int n1 =9;
        int n2=5;
        n1++;
        n2++;
        n1=n1*n2; //60
        // System.out.println(n1);
        n2=n1*n2; //360
        // System.out.println(n2);
        int  result = n1 +n2;
        System.out.println(result);

        boolean result2 = n1<n2;
        System.out.println(result2);

        boolean result3 = n1<n2 || n1>=n2;
        System.out.println(result3);
        boolean result4 = n1<n2 && n1>=n2;
        System.out.println(result4);

        boolean result5 = n1!=n2;
        System.out.println(result5);
        System.out.println(!result5);

    }
}