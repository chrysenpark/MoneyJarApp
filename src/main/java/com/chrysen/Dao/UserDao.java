package com.chrysen.Dao;


import com.chrysen.Entity.User;
import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.List;


@Repository("users")
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public Collection<User> getAllUsers() {
        final String sql = "SELECT id, email, username, password, numOfJars From users";
        List<User> users = jdbcTemplate.query(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                return SetUserHelper(resultSet);
            }
        });
        return users;
    }

    public Collection<User> getLogins() {
        final String sql = "SELECT id, email, username, password, numOfJars From logins";
        List<User> users = jdbcTemplate.query(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                return SetUserHelper(resultSet);
            }
        });
        return users;
    }

    public Collection<String> getUserNames() {
        final String sql = "SELECT username From users";
        return jdbcTemplate.query(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("username");
            }
        });
    }

    public Collection<String> getLoginUsernames() {
        final String sql = "SELECT username From logins";
        return jdbcTemplate.query(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("username");
            }
        });
    }

    public User getUser(int id) {
        final String sql = "SELECT id, email, username, password, numOfJars FROM users where id = ?";
        User user = jdbcTemplate.queryForObject(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                return SetUserHelper(resultSet);
            }
        }, id);
        return user;
    }


    public User getUserByUsername(String username) {
        final String sql = "SELECT id, email, username, password, numOfJars FROM users where username = ?";
        User user = jdbcTemplate.queryForObject(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                return SetUserHelper(resultSet);
            }
        }, username);
        return user;
    }

    public User SetUserHelper(ResultSet resultSet) throws SQLException {
        User user = new User();
        user.setId(resultSet.getInt("id"));
        user.setEmail(resultSet.getString("email"));
        user.setUsername(resultSet.getString("username"));
        user.setPassword(resultSet.getString("password"));
        user.setNumOfJars(resultSet.getInt("numOfJars"));
        return user;
    }
    
    public void createUser(final User user) {
        final String sql = "INSERT INTO users (id, email, username, password, numOfJars) VALUES(?, ?, ?, ?, ?)";
        final int id = user.getId();
        final String email = user.getEmail();
        final String username = user.getUsername().toLowerCase();
        final String password = user.getPassword();
        final int numOfJars = 0;
        jdbcTemplate.update(sql, new Object[] {id, email, username, password, numOfJars});
    }

    public void deleteUser(String username) {
        final String sql = "DELETE FROM users WHERE username = ?";
        jdbcTemplate.update(sql, username);
    }

    public void updateAccount(User user) {
        final String sql = "UPDATE users SET email = ?, username = ?, password = ?, numOfJars = ? WHERE id = ?";
        final int id = user.getId();
        final String email = user.getEmail();
        final String username = user.getUsername();
        final String password = user.getPassword();
        final int numOfJars = user.getNumOfJars();
        jdbcTemplate.update(sql, new Object[] {email, username, password, numOfJars, id});

    }

    public void loginUser(User user) {
        final String sql = "INSERT INTO logins (id, email, username, password, numOfJars) VALUES(?, ?, ?, ?, ?)";
        User u = this.getUserByUsername(user.getUsername());
        final int id = u.getId();
        final String email = u.getEmail();
        final String username = u.getUsername();
        final String password = u.getPassword();
        final int numOfJars = u.getNumOfJars();
        jdbcTemplate.update(sql, new Object[] {id, email, username, password, numOfJars});
    }

    public void logOff(String username) {
        final String sql = "DELETE FROM logins WHERE username = ?";
        jdbcTemplate.update(sql, username);
    }

    public User getLogin(String username) {
        final String sql = "SELECT id, email, username, password, numOfJars FROM logins where username = ?";
        User user = jdbcTemplate.queryForObject(sql, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                return SetUserHelper(resultSet);
            }
        }, username);
        return user;
    }
}
