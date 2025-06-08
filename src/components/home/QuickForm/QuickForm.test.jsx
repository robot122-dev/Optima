import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuickForm from "./QuickForm";

describe("QuickForm", () => {
  it("рендерит форму с правильными полями", () => {
    render(<QuickForm />);

    expect(screen.getByLabelText(/Ваше имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Номер телефона/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Адрес подключения/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Я согласен на обработку персональных данных/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Отправить заявку/i })
    ).toBeInTheDocument();
  });

  it("отображает ошибки валидации для обязательных полей", async () => {
    render(<QuickForm />);

    // Отправляем форму без заполнения полей
    fireEvent.click(screen.getByRole("button", { name: /Отправить заявку/i }));

    // Ожидаем появления сообщений об ошибках
    await waitFor(() => {
      expect(screen.getByText(/Введите ваше имя/i)).toBeInTheDocument();
      expect(screen.getByText(/Введите номер телефона/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Введите адрес подключения/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Необходимо согласие на обработку данных/i)
      ).toBeInTheDocument();
    });
  });

  it("отображает ошибку валидации для некорректного номера телефона", async () => {
    render(<QuickForm />);

    const phoneInput = screen.getByLabelText(/Номер телефона/i);
    await userEvent.type(phoneInput, "123"); // Некорректный номер

    fireEvent.click(screen.getByRole("button", { name: /Отправить заявку/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Введите корректный номер телефона/i)
      ).toBeInTheDocument();
    });
  });

  it("показывает сообщение об успешной отправке при валидных данных", async () => {
    render(<QuickForm />);

    // Заполняем форму валидными данными
    await userEvent.type(screen.getByLabelText(/Ваше имя/i), "Тест Имя");
    await userEvent.type(
      screen.getByLabelText(/Номер телефона/i),
      "+79991234567"
    );
    await userEvent.type(
      screen.getByLabelText(/Адрес подключения/i),
      "Тест Адрес"
    );
    fireEvent.click(
      screen.getByLabelText(/Я согласен на обработку персональных данных/i)
    );

    // Отправляем форму
    fireEvent.click(screen.getByRole("button", { name: /Отправить заявку/i }));

    // Проверяем сообщение об успешной отправке
    await waitFor(() => {
      expect(screen.getByText(/Заявка принята!/i)).toBeInTheDocument();
    });
  });
});
