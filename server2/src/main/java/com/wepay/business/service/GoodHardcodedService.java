package com.wepay.business.service;

import com.wepay.business.model.Good;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GoodHardcodedService {
  private static List<Good> goods = new ArrayList<>();
  private static long idCounter = 0;

  static {
    goods.add(new Good(++idCounter, "Book: who change china", 1.23, "placeholder", "A book written by the older", 12, "hangzhou", new Long(1)));
    goods.add(new Good(++idCounter, "Book: 3 minor things", 1.24, "placeholder", "A book written by the older 2", 13, "shanghai", new Long(2)));
    goods.add(new Good(++idCounter, "Book: why I can become a president", 1.25, "placeholder", "A book written by the older 3", 14, "beijing", new Long(3)));
  }


  public List<Good> findAll() {
    return goods;
  }

  public Good save(Good good) {
    good.setId(++idCounter);
    goods.add(good);
    return good;
  }

}
