import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class NestedFramesAutomation {
    public static void main(String[] args) {
        // Set the path of ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");

        // Initialize ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Open the URL
        driver.get("http://the-internet.herokuapp.com/nested_frames");

        // Switch to the top frame
        driver.switchTo().frame("frame-top");

        // Verify that there are three frames on the page
        int frameCount = driver.findElements(By.tagName("frame")).size();
        if (frameCount == 3) {
            System.out.println("There are three frames on the page.");
        } else {
            System.out.println("Failed to find three frames on the page.");
        }

        // Switch to the left frame
        driver.switchTo().frame(driver.findElement(By.xpath("//frame[@name='frame-left']")));

        // Verify that the left frame has a text "LEFT"
        WebElement leftFrame = driver.findElement(By.tagName("body"));
        if (leftFrame.getText().equals("LEFT")) {
            System.out.println("The left frame has a text 'LEFT'.");
        } else {
            System.out.println("Failed to find 'LEFT' text in the left frame.");
        }

        // Switch back to the top frame
        driver.switchTo().defaultContent();

        // Switch to the middle frame
        driver.switchTo().frame(driver.findElement(By.xpath("//frame[@name='frame-middle']")));

        // Verify that the middle frame has a text "MIDDLE"
        WebElement middleFrame = driver.findElement(By.tagName("body"));
        if (middleFrame.getText().equals("MIDDLE")) {
            System.out.println("The middle frame has a text 'MIDDLE'.");
        } else {
            System.out.println("Failed to find 'MIDDLE' text in the middle frame.");
        }

        // Switch back to the top frame
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}
