package com.chrysen.Service;


import com.chrysen.Dao.UserDao;
import com.chrysen.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {

    @Autowired
    @Qualifier("users")
    private UserDao userDao;

    public Collection<User> getAllUsers() {
        return this.userDao.getAllUsers();
    }

    public Collection<User> getLogins() {
        return this.userDao.getLogins();
    }

    public Collection<String> getUsernames() {
        return this.userDao.getUserNames();
    }

    public Collection<String> getLoginUsernames() {
        return this.userDao.getLoginUsernames();
    }

    public void createUser(User user) {
        this.userDao.createUser(user);
    }

    public void deleteUser(String username) {
        this.userDao.deleteUser(username);
    }

    public void updateAccount(User user) {
        this.userDao.updateAccount(user);
    }

    public User getUser(int id) {
        return this.userDao.getUser(id);
    }

    public User getUserByUsername(String username) {
        return this.userDao.getUserByUsername(username);
    }

    public User getLoginByUserName(String username) { return this.userDao.getLogin(username);
    }

    public void loginUser(User user) {
        this.userDao.loginUser(user);
    }

    public void logOff(String user) {
        this.userDao.logOff(user);
    }

}
