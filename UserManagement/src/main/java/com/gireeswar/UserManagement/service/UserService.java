package com.gireeswar.UserManagement.service;

import com.gireeswar.UserManagement.exception.UserNotFoundException;
import com.gireeswar.UserManagement.model.User;
import com.gireeswar.UserManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User addUser (User user)
    {
        PasswordEncoder pw = new BCryptPasswordEncoder();
        user.setPassword(pw.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User getUser(long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User editUser(User editedUser, long id) {

        PasswordEncoder pw = new BCryptPasswordEncoder();

        return userRepository.findById(id).map(user -> {
            user.setName(editedUser.getName());
            user.setEmail(editedUser.getEmail());
            user.setPassword(pw.encode(editedUser.getPassword()));
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));

    }

    public String deleteUser(long id) {

        if (!userRepository.existsById(id))
        {
            throw new UserNotFoundException(id);
        }

        userRepository.deleteById(id);
        return "User with id: " + id + " is deleted successfully";

    }
}
