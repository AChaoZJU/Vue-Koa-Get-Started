package com.wepay.business.resource;

import com.wepay.business.model.Good;
import com.wepay.business.service.GoodHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9000", "http://localhost:8083"})
@RestController
public class GoodResource {
    @Autowired
    private GoodHardcodedService goodHardcodedService;

    @GetMapping("/api/getGood")
    public List<Good> getAllGoods() {
        return goodHardcodedService.findAll();
    }

    @PostMapping("/api/upload")
    public ResponseEntity<Good> uploadGood(@PathVariable int amount, @PathVariable String goodInfo, @PathVariable String goodName, @PathVariable Double unitPrice) {
        Good good = new Good(goodName, unitPrice, goodInfo, amount);
        goodHardcodedService.save(good);
        return 
    }
}
