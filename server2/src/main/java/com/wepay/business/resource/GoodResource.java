package com.wepay.business.resource;

import ch.qos.logback.core.net.ObjectWriter;
import com.wepay.business.model.Good;
import com.wepay.business.repo.GoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9000", "http://localhost:8083"})
@RestController
@RequestMapping("/api")
public class GoodResource {
    @Autowired
    GoodRepository repository;

    @GetMapping("/getGood")
    public List<Good> getAllGoods() {
        return repository.findAll();
    }
}
