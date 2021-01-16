package com.chrysen.Entity;

public class User {

    private int id;
    private String email;
    private String username;
    private String password;
    private int numOfJars;

    public User(int id, String email, String username, String password, int numOfJars) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.numOfJars = numOfJars;
    }
    public User(){}

    public User(String username, String password){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String name) {
        this.email = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getNumOfJars() {
        return numOfJars;
    }

    public void setNumOfJars(int numOfJars) {
        this.numOfJars = numOfJars;
    }
}
