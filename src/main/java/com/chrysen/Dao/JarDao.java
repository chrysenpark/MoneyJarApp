package com.chrysen.Dao;
import com.chrysen.Entity.Connection;
import com.chrysen.Entity.Transaction;
import com.chrysen.Entity.Jar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;


@Repository("jars")
public class JarDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Collection<Jar> getJars(String username) {
        final String sql = "SELECT * From jars WHERE id IN (SELECT jarID From connections WHERE username = ?) ";
        List<Jar> jars = jdbcTemplate.query(sql, new RowMapper<Jar>() {
            @Override
            public Jar mapRow(ResultSet resultSet, int i) throws SQLException {
                Jar jar = new Jar();
                jar.setId(resultSet.getInt("id"));
                jar.setName(resultSet.getString("name"));
                jar.setAmount(resultSet.getInt("amount"));
                jar.setCreator(resultSet.getString("creator"));
                return jar;
            }
        }, username);
        return jars;
    }

    public Collection<String> getJarNames(String username) {
        final String sql = "SELECT name From jars WHERE creator = ?";
        List<String> jarNames = jdbcTemplate.query(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("name");
            }
        }, username);
        return jarNames;
    }

    public Collection<Integer> getJarIDs(String username) {
        final String sql = "SELECT id From jars WHERE creator = ?";
        List<Integer> jarIDs = jdbcTemplate.query(sql, new RowMapper<Integer>() {
            @Override
            public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getInt("id");
            }
        }, username);
        return jarIDs;
    }


    public void createJar(String jarName, String username) {
        final String sql = "INSERT INTO jars(id, name, amount, creator) VALUES(?, ?, ?, ?)";
        //final String sql2 = "INSERT INTO connections(jarID, username) VALUES(?, ?)";
        int randID = (int) (Math.random() * 1001);
        jdbcTemplate.update(sql, new Object[] {randID, jarName, 0, username});
        this.shareJar(username, randID);
    }

    public void donate(Transaction transaction, String username) {
        final String sql = "UPDATE jars SET amount = ? WHERE id =?";
        final String sql2 = "SELECT amount From jars WHERE id =?";
        final String dSQL = "INSERT INTO transactions (jarID, type, amount, username, date) VALUES(?, ?, ?, ?, ?)";
        final int jarID = transaction.getJarID();
        final int amount = transaction.getAmount();
        final String date = transaction.getDate();
        final String donor = username;
        int currAmount = jdbcTemplate.queryForObject(sql2, new Object[]{jarID}, Integer.class);
        int sum  = currAmount + amount;
        jdbcTemplate.update(dSQL, new Object[] {jarID, "D", amount, donor, date});
        jdbcTemplate.update(sql, new Object[] {sum, jarID});
    }

    public void withdraw(Transaction transaction, String username) {
        final String sql = "UPDATE jars SET amount = ? WHERE id =?";
        final String sql2 = "SELECT amount From jars WHERE id =?";
        final String dSQL = "INSERT INTO transactions (jarID, type, amount, username, date) VALUES(?, ?, ?, ?, ?)";
        final int jarID = transaction.getJarID();
        final int amount = transaction.getAmount();
        final String date = transaction.getDate();
        final String user = username;
        int currAmount = jdbcTemplate.queryForObject(sql2, new Object[]{jarID}, Integer.class);
        int sum  = currAmount - amount;
        jdbcTemplate.update(dSQL, new Object[] {jarID, "W", amount, user, date});
        jdbcTemplate.update(sql, new Object[] {sum, jarID});
    }

    public Collection<Transaction> getTransactions(int jarID) {
        final String sql = "SELECT * From transactions WHERE jarID = ?";
        List<Transaction> transactions = jdbcTemplate.query(sql, new RowMapper<Transaction>() {
            @Override
            public Transaction mapRow(ResultSet resultSet, int i) throws SQLException {
                Transaction transaction = new Transaction();
                transaction.setJarID(resultSet.getInt("jarID"));
                transaction.setType(resultSet.getString("type"));
                transaction.setAmount(resultSet.getInt("amount"));
                transaction.setUsername(resultSet.getString("username"));
                java.sql.Date date = resultSet.getDate("date");
                LocalDate local = date.toLocalDate();
                transaction.setDate(local.toString());
                return transaction;
            }
        }, jarID);
        return transactions;
    }

    public void deleteJar(String username, int jarID) {
        final String sql = "DELETE FROM jars WHERE id = ?";
        jdbcTemplate.update(sql, jarID);
    }

    public Jar openJar(int jarID) {
        final String sql = "SELECT * From jars WHERE id = ?";
        Jar jar = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            Jar j = new Jar();
            j.setId(resultSet.getInt("id"));
            j.setName(resultSet.getString("name"));
            j.setAmount(resultSet.getInt("amount"));
            j.setCreator(resultSet.getString("creator"));
            return j;
        }, jarID);
        return jar;
    }

    public void renameJar(String rename, int id) {
        final String sql = "UPDATE jars SET name = ? WHERE id =?";
        jdbcTemplate.update(sql, new Object[] {rename, id});
    }

    public void shareJar(String username, int jarID) {
        final String sql = "INSERT INTO connections(jarID, username) VALUES(?, ?)";
        jdbcTemplate.update(sql,new Object[] {jarID, username});
    }

    public Collection<String> getContributors(int jarID) {
        final String sql = "SELECT username From connections WHERE jarID = ?";
        List<String> contributors = jdbcTemplate.query(sql, new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getString("username");
            }
        }, jarID);
        return contributors;
    }

    public Collection<Connection> getConnections() {
        final String sql = "SELECT * From connections";
        List<Connection> connections = jdbcTemplate.query(sql, new RowMapper<Connection>() {
            @Override
            public Connection mapRow(ResultSet resultSet, int i) throws SQLException {
                Connection connection = new Connection();
                connection.setJarID(resultSet.getInt("jarID"));
                connection.setContributor(resultSet.getString("username"));
                return connection;
            }
        });
        return connections;
    }

}

