package com.gireeswar.UserManagement.controller;

import com.gireeswar.UserManagement.model.User;
import com.gireeswar.UserManagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin

public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public User addUser (@RequestBody User user)
    {
        return userService.addUser(user);
    }

    @GetMapping("/allUsers")
    public List<User> allUsers ()
    {
        return userService.allUsers();
    }

    @GetMapping("/getUser/{id}")
    public User getUser (@PathVariable long id)
    {
        return userService.getUser(id);
    }

    @PutMapping("/editUser/{id}")
    public User editUser (@RequestBody User user, @PathVariable long id)
    {
        return userService.editUser(user, id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable long id)
    {
        return userService.deleteUser(id);
    }

}
