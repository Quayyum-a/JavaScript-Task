public class HighestElement {
    public static int getHighestElement(int[] numbers) {
        int highestCount = 0;
        int highestElement = -1;

        for (int count = 0; count < numbers.length; count++) {
            int currentCount = 0;

            for (int inner = 0; inner < numbers.length; inner++) {
                if (numbers[count] == numbers[inner]) {
                    currentCount++;
                }
            }

            if (currentCount > highestCount) {
                highestCount = currentCount;
                highestElement = numbers[count];
            }
        }
        return highestElement;
    }
}