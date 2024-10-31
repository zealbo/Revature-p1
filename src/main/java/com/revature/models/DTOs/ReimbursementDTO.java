package com.revature.models.DTOs;

public class ReimbursementDTO {

    private int amount;

    private String description;

    private String status;

    private int userId;

    public ReimbursementDTO() {
    }

    public ReimbursementDTO(int amount, String description, String status, int userId) {
        this.amount = amount;
        this.description = description;
        this.status = status;
        this.userId = userId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "ReimbursementDTO{" +
                "amount=" + amount +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", userId=" + userId +
                '}';
    }
}
