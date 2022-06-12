package com.austin;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DaikichiController {
	
	@RequestMapping("/daikichi/travel/{place}")
	public String showPlace(@PathVariable("place") String place) {
		return "Congrats! You will soon travel to " + place;
	}
	
	@RequestMapping("/daikichi/lotto/{number}")
	public String showLotto (@PathVariable("number") Integer number) {
		if( number % 2 == 0 ) {
			return "You will take a grand journey in the near future, but be weary of tempting offers.";
		}
		
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}
}
