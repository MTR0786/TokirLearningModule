class Hello{
    public static void main(String a[]){
        int n_input = -15;
        int n = Math.abs(n_input);
        System.out.println(n);
        if (n==0 || n==1 || n==2){
        System.out.println("number is not a prime");
        return;
        }
        for(int i=2;i<=n;i++){
            if( n%i== 0){
            System.out.println("number is not prime");
            return;
            }
            
            }
            System.out.println("number is prime");

        }
        
    }
