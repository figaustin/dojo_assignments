package com.austin;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RootController
{

	@GetMapping("/omikuji")
	public String index()
	{
		return "index";
	}

	@GetMapping("/omikuji/show")
	public String show(HttpSession session, Model model) {
		
		Integer numba = (Integer) session.getAttribute("numba"); 
		String city = (String) session.getAttribute("city");
		String name = (String) session.getAttribute("name");
		String hobby = (String) session.getAttribute("hobby");
		String livingThing = (String) session.getAttribute("livingThing");
		String nice = (String) session.getAttribute("nice");
		
		String omikuji = "In " + numba + " years, you will live in " + city + " with " + name + " as your roomate, " + hobby + " for a living. The next time"
				+ " you see a " + livingThing + ", you will have good luck. Also, " + nice;
		
		model.addAttribute("omikuji", omikuji);
		return "show";
	}
	
	
	@PostMapping("/submit")
	public String process
			(
				@RequestParam(value="numba") Integer number,
				@RequestParam(value="city") String city,
				@RequestParam(value="name") String name,
				@RequestParam(value="hobby") String hobby,
				@RequestParam(value="living-thing") String livingThing,
				@RequestParam(value="nice") String nice,
				HttpSession session
			) {
		
		session.setAttribute("numba", number);
		session.setAttribute("city", city);
		session.setAttribute("name", name);
		session.setAttribute("hobby", hobby);
		session.setAttribute("livingThing", livingThing);
		session.setAttribute("nice", nice);
		return "redirect:/omikuji/show";
	}
};
