package com.chrysen.Entity;

import javafx.util.Pair;

import java.util.List;

public class Jar {
    private int id;
    private String name;
    private int amount;
    private String creator;

    public Jar(String name, int amount, String creator) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.creator = creator;
    }

    public Jar(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }


    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
