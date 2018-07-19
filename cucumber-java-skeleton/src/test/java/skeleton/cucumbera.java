package skeleton;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;

public class cucumbera {
	@Given("^(?:He said|Sarah) buys (no|-?\\d+) cucumber(s|s!)?$")
	public void sarah_buys_no_cucumbers(String value) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}