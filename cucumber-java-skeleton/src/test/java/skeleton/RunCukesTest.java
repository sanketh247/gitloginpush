package skeleton;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:src/cucumber-reports","json:target/cucumber-reports/report.json"},
tags= {"@Regression"},monochrome=true)
public class RunCukesTest {
}
