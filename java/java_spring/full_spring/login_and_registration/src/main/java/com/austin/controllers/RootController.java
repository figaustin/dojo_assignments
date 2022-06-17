package com.austin.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.austin.models.LoginUser;
import com.austin.models.User;
import com.austin.services.UserService;

@Controller
public class RootController {

	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("userRegister", new User());
		model.addAttribute("userLogin", new LoginUser());
		return "loginreg";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("userRegister") User newUser, BindingResult res, Model model, HttpSession session) {
		if(res.hasErrors()) {
			model.addAttribute("userLogin", new LoginUser());
			return "loginreg";
		}
		
		User db_user = userService.register(newUser, res);
		if (db_user == null) {
			model.addAttribute("userLogin", new LoginUser());
			return "loginreg";
		}
		
		return "redirect:/";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("userLogin") LoginUser newLogin, BindingResult res, Model model, HttpSession session) {
		
		if (res.hasErrors()) {
			model.addAttribute("userLogin", new User());
			return "loginreg";
		}
		
		User dbUser = userService.login(newLogin, res);
		if(dbUser == null) {
			model.addAttribute("userRegister", new User());
			return "loginreg";
		}
		session.setAttribute("user", dbUser);
		
		return "redirect:/dashboard";
	}
	
	@GetMapping("/dashboard")
	public String dashboard(HttpSession session)
	{
		if(session.getAttribute("user")==null) return "redirect:/";
		return "dashboard";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		
		userService.logout(session);
		return "redirect:/";
	}
}
