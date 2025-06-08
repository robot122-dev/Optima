import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackForm from "./FeedbackForm";

describe("FeedbackForm", () => {
  test("renders form elements", () => {
    render(<FeedbackForm />);
    expect(screen.getByLabelText(/имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/телефон/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/сообщение/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /отправить/i })
    ).toBeInTheDocument();
  });

  test("validates required fields", async () => {
    render(<FeedbackForm />);
    const submitButton = screen.getByRole("button", { name: /отправить/i });
    fireEvent.click(submitButton);
    expect(await screen.findByText(/имя обязательно/i)).toBeInTheDocument();
    expect(await screen.findByText(/телефон обязателен/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/сообщение обязательно/i)
    ).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(<FeedbackForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByLabelText(/имя/i), "Иван Иванов");
    await userEvent.type(
      screen.getByLabelText(/телефон/i),
      "+7 (999) 123-45-67"
    );
    await userEvent.type(
      screen.getByLabelText(/сообщение/i),
      "Тестовое сообщение"
    );

    fireEvent.click(screen.getByRole("button", { name: /отправить/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "Иван Иванов",
      phone: "+7 (999) 123-45-67",
      message: "Тестовое сообщение",
    });
  });
});
