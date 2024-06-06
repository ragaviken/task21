import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;
import java.util.Set;

public class WindowHandlingExample {

    public static void main(String[] args) {
        // Set the webdriver path according to your system
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        //System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
        //System.setProperty("webdriver.safari.driver", "/path/to/safaridriver");

        // Create a new instance of the Chrome/Firefox/Safari driver
        WebDriver driver = new ChromeDriver(); // Or FirefoxDriver() or SafariDriver()

        // Maximize the browser window
        driver.manage().window().maximize();

        // Navigate to the URL
        driver.get("https://the-internet.herokuapp.com/windows");

        // Click the "Click Here" button
        WebElement clickHereButton = driver.findElement(By.linkText("Click Here"));
        clickHereButton.click();

        // Get handles of all opened windows
        Set<String> windowHandles = driver.getWindowHandles();

        // Switch to the newly opened window
        for (String handle : windowHandles) {
            driver.switchTo().window(handle);
        }

        // Verify that the text "New Window" is present on the page
        String newWindowText = driver.findElement(By.tagName("h3")).getText();
        if (newWindowText.equals("New Window")) {
            System.out.println("New Window text verified successfully.");
        } else {
            System.out.println("New Window text verification failed.");
        }

        // Close the new window
        driver.close();

        // Switch back to the original window
        driver.switchTo().window((String) windowHandles.toArray()[0]);

        // Verify that the original window is active
        if (driver.getTitle().equals("The Internet")) {
            System.out.println("Original window is active.");
        } else {
            System.out.println("Original window is not active.");
        }

        // Close the browser instance
        driver.quit();
    }
}
