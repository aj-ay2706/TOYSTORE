package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Contact;

import com.example.demo.repository.ContactRepository;





@Service
public class ContactService {
@Autowired
private  ContactRepository Enrollrepo;

public List<Contact> getAll() {
return Enrollrepo.findAll();

}
public Contact getContactById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createContact(Contact Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Contact updateEnroll(Long id,Contact Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}