package com.chrysen.Service;

import com.chrysen.Dao.JarDao;
import com.chrysen.Entity.Connection;
import com.chrysen.Entity.Transaction;
import com.chrysen.Entity.Jar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class JarService {
    @Autowired
    @Qualifier("jars")
    private JarDao jarDao;

    public Collection<Jar> getJars(String username) {
        return this.jarDao.getJars(username);
    }

    public Collection<String> getJarNames(String username) {
        return this.jarDao.getJarNames(username);
    }

    public void createJar(String jarName, String username) {
        this.jarDao.createJar(jarName, username);
    }

    public void donate(Transaction transaction, String username) {
        this.jarDao.donate(transaction, username);
    }

    public void withdraw(Transaction transaction, String username) {
        this.jarDao.withdraw(transaction, username);
    }

    public Collection<Transaction> getTransactions(int jarID) {
        return this.jarDao.getTransactions(jarID);
    }

    public void deleteJar(String username, int jarID) { this.jarDao.deleteJar(username, jarID); }

    public Jar openJar(int id) {
        return this.jarDao.openJar(id);
    }

    public void renameJar(String rename, int id) {
        this.jarDao.renameJar(rename, id);
    }

    public Collection<Integer> getJarIDs(String username) { return this.jarDao.getJarIDs(username); }

    public void shareJar(String username, int id) {
        this.jarDao.shareJar(username, id);
    }

    public Collection<String> getContributors(int id) {
        return this.jarDao.getContributors(id);
    }

    public Collection<Connection> getConnections() {
        return this.jarDao.getConnections();
    }

}
