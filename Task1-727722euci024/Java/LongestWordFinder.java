import java.util.Scanner;

/**
 * Finds the longest word in a user-supplied sentence.
 * Punctuation attached to words is ignored when measuring word length.
 */
public class LongestWordFinder {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();

        String longestWord = findLongestWord(inputSentence);

        if (longestWord.isEmpty()) {
            System.out.println("No words found in the input.");
        } else {
            System.out.println("Longest word: " + longestWord + " (" + longestWord.length() + " characters)");
        }

        scanner.close();
    }

    /**
     * Scans through every word in the sentence and returns the longest one.
     * If multiple words share the maximum length, the first one found is returned.
     *
     * @param sentence the sentence to search
     * @return the longest word, with surrounding punctuation stripped
     */
    public static String findLongestWord(String sentence) {
        if (sentence == null || sentence.trim().isEmpty()) {
            return "";
        }

        String[] words = sentence.trim().split("\\s+");
        String longestWordSoFar = "";

        for (String rawWord : words) {
            String cleanedWord = cleanWord(rawWord);
            if (cleanedWord.length() > longestWordSoFar.length()) {
                longestWordSoFar = cleanedWord;
            }
        }

        return longestWordSoFar;
    }

    /**
     * Strips non-alphanumeric characters (e.g., punctuation) from a word.
     *
     * @param word the raw word token
     * @return the cleaned word containing only letters and digits
     */
    private static String cleanWord(String word) {
        return word.replaceAll("[^a-zA-Z0-9]", "");
    }
}
