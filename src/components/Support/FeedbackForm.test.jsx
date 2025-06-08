import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackForm from "./FeedbackForm";

describe("FeedbackForm", () => {
  it("рендерит форму с правильными полями", () => {
    render(<FeedbackForm onSubmit={() => {}} />);

    expect(screen.getByLabelText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Сообщение/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Отправить сообщение/i })
    ).toBeInTheDocument();
  });

  it("отображает ошибки валидации для обязательных полей", async () => {
    render(<FeedbackForm onSubmit={() => {}} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Отправить сообщение/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Имя обязательно для заполнения/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Email обязателен для заполнения/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Сообщение обязательно для заполнения/i)
      ).toBeInTheDocument();
    });
  });

  it("отображает ошибку валидации для некорректного email", async () => {
    render(<FeedbackForm onSubmit={() => {}} />);

    // Заполняем все поля валидными данными
    await userEvent.type(screen.getByLabelText(/Имя/i), "Тест Имя");
    await userEvent.type(screen.getByLabelText(/Email/i), "test@example.com");
    await userEvent.type(
      screen.getByLabelText(/Сообщение/i),
      "Это тестовое сообщение для проверки формы."
    );

    // Меняем email на невалидный
    const emailInput = screen.getByLabelText(/Email/i);
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "invalid-email");
    fireEvent.blur(emailInput);

    // Нажимаем кнопку
    fireEvent.click(
      screen.getByRole("button", { name: /Отправить сообщение/i })
    );

    await waitFor(() => {
      expect(screen.getByText(/Введите корректный email/i)).toBeInTheDocument();
    });
  });

  it("показывает сообщение об успешной отправке при валидных данных", async () => {
    const mockOnSubmit = jest.fn().mockResolvedValue();
    render(<FeedbackForm onSubmit={mockOnSubmit} />);

    await userEvent.type(screen.getByLabelText(/Имя/i), "Тест Имя");
    await userEvent.type(screen.getByLabelText(/Email/i), "test@example.com");
    await userEvent.type(
      screen.getByLabelText(/Сообщение/i),
      "Это тестовое сообщение для проверки формы."
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Отправить сообщение/i })
    );

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: "Тест Имя",
        email: "test@example.com",
        message: "Это тестовое сообщение для проверки формы.",
      });
    });
  });
});
