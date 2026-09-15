import java.util.Scanner;

/**
 * Reverses every individual word in a sentence while keeping the word order intact.
 * Example: "Hello World" -> "olleH dlroW"
 */
public class ReverseWordsInSentence {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();

        String result = reverseEachWord(inputSentence);
        System.out.println("Result: " + result);

        scanner.close();
    }

    /**
     * Splits the sentence into words and reverses each word individually.
     *
     * @param sentence the sentence to process
     * @return a new sentence with every word reversed, order preserved
     */
    public static String reverseEachWord(String sentence) {
        if (sentence == null || sentence.trim().isEmpty()) {
            return "";
        }

        String[] words = sentence.trim().split("\\s+");
        StringBuilder resultBuilder = new StringBuilder();

        for (int i = 0; i < words.length; i++) {
            resultBuilder.append(reverseSingleWord(words[i]));
            if (i != words.length - 1) {
                resultBuilder.append(" ");
            }
        }

        return resultBuilder.toString();
    }

    /**
     * Reverses a single word using StringBuilder's built-in reverse method.
     *
     * @param word the word to reverse
     * @return the reversed word
     */
    private static String reverseSingleWord(String word) {
        return new StringBuilder(word).reverse().toString();
    }
}
