import java.util.Scanner;

class Power {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        System.out.print("Enter power: ");
        int p = sc.nextInt();

        int result = 1;

        for (int i = 1; i <= p; i++) {
            result = result * n;
        }

        System.out.println("Answer: " + result);

        sc.close();
    }
}
