package com.wepay.business.model;

public class Good {
  private Long id;
  private String goodName;
  private Double unitPrice;
  private String imgURL;
  private String goodInfo;
  private int amount;
  private String goodAddress;
  private int soldAmount;
  private Long sellerId;

  public Good(String goodName, Double unitPrice, String goodInfo, int amount) {
    this.goodName = goodName;
    this.unitPrice = unitPrice;
    this.goodInfo = goodInfo;
    this.amount = amount;
  }

  public Good(Long id, String goodName, Double unitPrice, String goodInfo, int amount) {
      this(goodName, unitPrice, goodInfo, amount);
      this.id = id;
  }

  public void setId(Long id) {
    this.id = id;
  }
}
