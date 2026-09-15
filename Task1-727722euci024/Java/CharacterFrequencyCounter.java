import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Counts how many times each character appears in a user-supplied string
 * using a HashMap<Character, Integer>.
 */
public class CharacterFrequencyCounter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String inputText = scanner.nextLine();

        Map<Character, Integer> frequencyMap = countCharacterFrequency(inputText);
        printFrequencyMap(frequencyMap);

        scanner.close();
    }

    /**
     * Builds a frequency map of every character (including spaces and symbols)
     * found in the given text.
     *
     * @param text the text to analyze
     * @return a HashMap mapping each character to its number of occurrences
     */
    public static Map<Character, Integer> countCharacterFrequency(String text) {
        Map<Character, Integer> frequencyMap = new HashMap<>();

        if (text == null) {
            return frequencyMap;
        }

        for (char currentChar : text.toCharArray()) {
            // getOrDefault avoids an explicit containsKey check, keeping the loop clean
            frequencyMap.put(currentChar, frequencyMap.getOrDefault(currentChar, 0) + 1);
        }

        return frequencyMap;
    }

    /**
     * Prints each character and its frequency in a readable format.
     *
     * @param frequencyMap the map produced by countCharacterFrequency
     */
    private static void printFrequencyMap(Map<Character, Integer> frequencyMap) {
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("'" + entry.getKey() + "' : " + entry.getValue());
        }
    }
}
