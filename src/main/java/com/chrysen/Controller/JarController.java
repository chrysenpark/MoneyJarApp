package com.chrysen.Controller;


import com.chrysen.Entity.Connection;
import com.chrysen.Entity.Transaction;
import com.chrysen.Entity.Jar;
import com.chrysen.Entity.User;
import com.chrysen.Exceptions.ApiRequestException;
import com.chrysen.Service.JarService;
import com.chrysen.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class JarController {
    @Autowired
    private JarService jarService;

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/jars/{username}", method = RequestMethod.GET)
    public Collection<Jar> getUsersJars(@PathVariable("username") String username) {
        return jarService.getJars(username);
    }

    @RequestMapping(value = "/jars/names/{username}", method = RequestMethod.GET)
    public Collection<String> getJarNames(@PathVariable("username") String username) {
        return jarService.getJarNames(username);
    }

    @RequestMapping(value = "/jars/ids/{username}", method = RequestMethod.GET)
    public Collection<Integer> getJarIDs(String username) {
        return jarService.getJarIDs(username);
    }

    @RequestMapping(value = "/jars/create/{username}", method = RequestMethod.POST)
    public void createJar(@RequestBody String jarName, @PathVariable("username") String username) {
        //if(getJarNames(username).contains(jarName))
        //    throw new ApiRequestException("jar already exists");
        jarService.createJar(jarName, username);
        User user  = userService.getUserByUsername(username);
        user.setNumOfJars(user.getNumOfJars() + 1);
    }

    @RequestMapping(value = "/jars/{username}/{jarID}", method = RequestMethod.DELETE)
    public void deleteJar(@PathVariable("username") String username, @PathVariable("jarID") int jarID) {
        if(!getJarIDs(username).contains(jarID))
            throw new ApiRequestException("jar doesnt exists");
        jarService.deleteJar(username, jarID);
    }

    @RequestMapping(value = "/jars/donate/{username}/{jarID}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void donateJar(@RequestBody int amount, @PathVariable("username") String username, @PathVariable("jarID") int jarID) {
        LocalDate date = java.time.LocalDate.now();
        Transaction transaction = new Transaction(jarID,"D", amount, username, date.toString());
        jarService.donate(transaction, username);
    }

    @RequestMapping(value = "/jars/withdraw/{username}/{jarID}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void withdrawJar(@RequestBody int amount, @PathVariable("username") String username, @PathVariable("jarID") int jarID) {
        LocalDate date = java.time.LocalDate.now();
        Transaction transaction = new Transaction(jarID,"W", amount, username, date.toString());
        jarService.withdraw(transaction, username);
    }

    @RequestMapping(value = "/jars/transactions/{jarID}", method = RequestMethod.GET)
    public Collection<Transaction> getTransactions(@PathVariable("jarID") int jarID) {
        return jarService.getTransactions(jarID);
    }

    @RequestMapping(value = "/jars/open/{jarID}", method = RequestMethod.GET)
    public Jar openJar(@PathVariable("jarID") int id) {
        return jarService.openJar(id);
    }

    @RequestMapping(value = "/jars/rename/{jarID}", method = RequestMethod.PUT)
    public void renameJar(@RequestBody String rename, @PathVariable("jarID") int id) {
        jarService.renameJar(rename, id);
    }

    @RequestMapping(value = "/jars/share/{jarID}", method = RequestMethod.POST)
    public void shareJar(@RequestBody String username, @PathVariable("jarID") int id) {
        if(!userService.getUsernames().contains(username))
            throw new ApiRequestException("user doesnt exists");
        for(Connection c : jarService.getConnections()) {
            if(c.getJarID() == id && c.getContributor().equals(username)) throw new ApiRequestException("jar is already shared");
        }
        jarService.shareJar(username, id);
        User user  = userService.getUserByUsername(username);
        user.setNumOfJars(user.getNumOfJars() + 1);
    }

    @RequestMapping(value = "/jars/contributors/{jarID}", method = RequestMethod.GET)
    public Collection<String> getContributors(@PathVariable("jarID") int id) {
        return jarService.getContributors(id);
    }

    @RequestMapping(value = "/jars/connections/", method = RequestMethod.GET)
    public Collection<Connection> getConnections() {
        return jarService.getConnections();
    }


}
