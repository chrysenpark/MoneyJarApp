package com.chrysen.Entity;

public class Connection {
    private int jarID;
    private String contributor;

    public Connection(int jarID, String contributor) {
        this.jarID = jarID;
        this.contributor = contributor;
    }
    public Connection() {}

    public int getJarID() {
        return jarID;
    }

    public void setJarID(int jarID) {
        this.jarID = jarID;
    }

    public String getContributor() {
        return contributor;
    }

    public void setContributor(String contributor) {
        this.contributor = contributor;
    }
}
