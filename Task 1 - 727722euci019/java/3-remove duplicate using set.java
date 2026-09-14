import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

class RemoveDuplicates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        Set<Integer> set = new LinkedHashSet<>();

        System.out.println("Enter elements:");

        for (int i = 0; i < n; i++) {
            int number = sc.nextInt();
            set.add(number);
        }

        System.out.println("After removing duplicates: " + set);

        sc.close();
    }
}
