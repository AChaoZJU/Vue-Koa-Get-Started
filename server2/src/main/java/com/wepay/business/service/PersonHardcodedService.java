package com.wepay.business.service;

import com.wepay.business.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonHardcodedService {
  private static List<Person> persons = new ArrayList<>();
  private static long idCounter = 0;

  static {
    persons.add(new Person(++idCounter, "achao@qq.com", "016833"));
    persons.add(new Person(++idCounter, "wyy", "950101"));
  }

  public Person findByNameAndPassword(String name, String password) {
    for (Person person : persons) {
      if(person.getName() == name && person.getPassword() == password) {
        return person;
      }
    }
    return null;
  }
}
