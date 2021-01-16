package com.chrysen.Controller;


import com.chrysen.Entity.User;
import com.chrysen.Exceptions.ApiException;
import com.chrysen.Exceptions.ApiRequestException;
import com.chrysen.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Collection<User> getUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/logins", method = RequestMethod.GET)
    public Collection<User> getLogins() {
        return userService.getLogins();
    }

    @RequestMapping(value = "/users/usernames", method = RequestMethod.GET)
    public Collection<String> getUsernames() {
        return userService.getUsernames();
    }

    @RequestMapping(value = "/logins/usernames", method = RequestMethod.GET)
    public Collection<String> getLoginUsernames() {
        return userService.getLoginUsernames();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable("id")int id) {
        return userService.getUser(id);
    }

    @RequestMapping(value = "/users/{username}", method = RequestMethod.GET)
    public User getUserByUserName(@PathVariable("username") String username) {
        return userService.getUserByUsername(username);
    }

    @RequestMapping(value = "/logins/{username}", method = RequestMethod.GET)
    public User getLoginByUserName(@PathVariable("username") String username) {
        return userService.getLoginByUserName(username);
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createUser(@RequestBody User user) {
        if(userService.getUsernames().contains(user.getUsername()))
            throw new ApiRequestException("Username already exists");
        userService.createUser(user);
    }

    @RequestMapping(value = "/users/{username}", method = RequestMethod.DELETE)
    public void deleteUserById(@PathVariable("username") String username) {
        if(!userService.getUsernames().contains(username))
            throw new ApiRequestException("Username doesn't exists");
        userService.deleteUser(username);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateAccount(@RequestBody User user) {
        userService.updateAccount(user);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void logIn(@RequestBody User user) {
        if(userService.getUsernames().contains(user.getUsername())) {
            if(!userService.getLoginUsernames().contains(user.getUsername())) {
                User u = userService.getUserByUsername(user.getUsername());
                if(u.getPassword().equals(user.getPassword())) {
                    userService.loginUser(user);
                } else {
                    throw new ApiRequestException("Wrong password");
                }
            } else {
                throw new ApiRequestException("Already logged in");
            }
        } else {
            throw new ApiRequestException("Username doesn't exists");
        }
    }

    @RequestMapping(value = "/logins/{username}", method = RequestMethod.DELETE)
    public void logOff(@PathVariable("username") String username) {
        if(userService.getLoginUsernames().contains(username)) {
            userService.logOff(username);
        } else {
            throw new ApiRequestException("Username doesn't exists");
        }
    }
}
