package com.wepay.business.model;

import javax.persistence.*;


@Entity
@Table(name = "good")
public class Good {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(name = "name")
  private String name;

  @Column(name = "price")
  private double price;

  @Column(name = "img")
  private String img;

  @Column(name = "info")
  private String info;

  @Column(name = "amount")
  private int amount;

  @Column(name = "address")
  private  String address;

  @Column(name = "soldAmount")
  private String soldAmount;

  @Column(name = "sellerId")
  private String sellerId;

  public Good(){

  }

  public Good(String name, Double price, String info, int amount) {
    this.name = name;
    this.price = price;
    this.info = info;
    this.amount = amount;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public String getImg() {
    return img;
  }

  public void setImg(String img) {
    this.img = img;
  }

  public String getInfo() {
    return info;
  }

  public void setInfo(String info) {
    this.info = info;
  }

  public int getAmount() {
    return amount;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getSoldAmount() {
    return soldAmount;
  }

  public void setSoldAmount(String soldAmount) {
    this.soldAmount = soldAmount;
  }

  public String getSellerId() {
    return sellerId;
  }

  public void setSellerId(String sellerId) {
    this.sellerId = sellerId;
  }
}
