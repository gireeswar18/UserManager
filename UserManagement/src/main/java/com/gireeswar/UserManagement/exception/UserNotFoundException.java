package com.gireeswar.UserManagement.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException (long id)
    {
        super("User Not Found with id " + id);
    }

}
