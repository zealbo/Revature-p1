package com.revature.models.DTOs;

public class OutgoingUserDTO {

    private int UserId;

    private String username;

    private String role;

    public OutgoingUserDTO() {
    }

    public OutgoingUserDTO(int userId, String username, String role) {
        this.UserId = userId;
        this.username = username;
        this.role = role;
    }

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "OutgoingUserDTO{" +
                "UserId=" + UserId +
                ", username=" + username +
                ", role='" + role + '\'' +
                '}';
    }
}
