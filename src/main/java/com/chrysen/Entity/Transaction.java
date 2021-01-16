package com.chrysen.Entity;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class Transaction {
    private int jarID;
    private int amount;
    private String username;
    private String date;
    private String type;

    public Transaction(int jarID, String type, int amount, String username, String date) {
        this.jarID = jarID;
        this.amount = amount;
        this.username = username;
        this.date = date;
        this.type = type;
    }

    public Transaction() {}


    public int getJarID() {
        return jarID;
    }

    public void setJarID(int jarID) {
        this.jarID = jarID;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
