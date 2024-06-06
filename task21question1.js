import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class IframeAutomation {
    public static void main(String[] args) {
        // Set the system property according to the browser you want to use
        // System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        // System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
        // System.setProperty("webdriver.safari.driver", "/path/to/safaridriver");

        // Initialize the WebDriver
        WebDriver driver = new ChromeDriver(); // or FirefoxDriver() or SafariDriver()

        // Navigate to the URL
        driver.get("https://the-internet.herokuapp.com/iframe");

        // Switch to the iframe
        driver.switchTo().frame(driver.findElement(By.cssSelector("iframe")));

        // Locate the "p" tag inside the iframe
        WebElement paragraph = driver.findElement(By.tagName("p"));

        // Write the text "Hello People"
        paragraph.clear();
        paragraph.sendKeys("Hello People");

        // Wait for 2 seconds (just for demonstration purposes)
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Close the browser instance
        driver.quit();
    }
}
