package com.wepay.business.resource;

import com.wepay.business.model.Person;
import com.wepay.business.service.PersonHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonResource {
  @Autowired
  private PersonHardcodedService personHardcodedService;

  @PostMapping("/auth/seller")
  public ResponseEntity<Void> getUser(@RequestBody Person person) {
//    if(personHardcodedService.findByNameAndPassword(person.getName(), person.getPassword())){
      return new ResponseEntity<>(HttpStatus.OK);
//    }
  }
}
