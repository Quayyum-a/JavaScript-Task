import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class HighestElementTest {
    
    @Test                                                                   
    public void testThatMethodReturnsTheHighestElementInTheArray() {
        int  actual = HighestElement.getHighestElement(new int []{1,1,3,2,2,1});
        int expected = 1;
        assertEquals(expected, actual);
    }
	 @Test                                                                   
    public void testThatMethodReturnsTheHighestElementInTheArrayTest2() {
        int  actual = HighestElement.getHighestElement(new int []{2,3,5,5,5});
        int expected = 5;
        assertEquals(expected, actual);
    }
	 @Test                                                                   
    public void testThatMethodReturnsTheHighestElementInTheArrayTest3() {
        int  actual = HighestElement.getHighestElement(new int []{});
        int expected = -1;
        assertEquals(expected, actual);
    }
    
}

