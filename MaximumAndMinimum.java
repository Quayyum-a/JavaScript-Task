public class MaximumAndMinimum {
    public static int[] getMaxAndMin(int[] nums) {
        int largest = nums[0];
        int lowest = nums[0];

        for (int count = 1; count < nums.length; count++) {
            if (nums[count] > largest) {
                largest = nums[count];
            }
            if (nums[count] < lowest) {
                lowest = nums[count];
            }
        }
        return new int[] { largest, lowest };
    }
}
