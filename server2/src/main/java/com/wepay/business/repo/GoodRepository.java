package com.wepay.business.repo;

import com.wepay.business.model.Good;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodRepository extends JpaRepository<Good, Long> {

}
