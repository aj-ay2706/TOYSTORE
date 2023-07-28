package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Contact;

import com.example.demo.service.ContactService;




@RestController


public class ContactController {
@Autowired
private ContactService Enrollserve;
@GetMapping("/contactroll")	
public List<Contact> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/contactroll/{id}")
public Contact getContactById(@PathVariable Long id) {
return Enrollserve.getContactById(id);
}
@PostMapping("/contactaddroll")
public boolean createContact(@RequestBody Contact Enroll) {
return Enrollserve.createContact(Enroll);
}
@PutMapping("/contactupdateroll/{id}")
public Contact updateEnroll( @RequestBody Contact Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/contactdeleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}